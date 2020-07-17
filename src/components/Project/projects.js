import React, { Component } from 'react'
import { Tabs, Tab, Grid, Cell } from 'react-mdl'
import ProjectCard from './project-card'

class Projects extends Component {
    constructor(props){
        super(props)
        this.state = { activeTab: 0 };
    }

    toggleCategories() {
        if(this.state.activeTab === 0){
            return(
                <div className="projects-grid">
                    <ProjectCard id={this.state.activeTab}/>
                    <ProjectCard id={this.state.activeTab}/>
                    <ProjectCard id={this.state.activeTab}/>
                </div>
            )
        }
    }

    render(){
        return(
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} 
                    onChange={(tabId)=> this.setState({ activeTab: tabId})}
                    ripple>
                    <Tab>React</Tab>
                    <Tab>Angular</Tab>
                    <Tab>NodeJS</Tab>
                    <Tab>MongoDB</Tab>
                </Tabs>

                <Grid>
                    <Cell col={12}>
                        {this.toggleCategories()}
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Projects