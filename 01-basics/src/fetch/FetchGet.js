import { useEffect } from "react";
import { useState } from 'react'

export const FetchGet = () =>{
    const initialProduct = { id: 0, name: "", price: 0.0 }
    const [product, setProduct] = useState(initialProduct);
    const productId=302;
    const urlGet="/json/product"+productId+".json";
    const nameChanged = (event) => {
        setProduct({
            id: product.id,
            name: event.target.value,
            price: product.price
        })
    }
    const priceChanged = (event) => {
        setProduct({
           ...product,
          price : event.target.value
        })
    }
    const save = (event) => {
       event.preventDefault();
       alert(`kaydediliyor... ${product.id} ${product.name} ${product.price}`)
    }

    useEffect(()=>{ //her değişiklik olduğunda bu fonk çağır
        console.log("Etki kullan")
        fetch(urlGet)          //axious -- fetch yerine kullanılabilir get ve post fonk kullanılabilir fetch -- get// post methodu options kısmına methoda post yazarak kullanılıt
        .then(data=>data.json()) 
        .then(product=>{
            setProduct(product)
            priceChanged(product)
            save(product)
        })
    },[urlGet])
    
    return(
        <div>
        <h1>
            nesne bileşeni
        </h1>
        {product.id} - {product.name} - {product.price}
        <form onSubmit={save}>
            özdeşlik : {product.id}<br />
            ad : <input type="text" value={product.name} onChange={nameChanged} /><br />
            eder : <input type="text" value={product.price} onChange={priceChanged} /><br /><br />
            <input type="submit" value="sakla" />
        </form>
    </div>
    )
}