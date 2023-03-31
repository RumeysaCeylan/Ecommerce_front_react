import { useState } from 'react'

export default function ObjectComponent() {
    const initialProduct = { id: 301, name: "cep telefonu", price: 2350.0 }
    const [product, setProduct] = useState(initialProduct);

    const nameChanged = (event) => {
        setProduct({
            id: 301,
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
       alert('kaydediliyor... ${product.id} ${product.name} ${product.price}')
    }
    return (
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