import {BrowserRouter, Routes,Route} from 'react-router-dom'
import RouteOutlet from './RouterOutlet'
import ComponentIndex from '../module/ComponentIndex'
import ComponentTwo from '../module/ComponentTwo'
import ComponentThree from '../module/ComponentThree'
import ComponentParametric from '../module/ComponentParametric'
export default function RouteDefinitons(){

    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<RouteOutlet/>}>
                    <Route index element={<ComponentIndex/>}></Route>
                    <Route path='two' element={<ComponentTwo/>}></Route>
                    <Route path='three' element={<ComponentThree/>}></Route>
                    <Route path='four/:id' element={<ComponentParametric/>}></Route>


                </Route>
            </Routes>
        </BrowserRouter>

    )
}