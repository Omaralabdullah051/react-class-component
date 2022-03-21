import React from "react";

class Clock6 extends React.Component {
    render() {
        return (
            <div>
                <h1>
                    <span>Hello {new Date().toLocaleTimeString(this.props)}</span>
                </h1>
            </div>
        )
    }
};

export default Clock6;
