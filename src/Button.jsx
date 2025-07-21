import React from "react"; 

function Button({label, onClick}){
    return(
        <div>
        <button className="item" onClick={onClick}>
            {label}
        </button>
        </div>
    );
}

export default Button;