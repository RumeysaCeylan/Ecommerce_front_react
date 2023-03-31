import ChildComponent from "./ChildComponent";

export default function ParentComponent(){
   
    return(
        <div>
            <h1>
              Ana baba bileşeni
            </h1>
            <ChildComponent left="3" right="4"/>
            
        </div>
    )
}