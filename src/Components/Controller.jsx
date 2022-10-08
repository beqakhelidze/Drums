import React from "react";
import Select from "./Select";

const Controller = ({
    Turned,
    ChangeSoundType,
    setAction,
    Action,
    ChangePosition,
    setVolume,
}) => {
    return (
        <div className="Controller" id="display">
            <Select Next={ChangePosition} name="Power" />
            <p id="actions">{Action}</p>
            <input
                type="range"
                onChange={(event) => {
                    if (Turned) {
                        setAction("Volume: " + event.target.value);
                    }
                    setVolume(event.target.value / 100);
                }}
            />
            <Select Next={ChangeSoundType} name="Bank" />
        </div>
    );
};

const MemoizedController = React.memo(Controller);

export default MemoizedController;