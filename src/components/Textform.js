import React, {useState} from 'react'

export default function Textform(props) {
    const [text, setText] = useState("");
    const handleUpClick = ()=>{
        // console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted To Uppercase", "success");
    }
    const handleOnChange = (event)=>{
        console.log("On change")
        setText(event.target.value);
    };

    // lowercase function pandit
    const handleLoClick = ()=>{
        // console.log("Uppercase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted To Lowercase", "success");
    }

    const handleClearClick = ()=>{
        let newText = "";
        setText(newText);
    }

  return (
    <>
    <div className='container' style={{backgroundColor: props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
<div className="mb-3">
  <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='light'?'grey':'white' , color: props.mode==='dark'?'white':'#042743'}}id="myBox" rows="6"></textarea>
</div>
<button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert To Uppercase</button>
<button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert To Lowercase</button>
<button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear All</button>

    </div>
    <div className="container my-3" style={{backgroundColor: props.mode==='dark'?'white':'black'}}>
        <h2>Your text summary</h2>
        <p>{text.split(" ").length}words and {text.length}characters</p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text: "Enter Something to preview here"}</p>
    </div>
    </>
  )
  
};
