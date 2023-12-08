const Button = (props)=>{
  const {text} = props

   return  (
    <>
     <div>
     <button style={{backgroundColor: "green",}}>{text}</button>
     </div>
    </>
   

    )
}
export default Button