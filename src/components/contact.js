import React, { Component } from 'react';
import { Grid, Cell, ListItem, List, ListItemContent} from 'react-mdl'
import ProfilePic from '../components/Images/ProfilePic'

class Contact extends Component {
    render(){
        return(
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2>Miguel Ruano</h2>
                        <ProfilePic />
                        <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                        </p>
                    </Cell>
                    <Cell col={6}>
                        <h2>Contact Me</h2>
                        <hr/>
                        <div>
                            <List className="contact-list">
                                <ListItem>
                                    <ListItemContent>
                                        <h5>
                                            <i className="fa fa-phone" aria-hidden="true"/>
                                            32043114
                                        </h5>
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent>
                                        <h5>
                                            <i className="fa fa-fax" aria-hidden="true"/>
                                            78448182
                                        </h5>
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent>
                                        <h5>
                                            <i className="fa fa-envelope" aria-hidden="true"/>
                                            miguelruano35@gmail.com
                                        </h5>
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent>
                                        <h5>
                                            <i className="fa fa-linkedin" aria-hidden="true"/>
                                            miguelruano35@gmail.com
                                        </h5>
                                    </ListItemContent>
                                </ListItem>
                            </List>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Contact