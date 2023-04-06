import { Outlet } from "react-router-dom";

export default function ComponentIndex(){

    return(
        <div>
            <h6>Dizin</h6>
            <Outlet/>
        </div>

    )
}