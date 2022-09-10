
import React from "react";

const Them = () => {
    return (
        <div>
            <button class="mode" onClick={() => {
                var element = document.body;
                element.classList.toggle("dark-mode");
            }}>Thememode</button>
        </div>
    );
}


export default Them;