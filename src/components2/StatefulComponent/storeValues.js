//Here we used useRef to store the values.

import React, { useEffect, useRef, useState } from "react";


//problem:
// const Clock9 = () => {
//     const [clock, setClock] = useState(new Date());

//     useEffect(() => {
//         const interval = setInterval(() => setClock(new Date()), 1000)
//         return () => clearInterval(interval);
//     }, []);

//     //in button tag's onClick function, we can't get access of interval;because it is existed in another function's scope.
//     return (
//         <div>
//             <h1>Hello {clock.toLocaleTimeString()}</h1>
//             <button onClick={() => clearInterval(interval)}>Stop Timer</button>
//         </div>
//     )
// }


//solution:
const Clock10 = () => {
    const [clock, setClock] = useState(new Date());

    const buttonRef = useRef(null);

    useEffect(() => {
        buttonRef.current = setInterval(() => setClock(new Date()), 1000)
        return () => clearInterval(buttonRef.current);
    }, []);

    return (
        <div>
            <h1>Hello {clock.toLocaleTimeString()}</h1>
            <button onClick={() => clearInterval(buttonRef.current)}>Stop Timer</button>
        </div>
    )
}

export default Clock10;

