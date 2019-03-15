import React, { Component } from 'react';
import './App.css';
import Main from './components/main';
import {Link} from 'react-router-dom';
import {Layout,Header,Navigation,Drawer,Content} from 'react-mdl';
class App extends Component {
  render() {
    return (
     <div className="demo-big-content">
      <Layout>
        <Header className="header-color" title="Hemali's Portfolio" scroll>
          <Navigation>
            <Link to="/">Home</Link>
            <Link to="/about">About Me</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/contact"> How to Contact Me</Link>
          </Navigation>
          </Header>
          <Drawer title="Hemali's portfolio">
            <Navigation>
              <Link to="/">Home</Link>
            <Link to="/about">About Me</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/contact"> How to Contact Me</Link>
            </Navigation>
            </Drawer>
            <Content>
              <div className="page-content"/>
              <Main/>
              </Content>
            </Layout>
          </div>






    );
  }
}

export default App;
