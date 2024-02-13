import React, {useState} from "react";

export default function TextForm(Props) {
  
  const handleUpClick = ()=>{
    // console.log("clickrd");
    let newText =  text.toUpperCase();
    setText(newText)

  }
  const handleLoClick = ()=>{
    // console.log("clickrd");
    let newText =   text.toLowerCase();
    setText(newText)

  }
  const handleClearClick = ()=>{
    // console.log("clickrd");
    let newText =  '';
    setText(newText)
  }

 
    
    const handleOnChange = (event)=>{
      // console.log("On change");
      setText(event.target.value)
      
    }
    const handleCopy =()=>{
      var text = document.getElementById('myBox')
      text.select();
      navigator.clipboard.writeText(text.value);
    }
    const handleExtraSpaces = () => {
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "))
    }
    
   const [text, setText] = useState('Enter Text Here');

  return (
   <>
     <div className="container">
        <h2>{Props.heading}</h2>
      <div className="mb-3">
        <textarea
          className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="9" ></textarea>
        <button className="btn btn-primary mx-3 my-3" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-3 my-3" onClick={handleLoClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-3 my-3" onClick={handleClearClick}>Clear Text</button>
        <button className="btn btn-primary mx-3 my-3" onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-primary mx-3 my-3" onClick={handleExtraSpaces}>Remo Extra Spaces </button>
      </div>
    </div>
    <div className="container my-3">
      <h1>your text summary</h1>
      <p> {text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008 * text.split("  ").length} Minutes Read</p>
      <h2>Previwe</h2>
      <p>{text}</p>
    </div>
   </>
  );
}
