import { useEffect, useState } from "react";
import './style.css'
export default function ScroollIndicatior({url}:{url:string}) {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [scrollPercentage, setScrollPercentage] = useState(0);

    async function fetchData(url:string) {
        try {
            setLoading(true)
            const response = await fetch(url);
            const data = await response.json(); 
            if(data && data.products && data.products.length){
                setData(data.products)
            }
            setLoading(false)
        } catch (error: Error) {
           setError(error.message);
        }
    }

    useEffect(()=>{
        fetchData(url) 
    }, [url])

    function handleScroll(){
      
        const howMuchScrolled =
            document.body.scrollTop || document.documentElement.scrollTop;
  
        const height =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight;
  
        setScrollPercentage((howMuchScrolled / height) * 100);
    }

    useEffect(()=>{
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', ()=>{})
        }
    },[])

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
      <div>
        <div className="top-container">
          <h1>Custom Scroll Indicator</h1>
          <div className="scroll-progress-tracking-container">
            <div
              className="current-progress-bar"
              style={{ width: `${scrollPercentage}%` }}
            ></div>
          </div>
        </div>
        <div className="data-container">
          {data.map((item: any, index: number) => (
            <div key={index} className="product">
              <h3>{item.title}</h3>
              <p>{item.price}</p>
            </div>
          ))}
        </div>
      </div>
    );
}
