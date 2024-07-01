import React,{useState} from 'react'
// useState hook use 

export default function TextForm(props) {

    // UpperCase Event handler
    const HandleUpclick =  () => {
        let UpperCase_text = text.toUpperCase();
        setText(UpperCase_text);
        props.showalert(" Convert to UpperCase ", "success");
    }

    // user can change the textArea's value
    const HandleOnChange = (evt) => {
        setText(evt.target.value)
    }

    // LowerCase Event handler
    const HandleLowerclick = () => {
        let lower_txt = text.toLowerCase();
        setText(lower_txt);
        props.showalert(" Convert to Lowercase ", "success");
    }

    // to replace extra space with sigal space
    const handleExtraspace = () => {
        let new_text = text.split(/[ ]+/);
        setText(new_text.join(" "));
        props.showalert(" Extra Spaces Removed ", "success");
    }
    
    // Capitilize Event Handler
    
    const HandleCapclick = () => {
        let str_arr = text.split(/ \| |\n/);
        let Cap_text = "";
        for(let i = 0; i < str_arr.length; i++){
           let cap_char = str_arr[i].charAt(0); 
           if(i === 0){
                Cap_text +=  str_arr[i].replace(cap_char,cap_char.toUpperCase());
            }else{
                Cap_text +=  " " + str_arr[i].replace(cap_char,cap_char.toUpperCase());
            }  
           
        }
        props.showalert(" paraGraph Capitilize ", "success");
        setText(Cap_text);
    }

    // clear button to make text clear 

    const Handleclearclick =  () => {
        setText('');
        props.showalert(" You Claer Whole Paragraph","danger")
    }

    //  copy text
    const HandleCpClick = () => {
        let copy_text = document.getElementById("Mybox");
        copy_text.select();
        navigator.clipboard.writeText(copy_text.value);
        props.showalert(" Paragraph Has Been  Copied ", "success");
    } 


    // text var and setText fucn = userState hook onchange event handler 
    // its called text set
    const [text, setText] = useState(""); 
    
  return (       
    <>
        <div className="container">
            <div className="mb-3">
                <h1>{props.heading}</h1>
                <textarea className="form-control"  onChange={HandleOnChange}  id="Mybox" value = {text} rows="8"></textarea>
                <button type="button" className="btn btn-outline-info my-2" onClick={HandleCpClick}>Copy</button>
            </div>
            {/* button convert to UpperCase  */}
            <button className="btn btn-primary my-2 mx-2" onClick={HandleUpclick}>Convert to UpperCase</button>

            {/* button convert to LowerCase  */}
            <button className="btn btn-primary my-2 mx-2" onClick={HandleLowerclick}>Convert to LowerCase</button>

            <button className="btn btn-primary my-2mx-2"  onClick={HandleCapclick}>Convert to Capitilize</button>

            <button className="btn btn-primary my-2 mx-2" onClick={Handleclearclick}>clear Text</button>
            <button className="btn btn-primary my-2 mx-2" onClick={handleExtraspace}>renove Extra Spaces</button>
           
        
        </div>

        <div className="container my-3">
            <h2>Your Text summary </h2>
            <p> {text.split(" ").length-1} words and {text.length} charecter</p>

            <p>{0.008 * text.split(" ").length} minutes to read this paragraph</p>
            <h2>Preview</h2>
            <p>{text}</p>

        </div>
    </>
  )
}

