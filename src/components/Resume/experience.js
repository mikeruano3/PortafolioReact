import React, {Component} from 'react'
import { Grid, Cell } from 'react-mdl'

class Experience extends Component{
    render(){
        return(
            <div>
                <Grid>
                    <Cell col={4}>
                        <h6>{this.props.experienceItem.startDate} - {this.props.experienceItem.endDate}
                        </h6>
                    </Cell>
                    <Cell col={8}>
                        <h4>{this.props.experienceItem.jobName}</h4>
                        <p>{this.props.experienceItem.jobDescription}</p>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Experience