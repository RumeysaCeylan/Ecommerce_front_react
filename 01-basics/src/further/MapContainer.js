export default function MapContainer(){
    const products=[
        {id:301,name:"dizüstü",price:2350},
        {id:302,name:"masaüstü",price:2350},

    ]
    return(
      <MapContainer>
        
   <div>
   <>
        
        <table>
        <tbody>
        {
            products.map(product=>
                <MapItem product={product}>
                    
                </MapItem>

                
            )
        }
        </tbody>
        </table>
   </>
   </div>
   <tr key={product.id}>
                    <td>{product.id}</td>
                    <td>{product.name}</td>
                    <td>{product.price}</td>
                </tr>
      </MapContainer>
    )

}