import React, { useState } from "react";

const Clock8 = () => {
    const [clock, setClock] = useState({ date: new Date() });
    setInterval(() => {
        setClock({ date: new Date() });
    }, 1000)

    return (
        <div>
            <h1>
                <span>Hello {clock.date.toLocaleTimeString()}</span>
            </h1>
        </div>
    )
}

export default Clock8;