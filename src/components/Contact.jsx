import Button  from '../shared/Button'
import {Link} from 'react-router-dom'




const Contact = ()=>{

    return(
        <div>
        <h1>let's code</h1>

        <p>ok i am ready.. let;s go</p>

        <Link to="/About"><Button text="About"/></Link>
        <Link to="/"><Button text="Home"/></Link>
        

        </div>
    


    )
}

export default Contact