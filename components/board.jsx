import Line from "./line";
import React from "react";

export default function Board() {
    return (
        <React.Fragment>
            <Line />
            <Line color />
            <Line />
            <Line color />
            <Line />
            <Line color />
            <Line />
        </React.Fragment>
    )
}