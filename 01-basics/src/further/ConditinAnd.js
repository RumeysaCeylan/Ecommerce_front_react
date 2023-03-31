import CasePositive from "./CasePositive";

export default function ConditionAnd(){
    const value=8;
    return(
        <>
        <h1>
            ve
        </h1>
        {value>5 && 
        <>
            <h1>ise</h1>
            <CasePositive/>
        </>
        
        }
    </>
        
    )


}