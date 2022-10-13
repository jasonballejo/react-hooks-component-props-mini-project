import React from "react";

function About({ image = "https://via.placeholder.com/215",  about }) {
    // const { name } = props
    // const name = props.name
    console.log(image)

    return (
        <aside>
            <img src={image} alt={'blog logo'} />
            <p>{about}</p>
        </aside>
    )
}

export default About