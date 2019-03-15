import React,{Component} from 'react';
import {Cell,Grid} from 'react-mdl';

class About extends Component{
	render(){


		return(
			<div className="experience-div">
				<Grid className="experience">
				<Cell col={7} >
				
					<h2 style={{paddingTop:'2px'}}>Hemali Pateliya</h2>
					<h5> Experience</h5>
					
			
					<h6><b>Isquare Technologies</b> | Web Developer</h6>
							<p>Start Date:<span> 06/2015</span> End Date:<span>11/2016</span></p>
							<h7 className="experience-desc"> 
									Roles and responsibilities include working with stakeholders to get the requirement, work with QE members to identify the test cases, implement the requirement based on the discussion with stakeholders in a timely manner. 
									 Work with Peer members of the team to figure out the design which is scalable and optimal for the future use cases.

								</h7>


					<h6><b>Isquare Technologies</b> | Undergrade Intern</h6>
						<p>Start Date:<span> 01/2015</span> End Date:<span>06/2015</span></p>
							<h7 className="experience-desc"> 
									<p>	I did my undergraduate internship at iSquare Technologies and the project I worked on was House Help finder. 
									It is similar to what Angie’s list does but primary focused to local area within my town.</p>
									<p> Technologies used:
									<b>JavaScript, HTML5, CSS3, Node JS, Mongo DB, Bootstrap, Jquery</b></p>
							</h7>


				
				</Cell>

				<Cell col={5}>
				<h5 style={{marginTop:'80px'}}> Skills</h5>
				<h6><b>Web Technologies:-</b></h6>
					<h7>JSP/Servlet, JavaScript, AJAX, Jquery,HTML5, CSS3, Response Web Development, Mobile Web, NodeJs, Express, fetch API, ES 6,React Js
				</h7>

				<h6><b>Database:-</b></h6>
				<h7>MySql, Oracle, Mongo DB, Neo4J, Redis</h7>

				<h6><b>Environment and IDEs:-</b></h6>

				<h7>Netbeans IDE,Eclipse,SVN,Atom,Brackets,Sublime</h7>

				<h6><b>Languages:-</b></h6>
				<h7>Python,Java,J2EE</h7>








					

			
				</Cell>

					
				
				</Grid>

				<i class="fa fa-file" aria-hidden="true"><a href="https://drive.google.com/open?id=1G55BKv5k7Cz4BIMk4WTiakdUkxF_nMGe" download> Downoad </a></i>
				</div>


			);



	}



}
export default About;