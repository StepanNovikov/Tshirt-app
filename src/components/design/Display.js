import React from "react";
import "./Display.css";

const Display = (props) => {
    console.log(props.display.textColor)
    return (
        <div className="card card-content">
            <div className="imgTshirt text-center">
                <img
                    className="img-responsive"
                    src={`https://res.cloudinary.com/dkkgmzpqd/image/upload/v1545217305/T-shirt%20Images/${props.display.tshirtColor}.png`}
                    alt="img-Tshirt"
                />
            </div>
            <div className="nameText text-center">
                <div className="upperText">
                    <p style={{fontSize: props.textFormat, color: props.display.textColor}}>{props.display.upperText}</p>
                </div>
                <img
                    src={`${props.display.url}` || 'http://via.placeholder.com/400x300'}
                    alt="name-text"
                />
                <div className="lowerText">
                    <p style={{fontSize: props.textFormat, color: props.display.textColor}}>{props.display.lowerText}</p>
                </div>
            </div>
        </div>
    )
}

export default Display;
