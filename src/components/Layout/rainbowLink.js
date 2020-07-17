import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import './rainbow.scss'

const LinkComponent = (props) => {
    let styleBefore = {textDecoration: 'none', color: "white", padding: '2em'}

    const [hoverState, setHoverState] = useState({hover: false})
    const [linkStyle, setLinkStyle] = useState(styleBefore)
    
    const toggleStyle = () => {
        if (hoverState.hover) {
            setLinkStyle(styleBefore)
        } else {
            setLinkStyle(styleBefore)
        }
        setHoverState({hover: !hoverState.hover})
    };

    return (
            <Link to={props.to} style={linkStyle} 
                onMouseEnter={toggleStyle} 
                onMouseLeave={toggleStyle}>
                {
                hoverState.hover ? 
                    (
                        <ul className="c-rainbow">
                            <li className="c-rainbow__layer c-rainbow__layer--white">{props.text}</li>
                            <li className="c-rainbow__layer c-rainbow__layer--orange">{props.text}</li>
                            <li className="c-rainbow__layer c-rainbow__layer--red">{props.text}</li>
                            <li className="c-rainbow__layer c-rainbow__layer--violet">{props.text}</li>
                            <li className="c-rainbow__layer c-rainbow__layer--blue">{props.text}</li>
                            <li className="c-rainbow__layer c-rainbow__layer--green">{props.text}</li>
                            <li className="c-rainbow__layer c-rainbow__layer--yellow">{props.text}</li>
                        </ul>  
                    ):(
                        <h5>{props.text}</h5>
                    )
                }
            </Link>
    )
} 

export default LinkComponent