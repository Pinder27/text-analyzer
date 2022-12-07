import React, { useState } from 'react'

export default function TextForm(props) {
    

    const handleupclick = ()=>{
     //console.log("uppr case wasn clicked")
     let newText = text.toUpperCase();
     setText(newText); 
     props.showAlert("text converted to Uppercase","success");
    }

    const handledownclick = ()=>{
        //console.log("uppr case wasn clicked")
        let newText = text.toLowerCase();
        setText(newText); 
        props.showAlert("text converted to Lowercase","success");
       }
       const clear = ()=>{
        //console.log("uppr case wasn clicked")
        let newText = "";
        setText(newText); 
       }
    const handleonchange = (event)=>{
      //  console.log("on change")
    setText(event.target.value)
    }
    const handlecopy = ()=>{
        navigator.clipboard.writeText(text);
        props.showAlert("copied to clipboard!","success");
    }
    const handleExtraSpaces = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed","success");
    }
    // const replace = ()=>{
    //    let newText = text.replace(inputRef2.current.value,inputRef1.current.value)
    //    setText(newText)
    // }
    const [text, setText] = useState("");
    return (
        <>
        <div className={`container text-${props.mode==='dark'?'white':'#042743'}`}>
        <h1>{props.heading}</h1>
        <div className= "mb-3" >
          <textarea
            style = {{backgroundColor: props.mode==='dark'?'#13466e':'white',color: props.mode==='dark'?'white':'black'}}
            placeholder = "enter text here"
            value = {text}
            onChange = {handleonchange}
            className="form-control"
            id="exampleFormControlTextarea1"
            rows={10}
            //defaultValue={""}
          />
        </div>
        <button className="btn btn-primary mx-1 my-1" onClick = {handleupclick}>Convert To Uppercase</button>
        <button className="btn btn-primary mx-1 my-1" onClick = {handledownclick}>Convert To Lowercase</button>
        <button className="btn btn-primary mx-1 my-1 " onClick = {clear}>clear</button>
        <button className="btn btn-primary mx-1 my-1 " onClick = {handlecopy}>copy</button>
        <button className="btn btn-primary mx-1 my-1 " onClick = {handleExtraSpaces}>Remove extra spaces</button>
       {/* <div className="contain">
       <input className="form-control form-control-sm"  ref={inputRef1} type="text" placeholder="new word" aria-label=".form-control-sm example" id = "new"></input>
       <button className="btn btn-primary mx-1" onClick = {replace}>replace</button>
       <input className="form-control form-control-sm"  ref={inputRef2} type="text" placeholder="old word" aria-label=".form-control-sm example" id = "old"></input>
       </div> */}
        </div>

       <div className={`container my-3 text-${props.mode==='dark'?'white':'#042743'}`}>
          <h2>Your Text Summary</h2>
          <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
          <p>{0.008*(text.split(" ").filter((element)=>{return element.length!==0}).length)} minutes to read</p>
          <h2>Preview</h2>
          <p>{text.length===0?"Enter above to preview":text}</p>
       </div>
      </>
      
    )
}
