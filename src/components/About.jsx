

import Button  from '../shared/Button'
import {Link} from 'react-router-dom'


const About = ()=>{

    return(
        <>
        <h2>what is your Name</h2>

        <Link to="/"><Button text="Home"/></Link>
        <Link to="/Contact"><Button text="Contact"/></Link>
        </>
        

    )
     
}

export default About