import React,{useState} from 'react'

export default function Textform(props) {

  const handleUpclick=()=>{
    console.log("upercase was clicked"+text);
    let newText=text.toUpperCase();
    setText(newText)
    props.showAlert("Uppercase All text","success");
  }

  const textInvert=()=>{
    // for (let index = text.split(" ").length; index < 0; index--) {
    //   const element = text.index;
    //   setText(element)
    // }
    // console.log(text.split("0"))
    let arr=text.split(" ")
    console.log(arr.length)
    let newText=""
    for (let index = arr.length-1/*jo arr.lenght as a initial value lo to 2 word hoy to pan length 3 aavse because space pan include thay je last index ma hoy aam tya undefine aave tethi lenth-1 karvu*/; index >= 0; index--) {
     newText+=arr[index]
    }
    setText(newText)
    props.showAlert(" Invert All text","success");
  }

  const handleLoclick=()=>{
    console.log("lowercase was clicked"+text);
    let newText=text.toLowerCase();
    setText(newText)
    props.showAlert("LowerCase All text","success");

  }


const ReplaceWord=()=>{
  //it work only for first word not globally
//   let input=prompt("enter new word that replce by old world")
//   let input2=prompt("enter new word that replce by old world")
//  let regex=new RegExp(input)
//   setText(text.replace(regex,input2))

//below change globally words
let input=prompt("enter new word that replce by old world")
  let input2=prompt("enter new word that replce by old world")
 let regex=new RegExp(input,"gi")
  setText(text.replace(regex,input2))  
  props.showAlert("Replace All text","success");
 
}

const clearAll=()=>{
  let newtext=""
  setText(newtext)
  props.showAlert("Clear All text","success");
}

  const handleOnChange=(event)=>{
    console.log("On change")
    setText(event.target.value)//je evet etle type karso change karso new add karso word te settext thi value badlase
  }

 

  const [text,setText]=useState("Enter text here2")
 // text="new text";//wrong way to change the state
 //setText("new text");//correct way to change a state
 //in below    text.split(" ") it return array please try it but text.split(" ").length give length of word
  return (
 <>
    <div className='container' style={{color:props.mode==='light'?'black':'white'}}>
       <div className="mb-3">
        <h2 className='mb-4'>{props.heading}</h2>
         <textarea className="form-control" value={text} onChange={handleOnChange}  id="mybox" rows="8" style={{backgroundColor:props.mode==='light'?'white':'gray',color:props.mode==='light'?'black':'white'}}></textarea>
       </div>
       <button disabled={text.length===0} type="button" className='btn btn-primary mx-3 my-2'style={{backgroundColor:props.mode==='dark'?'black':'blue'}} onClick={handleUpclick}>UpeerCase</button>
       <button disabled={text.length===0} type="button" className='btn btn-primary mx-3 my-2'style={{backgroundColor:props.mode==='dark'?'black':'blue'}} onClick={handleLoclick}>Lowercase</button>
       <button disabled={text.length===0} type="button" className='btn btn-primary mx-3 my-2'style={{backgroundColor:props.mode==='dark'?'black':'blue'}} onClick={textInvert}>textinvert</button>
       <button disabled={text.length===0} type="button" className='btn btn-primary mx-3 my-2'style={{backgroundColor:props.mode==='dark'?'black':'blue'}} onClick={ReplaceWord}>ReplaceWord</button>
       <button disabled={text.length===0} type="button" className='btn btn-primary mx-3 my-2'style={{backgroundColor:props.mode==='dark'?'black':'blue'}} onClick={clearAll}>clearAll</button>

    </div>
    <div className='container my-4' style={{color:props.mode==='light'?'black':'white'}}>
        <h1>Your Text Summury</h1>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} character in your textarea</p>
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} minutes take for read words</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Nothing to preview"}</p>
    </div>
 </>
  )
}
