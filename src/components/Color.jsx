import { useState } from "react"


const Colour = ()=>{

    const [changecolor, setChangeColor] = useState("white")

    function toggleColor (e){
        setChangeColor(e.target.value)

    }


    return(

        <div >

            <div >
                
                
                <select onClick={toggleColor}  name="" id="" > 
                    <option value="">select your colour</option>
                    <option value="red">red</option>
                    <option value="yellow">yellow</option>
                    <option value="green">green</option>
                    <option value="black">black</option>
                    <option value="blue">blue</option>
                </select>
                
            </div>


        </div>



    )
}

export default Colour