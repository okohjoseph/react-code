import { useState } from "react";
import openEye from "../assets/close .png";
import closeEye from "../assets/open eye.png";

const Dropdown = () => {
  const [isEyeOpen, setIsEyeOpen] = useState(false);

  function toggleEye() {
    setIsEyeOpen(!isEyeOpen);
  }

  return (
    <div >
     <div  style={{display: "flex", textAlign: "center", }}>
      <div onClick={toggleEye}>
        {isEyeOpen ? (
          <img src={openEye} style={{width: "30px"}} alt="" />
        ) : (
          <img src={closeEye} style={{width: "30px"}} alt="" />
        )}
        
      </div>
      <div><p>items</p></div>
      </div>
      {
        isEyeOpen ? "" : (<ul>
            <li>ok</li>
            <li>by</li>
            <li>vit</li>
            <li>you</li>
            </ul>)
        
      }

     
    </div>
  );
};

export default Dropdown;
