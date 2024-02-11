import { useEffect, useState } from "react";
import './style.css'
export default function RandomColor() {
    const [typeOfColor, setTypeOfColor] = useState('hex');
    const [color, setColor] = useState('#000000')

useEffect( ()=> {
    if(typeOfColor=== 'rgb') handleCreateRandomRGBColor()
    else handleCreateRandomHexColor()
},[typeOfColor]);


    function randomColorUtility(length:number) {
        return Math.floor(Math.random()*length);
    }
    function handleCreateRandomHexColor() {   
        const hex = [1,2,3,4,5,6,7,8,9, 'A', 'B', 'C', 'D', 'E', 'F'];
        let hexColor = '#';
        for(let i=0; i<6; i++){
            hexColor +=  hex[randomColorUtility(hex.length)]
        }
        setColor(hexColor)
    }
    function handleCreateRandomRGBColor() {   
        const r = randomColorUtility(256);
        const g = randomColorUtility(256);
        const b = randomColorUtility(256);

        const color  = `rgb(${r},${g}, ${b})`
        setColor(color)
    }
    return (

        <div className="wrapper-random-color" style={{'backgroundColor': color}}>
            <button className="action" onClick={()=> setTypeOfColor('hex')}> Create HEX color </button>
            <button className="action" onClick={() => setTypeOfColor('rgb')}> Create RGB color </button>
            <button className="action" onClick={typeOfColor === 'hex'
                ? handleCreateRandomHexColor
                : handleCreateRandomRGBColor}
            > Random generator</button>
            <div style={{
                display:"flex",
                justifyContent: 'center',
                alignItems: 'center',
                color: '#fff',
                fontSize: '50px',
                marginTop: '50px',
                flexDirection: "column",
                height: "80vh"
            }}>
                <h3>{typeOfColor==='hex'? 'HEX Color' : 'GRB Color'}</h3>
                <h1>{color}</h1>
            </div>
        </div>
    );
}