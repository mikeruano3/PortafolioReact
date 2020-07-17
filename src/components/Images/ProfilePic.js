import React from 'react';
import ProfilePic from '../../img/profile.jpeg'

const image = (props) =>{
    return (
        <img
            src={ProfilePic}
            alt="profile"
            className={props.className}
        />
    )
}

export default image