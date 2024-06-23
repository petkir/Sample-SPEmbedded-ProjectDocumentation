import { useEffect, useState } from "react";
import { useFetchWithToken } from "../hooks/useFetchWithToken";
import { Folder } from "./Folder";
import { File } from "./File";
import { IFolderProps } from "../interfaces/IFolderProps";
import { IFileProps } from "../interfaces/IFileProps";
import { FileInput } from "./FileInput";

export function FolderItems(props: { containerId: string; id: string }) {
    const [items, setItems] = useState<IFolderProps[] | IFileProps[]>([]);
    const [loading, setLoading] = useState(true);
    const { fetchWithToken } = useFetchWithToken();
    const fetchData = async () => {
            setLoading(true);
            const rootfolder = await fetchWithToken(`https://graph.microsoft.com/v1.0/drives/${props.containerId}/items/${props.id}/children?$orderby=name`);
            rootfolder.value.forEach((item: IFolderProps | IFileProps) => {
                item.containerId = props.containerId;
            });
            setItems(rootfolder.value);
            setLoading(false);
        } 
        const uploadFile = async (file: File) => {
            const formData = new FormData();
            formData.append('file', file);
            try {
                const response = await fetchWithToken(`https://graph.microsoft.com/v1.0/drives/${props.containerId}/items/${props.id}:/children/${file.name}:/content`, {
                    method: 'PUT',
                    body: file
                });
                console.log(response);
                await fetchData();
            } catch (error) {
                console.error('Error uploading file', error);
            }
        
        }
    useEffect(() => {
      
        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.containerId, props.id]);
    return (
        <div>
            {loading && <div>Loading...</div>}
            {!loading && items.map((item) => (
                <div key={item.id}>
                    {item.folder ? (
                        <Folder {...item as IFolderProps} reloadParent={()=>{fetchData();}} />
                    ) : (
                        <File {...item as IFileProps} />
                    )}
                </div>
            ))}
            {!loading && <div>
                <FileInput  onChange={(fl:FileList)=> {
                    if(fl.length > 0 ){
                        
                        uploadFile(fl[0]) 
                    }
                    }

                    } />
                </div>}
        </div>
    );
}