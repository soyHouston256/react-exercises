import { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs';
import './style.css'

export default function ImageSlider({url,  page=1, limitResult=10}: {url: string, page?: number, limitResult?: number}){
    const [images, setImages] = useState<Image[]>([]);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [errorMessage, setErrorMessage] = useState(null);
    const [loading, setLoading] = useState(false);
    
     
    interface Image {
        id: string;
        author: string;
        width: number;
        height: number;
        url: string;
        download_url: string;
    }

    async function fetchImages(getUrl:string){
        try {
            setLoading(true)
            const response = await fetch(`${getUrl}?page=${page}&limit=${limitResult}`)
            console.log(`${getUrl}?page=${page}&limit=${limitResult}`);
            console.log(response);
            const data = await response.json()         
            if(data){
                setImages(data)
                setLoading(false)
            }
            console.log(JSON.stringify(images));
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (e:any) {
            setErrorMessage(e?.message)
            setLoading(false)
        }
    }

    useEffect( ()=> {
        if(url !== '' ) fetchImages(url)
    },[url])

    const handleNext = () => {
        setCurrentSlide(currentSlide === images.length -1 ? 0 : (currentSlide + 1))
    }

    const handlePrevius = () => {
        setCurrentSlide(currentSlide === 0 ? images.length - 1 : (currentSlide - 1))
    }

    if(loading) return <div className="container">Loading...</div>

    if (errorMessage !== null) {
        return <div className="container"> {errorMessage} </div>
    }

    return (
        <div className="slide-container">
            <div className="container">
            <BsArrowLeftCircleFill onClick={handlePrevius} className="arrow arrow-left"/>
            {
                images && images.length
                ? images.map((image, index) => (
                    <img
                    key = {image.id }
                    alt = {image.download_url }
                    src = {image.download_url}
                    className={currentSlide === index ? "current-image" : "hide-current-image"}
                    />
                ))
                : null
            }
            <BsArrowRightCircleFill onClick={handleNext} className="arrow arrow-right"/>
            <span className="circle-indicators">
                {
                    images &&  images.length ? images.map(
                        (_, index) => (
                        <button
                        key={index}
                        className={
                            currentSlide === index 
                            ? "current-indicator" 
                            : "current-indicator inactive-indicator"
                        }
                        onClick={() => setCurrentSlide(index)}
                        ></button>
                    ))
                    : null}
            </span>
        </div>
        </div>
    );
}