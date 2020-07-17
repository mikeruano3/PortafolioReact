import React, {Component} from 'react'
import { Grid, Cell, ProgressBar } from 'react-mdl'

class Skill extends Component{
    render(){
        return(
            <div>
                <Grid>
                    <Cell col={12}>
                        <div style={{display: 'flex'}}>
                            <h4>{this.props.skillItem.skillName}</h4>
                            <ProgressBar className="progress-bar-resume" 
                                progress={this.props.skillItem.skillScale}/>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Skill