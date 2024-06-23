import { IFileProps } from "../interfaces/IFileProps";


export function File(props: IFileProps) {
    return (
        <div>
            <h2 className="text-2xl font-bold">{props.name}</h2>
            <div>
                <a href={props.previewUrl} target="_blank" className="text-blue-500">Preview</a>
                <a href={props.downloadUrl} target="_blank" className="text-blue-500">Download</a>
            </div>
        </div>
    );
}