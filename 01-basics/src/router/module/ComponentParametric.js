import { useParams } from "react-router-dom";

export default function ComponentParametric(){
    const { id } =useParams();
    return(
        <div>
            <h6>değiştirgen</h6>
           id {id}
        </div>

    )
}