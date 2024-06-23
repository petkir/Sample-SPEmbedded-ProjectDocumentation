
import { Dispatch, SetStateAction, useState } from "react";

export interface IFolderActionBaseProps {
    icon: JSX.Element;
    label: string;
    dialog: boolean;
    dialogContent?: (setDialog: Dispatch<SetStateAction<boolean>>) => JSX.Element;
    action: () => void;
}
export function FolderActionBase(props: IFolderActionBaseProps) {
    const [showDialog, setShowDialog] = useState<boolean>(false);
    return (
        <>
            {props.dialog && showDialog && props.dialogContent && (<div>
                    {props.dialogContent(setShowDialog)}
                
            </div>)
            }
            <button title={props.label}
                className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                onClick={
                    () => {
                        debugger;
                        console.log(showDialog);
                        if (props.dialog) {
                            setShowDialog(true);
                        } else {
                            props.action();
                        }

                    }
                }>
                {props.icon}
                <span className="ml-2">{props.label}</span>
            </button>
        </>
    );
}