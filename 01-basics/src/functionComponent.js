export default function FunctionComponent(){
    const myValue=123;
    const getMyValue = ()=>{
        return 321;
    }
    const getMyResult = (parameter)=>{
        return parameter*parameter;
    }
    return(
        <div>
            <h1>
                islev bileseni
                deger : {myValue} <br></br>
                işlevim : {getMyValue()}
                degisgen : {getMyResult(12)}
            </h1>
            
        </div>
    )
}