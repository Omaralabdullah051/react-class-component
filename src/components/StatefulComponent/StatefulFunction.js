import React, { useEffect, useState } from 'react';

const Clock4 = (props) => {
    const [clock, setClock] = useState(new Date())
    useEffect(() => {
        const interval = setInterval(() => {
            setClock(new Date())
        }, 1000)
        //this returns a function which stop the rendering(componentWillUnmount)
        return () => clearInterval(interval);
    }, []);//this dependency will act like componentDidMount and componentWillUpdate
    //empty array means no dependency;so the component just mount(render in the dom) one time as like as componentDidMount.when the array is fullfiled with dependencies; that will act like componentWillUpdate.
    return (
        <div>
            <h1>
                <span>Hello {clock.toLocaleTimeString(props.locale)}</span>
            </h1>
        </div>
    );
};

export default Clock4; 