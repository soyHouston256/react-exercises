import { useEffect, useState } from "react"
import './style.css'

export default function LoadMoreData(){
    const [loading, setLoading] = useState(false)
    const [products, setProducts] = useState<Products[]>([])
    const [count, setCount] = useState(0)
    const [disableButton, setDisableButton] = useState(false)


    interface Products {
        brand: string;
        category: string;
        description: string;
        discountPercentage: number;
        id: number;
        images: string[];
        price: number;
        rating: number;
        stock: number;
        thumbnail: string;
        title: string;
    }
    async function fetchProduct(){
        setLoading(true)
        try {
            const response = await fetch(`https://dummyjson.com/products?limit=20&skip=${ count===0 ? 0 : count*20 }`)
            const result = await response.json()
            console.log("result: ", result);
            if(result && result.products && result.products.length){
                console.log("result: validado ", result);
                setProducts((previousData)=>[...previousData, ...result.products])
                setLoading(false)
            }
            
        } catch (error) {
            return (error as Error).message
        }
    }

    useEffect(()=>{
        fetchProduct()
    },[count]);

    useEffect(()=>{
        if(products.length === 60 ){
            setDisableButton(true)
        }
    },[products])

    const handleClick = () => {
        setCount(count + 1)
    }

    if(loading){
        return <div className="wrapper-load-more-data">Loading</div>
    }

    return <div className="wrapper-load-more-data">
        <div  className="product-container" >
        {
            products && products.length ? products.map((product, index) => (
                <div key={index} className="product">
                    <img src={product.thumbnail} alt={product.title} />
                    <h3>{product.title}</h3>
                    <p>{product.description}</p>
                    <p>$ {product.price}</p>
                </div>    
            ))
            : null }
        </div>
        <div className="button-container">
            <button disabled={disableButton} onClick={handleClick}>Load More Data</button><br/>
            {
                disableButton ? <div> You have {products.length}, not found more data</div> : null
            }
        </div>
    </div>
}

