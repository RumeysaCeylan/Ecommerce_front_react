import { Link, Outlet, useNavigate } from "react-router-dom";

export default function RouteOutlet(){
    //ecommerce projsinde ürün detayına gitmek için kullanılabilir
    let navigate=useNavigate();

    const gotoThree=()=>{
        navigate('/three')
    }
    return(
        <div>
            <h6>Bileşen</h6>
            <Link to="/">Dizin</Link>{' '}
            <Link to="/two">iki</Link>{' '}
            <Link to="/three">üç</Link>{' '}
            <Link to="/four/301">dört</Link>{' '} 
            <button onClick={()=>gotoThree()}>üçe gezin</button>
            <Outlet/>
        </div>

    )
}