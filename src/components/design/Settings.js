import React from "react";

const urlImgBase = "https://res.cloudinary.com/dkkgmzpqd/image/upload/v1545217305/T-shirt%20Images/";


const Settings = (props) => {
    return (
        <div className="card bg-light container">
            <h3 className="text-center">
                Settings
            </h3>
            <h4>
                Change T-shirt color
            </h4>
            <div className="tshirt-color">
                <img onClick={props.color} src={`${urlImgBase}white.png`} alt="white-tshirt" id="white"/>
                <img onClick={props.color} src={`${urlImgBase}black.png`} alt="black-tshirt" id="black"/>
                <img onClick={props.color} src={`${urlImgBase}grey.png`} alt="grey-tshirt" id="grey"/>
                <img onClick={props.color} src={`${urlImgBase}blue.png`} alt="blue-tshirt" id="blue"/>
                <img onClick={props.color} src={`${urlImgBase}red.png`} alt="red-tshirt" id="red"/>
            </div>
            <hr/>
            <h4>Write Text</h4>
                <input onChange={props.upperText} type="text" className="form-control form-control-sm mb-2" placeholder="Upper text"/>
                <input onChange={props.lowerText} type="text" className="form-control form-control-sm" placeholder="Lower text"/>
            <hr/>
            <h4>Upload image</h4>
            <div className="form-group">
                <input onChange={props.uploadImage} type="file" className="form-control-file mb-2"/>
            </div>
            <hr/>
            <h4>Text size</h4>
                <input onChange={props.textSize} type="range" min="24" max="44"/>
            <hr/>
            <h4>Text Color</h4>
            <select onChange={props.textColor} className="form-control form-control-sm mb-2" >
                <option>white</option>
                <option>black</option>
                <option>grey</option>
                <option>blue</option>
                <option>red</option>
            </select>
            <hr/>
            <button className="btn btn-primary btn-sm mb-2">Save</button>
            
        </div>
    )
}

export default Settings;
