

import { useState } from "react"

const Form = ()=>{


    const [count, setCount] = useState(0)
    
    const Next = () =>{
        setCount(count + 1)
    }
    const Previous = () =>{
        setCount(count - 1)
    }

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [phone, setPhone] = useState("")

    const Fname = (e)=> {
        setFirstName(e.target.value)
    }

    const Lname = (e)=> {
        setLastName(e.target.value)
    }

    const Email = (e)=> {
        setEmail(e.target.value)
    }

    const Pword = (e)=> {
        setPassword(e.target.value)
    }

    const num = (e)=> {
        setPhone(e.target.value)
    }





    const submit = (e)=>{
        e.preventDefault()
        alert("submitted")
        setFirstName("")
        setLastName("")
        setEmail("")
        setPassword("")
        setPhone("")
 
    }

 



    return(
            <div style={{margin: "0 auto", width: "300px", border: "2px solid black", height: "60vh", background: "green",padding: "3rem",borderRadius: "3rem"}}> 
                    { count < 1 ? 
                        (<div>
                            <input value={firstName} style={{width: "300px", height: "5vh", borderRadius: "1rem",border: "2px solid white"}} type ="text" placeholder="FirstName" onChange={Fname} />
                            <input value={lastName} style={{width: "300px", height: "5vh", borderRadius: "1rem",border: "2px solid white", marginTop: "2rem"}} type ="text" placeholder="LastName" onChange={Lname}/><br />
                            <button style={{width: "100px",height: "5vh", marginTop: "1rem",cursor: "pointer"}} onClick={Next}>Next</button>

                        </div>) : count == 1 ?
                   ( <div>
                        <input value={email} style={{width: "300px", height: "5vh", borderRadius: "1rem",border: "2px solid white"}} type ="email" placeholder="Enter Your Email" onChange={Email} required/>
                        <input value={password} style={{width: "300px", height: "5vh", borderRadius: "1rem",border: "2px solid white", marginTop: "2rem"}} type ="password" placeholder="Password" onChange={Pword}/><br />
                        <a style={{ fontSize: "1.2rem", }} href=" https://okohjoseph.github.io/exchange-rate/">FORGOT PASSWORD</a><br />
                        <button style={{width: "100px",height: "5vh", marginTop: "1rem", cursor: "pointer"}} onClick={Previous}>Previous</button>
                        <button style={{width: "100px",height: "5vh", marginTop: "1rem",marginLeft: "6rem",cursor: "pointer"}} onClick={Next}>Next</button>

                    </div>) : count > 1?
                   ( <div>
                        <input value={phone} style={{width: "300px", height: "5vh", borderRadius: "1rem",border: "2px solid white"}}  type ="tel" placeholder="Phone Number" onChange={num}/><br />

                        <button style={{width: "100px",height: "5vh", marginTop: "1rem",cursor: "pointer"}} onClick={Previous}>Previous</button>
                        <button onClick={submit} style={{width: "100px",height: "5vh", marginTop: "1rem", marginLeft: "6rem",cursor: "pointer"}}>Submit</button>

                    </div>) : ""
                    }
            </div>
    )
}

export default Form