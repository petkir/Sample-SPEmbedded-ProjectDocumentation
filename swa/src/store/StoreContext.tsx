
import React, { createContext, useReducer, useContext, ReactNode, useEffect, useState } from 'react';
import { IContainerProps } from '../interfaces/IContainerProps';
import { IFolderProps } from '../interfaces/IFolderProps';
import { IFileProps } from '../interfaces/IFileProps';
import { useAuth } from '../hooks/useAuth';
import { Settings } from '../settings';


// Define the state shape
interface State {
    containers: IContainerProps[];
    folders: IFolderProps[];
    items: IFileProps[];
}

// Define actions
type Action =
    | { type: 'SET_CONTAINERS'; payload: IContainerProps[] }
    | { type: 'SET_FOLDERS'; payload: IFolderProps[] }
    | { type: 'SET_ITEMS'; payload: IFileProps[] }
    | { type: 'ADD_CONTAINER'; payload: IContainerProps };

// Initial state
const initialState: State = {
    containers: [],
    folders: [],
    items: [],
};

// Reducer function
const reducer = (state: State, action: Action): State => {
    switch (action.type) {
        case 'SET_CONTAINERS':
            return { ...state, containers: action.payload };
        case 'SET_FOLDERS':
            return { ...state, folders: action.payload };
        case 'SET_ITEMS':
            return { ...state, items: action.payload };
        case 'ADD_CONTAINER':
            return { ...state, containers: [...state.containers, action.payload] };
        default:
            return state;
    }
};

// Create context
const StoreContext = createContext<{ state: State; dispatch: React.Dispatch<Action> }>({
    state: initialState,
    dispatch: () => null,
});

// Create provider
export const StoreProvider = ({ children }: { children: ReactNode }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const { getToken } = useAuth();
    const [accessToken, setAccessToken] = useState<string | undefined>(undefined);

    useEffect(() => {
        const fetchToken = async () => {
            const token = await getToken();
            setAccessToken(token);
        };

        fetchToken();
    }, [getToken]);
    // Fetch data
    useEffect(() => {
        const fetchData = async () => {
            try {
                if (!accessToken) {
                    return;
                }
                const containersResponse = await fetchGraph(`/storage/fileStorage/containers?$filter=containerTypeId eq ${Settings.containerTypeId}&$orderby=displayName asc`
                    , accessToken);
                    console.log(containersResponse);
                const containersData: IContainerProps[] = containersResponse.value;
                dispatch({ type: 'SET_CONTAINERS', payload: containersData });

            } catch (error) {
                throw new Error('Failed to fetch data:' + error);
            }
        };

        fetchData();
    }, [accessToken]);

    return (
        <StoreContext.Provider value={{ state, dispatch }}>
            {children}
        </StoreContext.Provider>
    );
};

// Custom hook to use the store
export const useStore = () => useContext(StoreContext);


interface FetchOptions extends RequestInit {
    headers?: HeadersInit;
}

const fetchGraph = async (endpoint: string, token: string, options: FetchOptions = {}): Promise<any> => {
    
    try {
        const apiUrl = 'https://graph.microsoft.com/beta' + endpoint;
        const headers: HeadersInit = {
            ...options.headers,
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
        };


        const response = await fetch(apiUrl, { ...options, headers });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.error("Error fetching data:", error);
    }
};