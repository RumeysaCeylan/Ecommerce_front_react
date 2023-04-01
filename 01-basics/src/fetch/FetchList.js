import { useEffect } from "react";

export const FetchList = () =>{
    const urlList="/json/products.json";
    useEffect(()=>{ //her değişiklik olduğunda bu fonk çağır
        console.log("Etki kullan")
        fetch(urlList)          //axious -- fetch yerine  ?? 
        .then(data=>data.json()) 
        .then(products=>
            console.log(products))
    },[urlList])
    return(
        <>
            Git - getir dizelge 
        </>
    )
}