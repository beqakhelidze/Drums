import { useState } from "react";

const Select = ({ Next, name }) => {
    const [float, ChangeFloat] = useState("left");

    const Floater = () => {
        if (float === "left") {
            ChangeFloat("right");
        } else {
            ChangeFloat("left");
        }
        Next();
    };

    return (
        <div className="SelectDiv">
            {name}
            <div className="Select" onClick={() => Floater()}>
                <div className="Rectangle" style={{ float: float }}></div>
            </div>
        </div>
    );
};

export default Select;