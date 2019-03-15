import React,{Component} from 'react';
import {Grid,Cell} from 'react-mdl';
import path from './hemali.jpg'

class LandingPage extends Component{
	render(){


		return(

				<div style={{width:'100%'}}>
				<Grid className="landing-grid">
					<Cell col={12}>
					<img src={path}
					alt ="hemali"
					className="profile-pic"/>
					<div className="profile-text">
						<h1>Full Stack Web Developer</h1>
						
						<p>Skills:
						HTML5/CSS3 | JavaScript | React | d3.js |MySql | Neo4j | NodeJS | Express | MongoDB | Java | Spring | Hibernate </p>
						<div className="social-links">

						
						<a href="https://github.com/hemalipateliya" target="_blank" rel="noopener noreferred">
						<i className="fa fa-github-square" aria-hidden="true"></i>
						</a>

						<a href="https://www.linkedin.com/in/hemali-pateliya-955612b8/" target="_blank" rel="noopener noreferred">
						<i className="fa fa-linkedin-square" aria-hidden="true"></i>
						</a>





						</div>
						</div>
						</Cell>




				</Grid>


				</div>



			);



	}



}
export default LandingPage;