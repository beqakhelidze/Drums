import React from "react";

const Button = ({ obj, Turned, setAction,Sound }) => {
    return (
        <button
            id={obj.id} className="drum-pad"
            {...(Turned
                ? {
                    onClick: () => {
                        Sound(obj.url);
                        setAction(obj.id);
                    }
                }
                : {})}
        >
            <h1>{obj.name}</h1>
        </button>
    );
};

const MemoizedButton = React.memo(Button);

export default MemoizedButton;
