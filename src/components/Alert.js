import React from "react";

function Alert(props) {
    const capitilize  = (type) => {
      const lower = type.toLowerCase(); 
      return  lower.charAt(0).toUpperCase() + lower.slice(1);
    }
  return (
    props.alert && <div
      className={`alert alert-${props.alert.type} alert-dismissible fade show`}
      role="alert"
    >
      <strong>{capitilize(props.alert.type)}</strong> :  {props.alert.msg}
    </div>
  );
}

export default Alert;
