
import { IFolderProps } from "../interfaces/IFolderProps";
import { FolderActionAdd } from "./FolderActionAdd";
import { FolderItems } from "./FolderItems";



export function FolderContainer(props: IFolderProps) {
  console.log(props);
  return (
    <div className="mt-1 mb-1">
      <div className="bg-lime-600 rounded">
        <h2 className="text-2xl font-bold">Modul {props.name}:</h2>
      </div>
      <div className="bg-lime-200 rounded ml-10">
        <FolderItems containerId={props.containerId} id={props.id} showUpload={false} />
      </div>
      <div className="bg-lime-200 rounded ml-10 mt-2">
        <FolderActionAdd containerId={props.containerId} id={props.id} />
      </div>
    </div>
  );
}