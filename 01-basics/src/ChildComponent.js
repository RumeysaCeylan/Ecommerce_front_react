export default function ChildComponent(props){ //props yerine {left , right} yazılarak da kullanılır
   
    return(
        <div>
            <h1>
              Child bileşeni
            </h1>
            sol : {props.left}<br/>
            sağ : {props.right}<br/>
            
        </div>
    )
}