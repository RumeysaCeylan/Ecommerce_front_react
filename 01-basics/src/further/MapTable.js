export default function MapTable(){
    const products=[
        {id:301,name:"dizüstü",price:2350},
        {id:302,name:"masaüstü",price:2350},

    ]
    return(
        <>
        <h3>
            eşlem dizelge
        </h3>
        <table>
        <tbody>
        {
            products.map(product=>
                <tr key={product.id}>
                    <td>{product.id}</td>
                    <td>{product.name}</td>
                    <td>{product.price}</td>
                </tr>
            )
        }
        </tbody>
        </table>
   </>
    )

}