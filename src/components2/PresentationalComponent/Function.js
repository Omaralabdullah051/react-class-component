import React from "react";

const Clock5 = (props) => {
    return (
        <div>
            <h1>
                <span>Hello {new Date().toLocaleTimeString(props.locale)}</span>
            </h1>
        </div>
    )
};

export default Clock5;