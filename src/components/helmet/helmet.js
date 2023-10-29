import React from "react";

function helmet(props) {
    document.title = "Food ordering app -" + props.title;
    return <div>{props.children}</div>;
}

export default helmet;
