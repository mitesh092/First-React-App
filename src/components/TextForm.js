import React,{useState} from 'react'
// useState hook use 

export default function TextForm(props) {

    // UpperCase Event handler
    const HanndleUpclick =  () => {
        let UpperCase_text = text.toUpperCase();
        setText(UpperCase_text);
    }

    // user can change the textArea's value
    const HanndleOnChange = (evt) => {
        setText(evt.target.value)
    }

    // LowerCase Event handler
    const HanndleLWclick = () => {
        let Lowercase_text = text.toLowerCase();
        setText(Lowercase_text);
    }
    
    // Capitilize Event Handler
    
    const HanndleCapclick = () => {
        let str_arr = text.split(" ");
        let Cap_text = "";
        for(let i = 0; i < str_arr.length; i++){
           let cap_char = str_arr[i].charAt(0); 
           if(i == 0){
                Cap_text +=  str_arr[i].replace(cap_char,cap_char.toUpperCase());
            }else{
                Cap_text +=  " " + str_arr[i].replace(cap_char,cap_char.toUpperCase());
            }  
           
        }
        setText(Cap_text);
    }

    // clear button to make text clear 

    const Handleclearclick =  () => {
        setText('');
    }

    // text var and setText fucn = userState hook onchange event handler 
    // its called text set
    const [text, setText] = useState(""); 
    
  return (       
    <>
        <div className="container">
            <div className="mb-3">
                <h1>{props.heading}</h1>
                <textarea className="form-control"  onChange={HanndleOnChange}  id="Mybox" value = {text} rows="8"></textarea>
            </div>
            {/* button convert to UpperCase  */}
            <button className="btn btn-primary mx-2" onClick={HanndleUpclick}>Convert to UpperCase</button>

            {/* button convert to LowerCase  */}
            <button className="btn btn-primary mx-2" onClick={HanndleLWclick}>Convert to LowerCase</button>

            <button className="btn btn-primary mx-2" onClick={HanndleCapclick}>Convert to Capitilize</button>

            <button className="btn btn-primary mx-2" onClick={Handleclearclick}>clear Text</button>
        
        </div>

        <div className="container my-3">
            <h2>Your Text summary </h2>
            <p> {text.split(" ").length} words and {text.length} charecter</p>

            <p>{0.008 * text.split(" ").length} minutes to read this paragraph</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
    </>
  )
}

