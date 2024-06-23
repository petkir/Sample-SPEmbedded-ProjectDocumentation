

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { IFolderProps } from '../interfaces/IFolderProps';

import {  FolderContainer } from '../components/FolderContainer';
import { useFetchWithToken } from '../hooks/useFetchWithToken';
import { IFileProps } from '../interfaces/IFileProps';
import { IDriveProps } from '../interfaces/IDriveProps';



export default function Container() {
  const params = useParams();
  const id = params.id as string;
  const [name, setName] = useState('');
  const [items, setItems] = useState<IFolderProps[] | IFileProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [containerData, setContainerData] = useState<IDriveProps | undefined>();
  const { fetchWithToken } = useFetchWithToken();


  useEffect(() => {
    async function fetchData() {
      const data = await fetchWithToken(`https://graph.microsoft.com/v1.0/drives/${id}`);
      console.log(data);
      setContainerData(data);
      await fetchItems();
      setLoading(false);
    }
    if (id) {
      setLoading(true);
      fetchData();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const fetchItems = async () => {
    setLoading(true);
    const rootfolder = await fetchWithToken(`https://graph.microsoft.com/v1.0/drives/${id}/items/root/children`);
    console.log(rootfolder);
    rootfolder.value.forEach((item: IFolderProps | IFileProps) => {
      item.containerId = id;
    });
    setItems(rootfolder.value);
    setLoading(false);
  }
  const createFolder = async (id: string, name: string) => {
    try {
      const folder = await fetchWithToken(`https://graph.microsoft.com/v1.0/drives/${id}/root/children`, {
        method: 'POST',
        body: JSON.stringify({
          name: name,
          folder: {}
        })
      });
      await fetchItems();
    } catch (error) {
      console.error('Error creating folder', error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div>
      {loading && <p>Loading...</p>}
      {!loading && !containerData && <p>Container not found</p>}
      {!loading && items.length === 0 && <p>No item found</p>}
      {!loading && <div><h1 className="text-3xl font-bold">{containerData?.name}</h1><p>{containerData?.description}</p>
      </div>}
      {!loading && items && items.length > 0 &&
        <div className='bg-lime-100'>
          {items.map((item) => {
            return <FolderContainer key={params.id + "_" + item.id} {...item} />
          }
          )}
        </div>
      }
      <div className="w-3/4 p-5 bg-lime-600">
      <form className='form-inline'>
        <label htmlFor="name p-1">Modul:</label>
        <input  title="add Module" type="text" id="name" name="name" onChange={(e) => setName(e.target.value)} value={name} className="w-m2 p-2 text-xl rounded" />
        <button type="submit" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          onClick={() => {
            createFolder(id, name as string);
          }}
        >Add</button>
      </form>
      </div>
    </div>
  );
}


