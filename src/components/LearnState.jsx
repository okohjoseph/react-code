import { useState } from "react"

const LearnState = () =>{

    const [count , setCount] = useState(0)

    const addition = ()=>{
        if (count < 10){

            return setCount(count + 1)

        }else return setCount(10)
        
    }

    const subtraction = ()=>{

        if (count > 0){

        return setCount(count - 1)

        }else return setCount(0)
        
    }

    const Reset =()=>{
        setCount(0)
    }
      


    return(
      
        <div>
            <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                <button onClick={addition} style={{width: "50px", height: "5vh"}}>+</button>
                <div>{count}</div>
                <button onClick={subtraction} style={{width: "50px", height: "5vh"}}>-</button>
                <button onClick={Reset} style={{marginLeft: "2rem"}}>Reset</button>
            </div>
        </div>
        



    )
}

export default LearnState