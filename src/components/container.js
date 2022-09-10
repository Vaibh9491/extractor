

import { useState } from "react";
import React from "react";

const Heada = () => {
    function prepareUpload(event) {
        var files = event.target.files;
        var fileName = files[0].name
        alert(fileName);
    }
   
    return (
        <div className="container">
            <div>

                <label for="getFile">
                    <button className="btn" onClick={() => { document.getElementById('getFile').click() }}>
                        <div className="p2">Choose File  <div className="p1">from Your Computer</div></div>
                        <input type='file' id="getFile" name="getFile" className="kal" onChange={prepareUpload} />
                    </button>
                </label>

            </div>
            <p>
                <a href="https://drive.google.com/drive/u/0/my-drive" target="_blank" className="link">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/d/da/Google_Drive_logo.png" width="25px" className="gmi" />  Google Drive</a>
                <a href="https://www.dropbox.com/dropins/login?app_key=vtmfjqcgdq5dvuv&cont=https%3A%2F%2Fwww.dropbox.com%2Fchooser%3Fapp_key%3Dvtmfjqcgdq5dvuv%26extensions%3D%26folderselect%3Dfalse%26from_login%3DTrue%26iframe%3Dfalse%26link_type%3Ddirect%26multiselect%3Dfalse%26origin%3Dhttps%253A%252F%252Fextract.me%26trigger%3Djs%26version%3D2&default_view=sign-in&origin=https%3A%2F%2Fextract.me" target="_blank" className="link1">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Dropbox_Icon.svg/1101px-Dropbox_Icon.svg.png" width="25px" className="gmi1" />Dropbox </a>
                <a href="#" className="link2">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwg_B54i8LVvP78-1LZ9PMhCeZWCQ6sczrqA&usqp=CAU" width="25px" className="gmi2" /> URL </a>
            </p>
            <p className="drag">or drag and drop file here...</p>
        </div>
    );
}

export default Heada;