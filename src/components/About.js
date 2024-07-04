// import { toBePartiallyChecked } from '@testing-library/jest-dom/matchers'
import React, { useState } from 'react'

export default function About(props) {

 let mystyle={
    color:props.mode==='dark'?'white':'black',
    backgroundColor:props.mode==='dark'?'#042743':'white',
    // border:'2px solid',
    // borderColor:props.mode==='dark'?'white':'black'
  }
  // const [mystyle,setstyle]=useState({
  //   color:'white',
  //   backgroundColor:'black'
  // })
  
  const [btntext,setbtntext]=useState("Enable Dark Mode")


  // const changecolor=()=>{
  //   if(mystyle.color ==='white'){
  //       setstyle({
  //           color:'black',
  //           backgroundColor:'white'
  //       })  
  //       setbtntext("Enable Dark Mode") 
  //   }
  //   else{
  //       setstyle({
  //           color:'white',
  //           backgroundColor:'black'
  //       })
  //       setbtntext("Disable Dark Mode") 

  //   }
  // }

  return (
 <> 
    <div className='container' >
    <div className="accordion" id="accordionExample">
  <div className="accordion-item" style={mystyle}>
    <h2 className="accordion-header" >
      <button className="accordion-button" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Accordion Item #1
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item" style={mystyle}>
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Accordion Item #2
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item" style={mystyle}>
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Accordion Item #3
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
</div>
    </div>

 {/* <div className='container'>
    <button type="button" className='btn btn-primary mx-3'onClick={changecolor} >{btntext}</button>
 </div> */}
</>
  )
}
