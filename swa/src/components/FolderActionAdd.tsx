import { useState } from "react";
import { useFetchWithToken } from "../hooks/useFetchWithToken";

export interface IFolderActionAddProps {
    containerId: string;
    id: string
    label?: string;
}

export function FolderActionAdd(props: IFolderActionAddProps) {
    const [name, setName] = useState("");
    const { fetchWithToken } = useFetchWithToken();
    
    const addFolder = async () => {
        await fetchWithToken(`https://graph.microsoft.com/v1.0/drives/${props.containerId}/items/${props.id}/children`, {
            method: 'POST',
            body: JSON.stringify({
              name: name,
              folder: {}
            })
          });
    }

    return (
        <div className="w-3/4 p-5">
            <form className="form-inline">
                <input type="text" title="name" name="name" onChange={(e) => setName(e.target.value)} value={name} className="w-full p-2 text-xl rounded" />
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={() => {
                        addFolder();
                    }}
                >Add</button>
            </form>
        </div>
    );
}