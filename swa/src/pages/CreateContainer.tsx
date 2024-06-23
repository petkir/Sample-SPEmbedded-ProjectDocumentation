import { useState } from "react";
import { useFetchWithToken } from "../hooks/useFetchWithToken";
import { Settings } from "../settings";
import { redirect } from "react-router-dom";
import { useStore } from "../store/StoreContext";

export function CreateContainer() {
    const { fetchWithToken } = useFetchWithToken();
    const [displayName, setDisplayName] = useState('');
    const [description, setDescription] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const store =useStore();
    //const history = useHistory();
    const createContainer = async () => {
        try {
            debugger;
            setLoading(true);
            const container = await fetchWithToken(`https://graph.microsoft.com/beta/storage/fileStorage/containers`, {
                method: 'POST',
                body: JSON.stringify({
                    displayName,
                    description,
                    containerTypeId: Settings.containerTypeId
                })
            });
            debugger;
            console.log(container);
            store.dispatch({ type: 'ADD_CONTAINER', payload: container });
            redirect(`/container/${container.id}`);
        } catch (error) {
            //  setError(error.message);
        } finally {
            setLoading(false);
        }
    };
    return (
        <div>
            <h1 className="text-3xl font-bold">Create Project</h1>
            
            <form className="w-full max-w-sm">
                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                            Display Name
                        </label>
                    </div>
                    <div className="md:w-2/3">
                        <input title="Display Name" disabled={loading} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" type="text" value={displayName} onChange={e => setDisplayName(e.target.value)} />
                    </div>
                </div>
                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                            Description
                        </label>
                    </div>
                    <div className="md:w-2/3">
                        <input title="Description" disabled={loading} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"  type="text" value={description} onChange={e => setDescription(e.target.value)} />
                    </div>
                </div>

                <div className="md:flex md:items-center">
                    <div className="md:w-1/3"></div>
                    <div className="md:w-2/3">
                        <button 
                        className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" 
                        onClick={createContainer} disabled={loading}>Create Container</button>
                        {error && <div>{error}</div>}
                    </div>
                </div>
            </form>

        </div>
    );
}