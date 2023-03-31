export default function EventComponent(){
   const handle=()=>{
    alert('kotarılıyor')
   }
   const deal =(input)=>{
    alert('uğraşılıyor '+input)
   }
   const manage =(event)=>{
    alert('işlrtiliyor '+event.target.id+" "+event.target.tagName)
   }
    return(
        <div>
            <h1>
               biçim bileşeni
            </h1>
            <form>
                <button onClick={()=>alert("içleniyor")}>
                çizgi içi
                </button>{' '}
                <button onClick= {handle}>ok</button>{' '}
                <button onClick={()=>deal('Girdi')}>değiştirgen</button>{' '}
                <button id="manager" onClick={(event)=>manage(event)}> olay</button>{' '}

            </form>
            
        </div>
    )
}