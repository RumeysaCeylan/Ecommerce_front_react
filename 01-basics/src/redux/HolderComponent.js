import {useDispatch,useSelector} from 'react-redux'

export function HolderComponent(){
    const quantity =useSelector(state => state.quantity)
    const dispatch = useDispatch();
    const quantityIncrement=()=>{
        dispatch({type: 'quantity/increment'})
    }
    const quantityAdded=()=>{
        dispatch({type: 'quantity/add',
        delta: 3
    })
    //yeni bir fonksiyon yap input aldığın sayı kadar ekle
    }
    return (
        <>
            Nicelik : {quantity}
            <button onClick={()=> quantityIncrement()}>
            Artır
            </button>
            <button onClick={()=> quantityAdded()}>
            Ekle
            </button>
        </>
    )
}