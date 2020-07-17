import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import ProfilePic from '../Images/ProfilePic'
import Education from './education';
import Experience from './experience';
import Skills from './skills';
import EducationData from '../../data/education.json'
import ExperienceData from '../../data/experience.json'
import SkillsData from '../../data/skills.json'

class Resume extends Component {

    render(){
        return(
            <div>
                <Grid>
                    <Cell col={4} className="resume-left-col">
                        <ProfilePic className=""/>
                        <h2>Miguel Ruano</h2>
                        <h4>Developer</h4>
                        <hr/>
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to u
                        <hr/>
                        <h5>Address</h5>
                        <p>Guatemala City</p>
                        <h5>Phone</h5>
                        <p>32043114</p>
                        <h5>Email</h5>
                        <p>miguelruano35@gmail.com</p>
                        <h5>Website</h5>
                        <p>miguelruano35@gmail.com</p>
                        <hr/>
                    </Cell>
                    <Cell col={8} className="resume-right-col">
                        <h2>Education</h2>
                        {EducationData.map((item, i) => {     
                            return (<Education key={i} educationItem={item} />) 
                        })}
                        <hr/>
                        <h2>Experience</h2>
                        {ExperienceData.map((item, i) => {     
                            return (<Experience key={i} experienceItem={item} />) 
                        })}
                        <hr/>
                        <h2>Skills</h2>
                        {SkillsData.map((item, i) => {     
                            return (<Skills key={i} skillItem={item} />) 
                        })}
                        <hr/>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Resume