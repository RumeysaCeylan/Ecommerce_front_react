import { useEffect, useState } from "react";

export const FetchListState = () =>{
    const initialProducts=[]
    const [products,setProducts] = useState(initialProducts)

    const urlList="/json/products.json";
    useEffect(()=>{ //her değişiklik olduğunda bu fonk çağır
        console.log("Etki kullan")
        fetch(urlList)          //axious -- fetch yerine  ?? 
        .then(data=>data.json()) 
        .then(products=>{
            setProducts(products)
            console.log(products)
        }
           )
    },[urlList])
    return(
        
            products.map(product=>
                <tr key={product.id}>
                    <td>{product.id}</td>
                    <td>{product.name}</td>
                    <td>{product.price}</td>
                </tr>
                )
        
    )
}