import { useAuth } from './useAuth';

interface FetchOptions extends RequestInit {
  headers?: HeadersInit;
}

export const useFetchWithToken = () => {
  const { getToken } = useAuth();

  const fetchWithToken = async (url: string, options: FetchOptions = {}): Promise<any> => {
    const token = await getToken();
    if (!token) {
      throw new Error('No access token available');
    }

    const headers: HeadersInit = {
      ...options.headers,
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
    };

    const response = await fetch(url, { ...options, headers });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    if(response.status === 204) return;
    
    return await response.json();
  };

  return { fetchWithToken };
};
