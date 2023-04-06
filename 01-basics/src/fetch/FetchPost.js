export const FetchPost = ()=>{
    const options={
        method : 'POST',
        headers : {'Content-Type' : 'application/json'},
        body : JSON.stringify(product)
    };
    fetch(urlPost,options
        .then(data=>(data.json()))
        .then(result=>{
            console.log(result)
        })
        );
}