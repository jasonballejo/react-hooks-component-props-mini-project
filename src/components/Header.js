import React from "react";

function Header({ name }) {
    // const { name } = props
    // const name = props.name

    return (
        <header>
            <h1>{name}</h1>
        </header>
    )
}

export default Header;