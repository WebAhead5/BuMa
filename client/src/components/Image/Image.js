import React from 'react';

const Image = (props) => {
    return (<img className={"img-responsive " + props.className} role="presentation" style={props.style} src={props.src}/>);

}

export default Image;
