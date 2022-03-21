import React from "react"

class Clock2 extends React.Component {
    render() {
        return (
            <div>
                <h1>
                    <span>Hello {new Date().toLocaleTimeString(this.props.locale)}</span>
                </h1>
            </div>
        )
    }
}


export default Clock2;