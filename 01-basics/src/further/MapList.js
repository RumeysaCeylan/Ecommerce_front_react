export default function MapList(){
    const names=['HTML','CSS','JS','JSON','AJAX']
    return(
        <>
        <h3>
            eşlem dizelge
        </h3>
        <ul>
            {
                names.map( name=>
                    <li>{name}</li>
                )
            }
        </ul>
        </>
    )

}