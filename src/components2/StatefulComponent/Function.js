import React, { useEffect, useState } from "react";

const Clock8 = () => {
    const [clock, setClock] = useState(new Date());
    useEffect(() => {
        const interval = setInterval(() => setClock(new Date()), 1000)
        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <h1>
                <span>Hello {clock.toLocaleTimeString()}</span>
            </h1>
        </div>
    )
}

export default Clock8;

