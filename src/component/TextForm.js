import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    console.log("Uppercase was click" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("converted to uppercase", "success: ");
  }
  const handleDownClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("converted to lowercase", "success: ");
  }
  const handleOnChange = (event) => {
    console.log("On Changed");
    setText(event.target.value);
  }
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Copied to clipboard!", "success: ");
  }
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed", "success: ");
  }
  const handleClearClick = () => {
    let newText = '';
    setText(newText);
    props.showAlert("Text Cleared!", "success: ");
  }
  const [text, setText] = useState('');
  // text="new text";  // wrong way to change state
  // setText("new text");  // correct way to change state
  return (
    <>
      <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control" value={text} onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === 'dark' ? '#193c5c' : 'white'
              , color: props.mode === 'dark' ? 'white' : '#042743'
            }} id="myBox" rows="8"></textarea>
        </div>
        <button disabled={text.length === 0} className="btn btn-primary my-2 mx-2" onClick={handleUpClick} >Convert to UpperCase</button>
        <button disabled={text.length === 0} className="btn btn-primary my-2 mx-2" onClick={handleDownClick} >Convert to Lowercase</button>
        <button disabled={text.length === 0} className="btn btn-primary my-2 mx-2" onClick={handleCopy} >CopyText</button>
        <button disabled={text.length === 0} className="btn btn-primary my-2 mx-2" onClick={handleExtraSpaces} >RemoveExtraSpaces</button>
        <button disabled={text.length === 0} className="btn btn-primary my-2 mx-2 " onClick={handleClearClick} >ClearText</button>
      </div>
      <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
        <h1>your text summary</h1>
        <p>{text.split(" ").filter((element) => { return element.length !== 0 }).length} words , {text.length} charecters</p>
        <p>{0.008 * text.split(" ").filter((element) => { return element.length !== 0 }).length} Minuts Read</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "NOthing to preview"}</p>
      </div>
    </>
  );
}
