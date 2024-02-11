import { useState } from "react"
import data from "./data"
import "./style.css"
export default function Accordian() {
    const [selected, setSelected] = useState<string|null>(null)
    const [enableMultiSelection, setEnableMultiSelection] = useState(false)
    const [multiple, setMultiple] = useState([])
    
    function handleSingleSelection(getCurrentId:string){
        setSelected(getCurrentId === selected ? null: getCurrentId)
    }
    function handleMultipleSelection(getCurrentId:string){
        const copyMultiple = [...multiple]
        const findIndexOfCurrentId = copyMultiple.indexOf(getCurrentId as never)
        if(findIndexOfCurrentId === -1) {
            copyMultiple.push(getCurrentId as never)
        }else{
            copyMultiple.splice(findIndexOfCurrentId, 1)
        }
        setMultiple(copyMultiple)
        console.log(copyMultiple)
    }
    return <div className="wrapper-accordion">
        <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>
            {
                enableMultiSelection ? 'Disable Multi Selection': 'Enable Multi Selection' 
            }
            
        </button>
        <div className="accordian">
            {
                data && data.length >0 ?
                data.map(dataItem => (
                    <div onClick={enableMultiSelection
                        ? ()=> handleMultipleSelection(dataItem.id)
                        : ()=>handleSingleSelection(dataItem.id)} className="item">
                        <div className="title">
                            <h3>{dataItem.question}</h3>
                            <span>+</span>
                        </div>
                        { enableMultiSelection
                        ? multiple.indexOf(dataItem.id as never) !== -1 && (
                            <div className="content">{dataItem.answer}</div>)
                        : selected === dataItem.id && (
                            <div className="content">{dataItem.answer}</div>)
                        }
                    </div>
                ))
                : <div>No data found</div>
            }
        </div>

    </div>
}