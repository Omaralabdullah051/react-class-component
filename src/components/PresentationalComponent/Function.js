import React from 'react';

const Clock1 = (props) => {
    return (
        <div>
            <div>
                <h1>
                    <span>Hello {new Date().toLocaleTimeString(props.locale)}</span>
                </h1>
            </div>
        </div>
    );
};

export default Clock1;