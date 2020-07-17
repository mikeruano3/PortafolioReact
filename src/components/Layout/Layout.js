import React from 'react'
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl'
import MainRouter from '../mainrouter'
import { Link } from 'react-router-dom'
import RainbowLink from './rainbowLink.js'

function LayoutComponent() {
    return (
        <div className="demo-big-content">
            {/* Uses a header that scrolls with the text, rather than staying locked at the top */}
            <Layout>
                <Header className="header-color" 
                    title={
                        <RainbowLink to="/" text="MyPortfolio"/>} 
                    scroll>
                    <Navigation>
                        <Link to="/">Home</Link>
                        <Link to="/resume">Resume</Link>
                        <Link to="/projects">Projects</Link>
                        <Link to="/aboutme">About Me</Link>
                        <Link to="/contact">Contact</Link>
                    </Navigation>
                </Header>
                <Drawer  title={
                    <Link style={{textDecoration: 'none'}} to="/">
                        MyPortfolio
                    </Link>
                }>
                    <Navigation>
                        <Link to="/">Home</Link>
                        <Link to="/resume">Resume</Link>
                        <Link to="/projects">Projects</Link>
                        <Link to="/aboutme">About Me</Link>
                        <Link to="/contact">Contact</Link>
                    </Navigation>
                </Drawer>
                <Content>
                    <div className="page-content" />
                    <MainRouter/>
                </Content>
            </Layout>
        </div>
    );
  }
  
  export default LayoutComponent;
  