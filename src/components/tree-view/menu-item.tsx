import { useState } from "react";
import MenuList from "./menu-list";
import { FaMinus, FaPlus } from "react-icons/fa";

export default function MenuItem({ item }) {
    const [displayCurrentChildren, setDisplayCurrentChildren] = useState({});
    function handleToggleChildren(getCurrentLevel) {
        setDisplayCurrentChildren({
                ...displayCurrentChildren,
                [getCurrentLevel]: !displayCurrentChildren[getCurrentLevel]    
        })
    }
    return <li >
        <div className="menu-item">
            <p>{item.label}</p>
            {
                item && item.children && item.children.length ? <span onClick={() => handleToggleChildren(item.label)}>
                    {displayCurrentChildren[item.label] ? < FaMinus color="#FFF" size={25}/> : <FaPlus color="#FFF" size={25}/>}
                </span>: null
            }
        </div>
        {
            item && item.children && item.children.length && displayCurrentChildren[item.label] ?
                (<MenuList list={item.children} />)
                : null                 
        }
    </li>
}