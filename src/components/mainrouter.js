import React from 'react'
import { Switch, Route, withRouter } from 'react-router-dom'
import LandingPage from './landingpage'
import AboutMe from './aboutme'
import Contact from './contact'
import Projects from './Project/projects'
import Resume from './Resume/resume'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

const Main = withRouter(({ location }) => (
    <TransitionGroup>
        <CSSTransition
            key={location.key}
            classNames="slide"
            timeout={1000}>

            <Switch location={location}>
                <Route exact path="/" component={LandingPage} />
                <Route exact path="/aboutme" component={AboutMe} />
                <Route exact path="/contact" component={Contact} />
                <Route exact path="/projects" component={Projects} />
                <Route exact path="/resume" component={Resume} />
            </Switch>
        </CSSTransition>
    </TransitionGroup>
))

export default Main;