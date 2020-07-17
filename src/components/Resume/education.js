import React, {Component} from 'react'
import { Grid, Cell } from 'react-mdl'

class Education extends Component{
    render(){
        return(
            <div>
                <Grid>
                    <Cell col={4}>
                        <h6>{this.props.educationItem.startDate} - {this.props.educationItem.endDate}
                        </h6>
                    </Cell>
                    <Cell col={8}>
                        <h4>{this.props.educationItem.schoolName}</h4>
                        <p>{this.props.educationItem.schoolDescription}</p>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Education