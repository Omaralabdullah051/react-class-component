import React, { useState } from 'react';


const Clock4 = (props) => {
    const [clock, setClock] = useState({ date: new Date() })
    setInterval(() => {
        setClock({ date: new Date() });
    }, 1000)
    return (
        <div>
            <h1>
                <span>Hello {clock.date.toLocaleTimeString(props.locale)}</span>
            </h1>
        </div>
    );
};

export default Clock4; 