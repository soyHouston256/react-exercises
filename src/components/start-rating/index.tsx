import { useState } from 'react';
import { FaStar} from 'react-icons/fa'
import './style.css'

export default function StartRating({noOfStart=5}) {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    function handleClick(getCurrentIndex: number){
        setRating(getCurrentIndex)
    }
    function handleMouseEnter(getCurrentIndex: number){
        setHover(getCurrentIndex)
    }
    function handleMouseLeave(getCurrentIndex: number){
        setHover(getCurrentIndex)
    }

    return (
        <div className='wrapper-start'>
            <div className="start-rating">
                {
                    [...Array(noOfStart)].map((_, index) => {
                        index += 1
                        return <FaStar
                            key={index}
                            className={index <= (hover || rating) ? 'active' : ''}
                            onClick={() => handleClick(index)}
                            onMouseMove={()=> handleMouseEnter(index)}
                            onMouseLeave={ ()=> handleMouseLeave(index)}
                            size={40}
                        ></FaStar>
                    })
                }
            </div>
        </div>
        )
}