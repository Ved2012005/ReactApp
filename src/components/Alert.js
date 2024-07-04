import React from 'react'

function Alert(props) {
  const Capatalize=(word)=>{
    const lower=word.toLowerCase();
    return lower.charAt(0).toUpperCase()+lower.slice(1);
  }
  return (
    <>
  
    <div className='container '>

   {props.alert && <> <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        {/* <strong>Holy guacamole!</strong> You should check in on some of those fields below. */}
        {/* {props.alert} */}
        <strong>{Capatalize(props.alert.type)}</strong>:{props.alert.msg}
        {/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
      </div>
      {/* <div>hello</div> */}
      </>}
    </div>
    </>
    
   
   
  
  )
}

export default Alert

