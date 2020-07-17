import React, { Component } from 'react';
import { Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';
import ReactLogo from '../../img/react-logo.png'

class ProjectCard extends Component {
    constructor(props){
        super(props)
        this.state = { activeTab: 0 };
    }
    render() {
        return (
           <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color: '#fff', height: '176px', 
                background: `url(${ReactLogo}) center / cover` }}>
                    Welcome
                </CardTitle>
                <CardText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Mauris sagittis pellentesque lacus eleifend lacinia...
                </CardText>
                <CardActions border>
                    <Button colored>GitHub</Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share" />
                </CardMenu>
           </Card>
        )
    }
}

export default ProjectCard