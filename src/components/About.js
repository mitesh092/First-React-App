import React, {useState} from "react";

export default function About() {
  const[mystyle,setMystyle] = useState(
    {
      color : "black",
      backgroundColor : "white"
    }
  );
  const [btntext,setbtntext] = useState("Enable Dark mode");

  const toggleStyle = () => {
    if(mystyle.color === "black"){
      setMystyle({
        color : "white",
        backgroundColor : "black",
        border : "2px solid white"
      })
      setbtntext("Enable Light mode")
      
    }else{
      setMystyle({
        color : "black",
        backgroundColor : "white"
      })
      setbtntext("Enble Dark mode")
    }
  }
    
  return (
    <div className="container" style={mystyle}>
      <h1 className="my-3">About Us</h1>
      <div className="accordion accordion-flush" id="accordionFlushExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              style={mystyle}
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
            >
              TextUtils: Simplifying Text Manipulation Tasks
            </button>
          </h2>
          <div
            id="flush-collapseOne"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body " style={mystyle}>
              TextUtils is designed to streamline text manipulation tasks, from converting case to analyzing readability metrics.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              style={mystyle}
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseTwo"
              aria-expanded="false"
              aria-controls="flush-collapseTwo"
            >
              TextUtils: Empowering Effortless Text Editing
            </button>
          </h2>
          <div
            id="flush-collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body" style={mystyle}>
              Our app provides intuitive tools for effortless text editing, ensuring clarity and efficiency in every keystroke.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              style={mystyle}
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseThree"
              aria-expanded="false"
              aria-controls="flush-collapseThree"
            >
              TextUtils: Essential Tools for Content Creators
            </button>
          </h2>
          <div
            id="flush-collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body" style={mystyle}>
              TextUtils empowers users with essential features like case conversion, word counting, and text summarization, making it a must-have for content creators and editors alike.
            </div>
          </div>
        </div>
      </div>

      <div className="container my-3">
        <button  type="button" className="btn btn-primary" onClick={toggleStyle}>{btntext}</button>
      </div>
    </div>
  );
}
