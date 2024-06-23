

import {  useState } from "react";
import { Link } from "react-router-dom";
import { useStore } from "../store/StoreContext";
import { IContainerProps } from "../interfaces/IContainerProps";

export function ContainerNavigation() {
    const [search, setSearch] = useState<string>("");
    const { state } = useStore();
    console.log(state);
    return (
        <div className="mb-2">
            <input type="text" placeholder="Search" value={search.length===0?undefined:search} className="w-full p-2 text-xl rounded" onChange={(e)=> setSearch(e.target.value)} />
            
            <div className={"rounded"} style={{marginTop:"2em",padding:"0.1em 0.5em",backgroundColor:"rgba(255,255,255,0.1)"}}>
            <ul>
                {state.containers && state.containers.length >0 && state.containers
                .filter(f=>{
                    return search.length===0 || f.displayName.toLowerCase().includes(search.toLowerCase());
                    }).map((item) => 
                    <ContainerItem key={item.id} {...item} />
                )}
            </ul>
            </div>
        </div>
    );
}



export function ContainerItem(props: IContainerProps) {
    return (
        <li className="mb-2">
            <Link to={`container/${props.id}`} className="text-white">
            {props.displayName}
            </Link>
            
        </li>
    );
}