import React,{Component} from 'react';
import {Cell,Grid} from 'react-mdl';

class Resume extends Component{
	render(){


		return(

				<div>
				<Grid>
				<Cell col={7}>
				<div style={{textAlign: 'center'}}>
					<h2 style={{paddingTop:'2em'}}>Hemali Pateliya</h2>
					<h4 style={{color:'grey'}}>Web Developer </h4>	
				</div>
					<h5><b>Isquare Technologies</b> | Web Developer</h5>

						
							<p>Start Date:<span> 06/2016</span> End Date:<span>11/206</span></p>
							<h5 className="aboutme-desc"> 
									Roles and responsibilities include working with stakeholders to get the requirement, work with QE members to identify the test cases, implement the requirement based on the discussion with stakeholders in a timely manner. 
									 Work with Peer members of the team to figure out the design which is scalable and optimal for the future use cases.

						</h5>

				
				</Cell>

				<Cell col={5}>
				<div style={{textAlign: 'center'}}>
					

				</div>
				</Cell>

					


				
				</Grid>
				</div>




			);



	}



}
export default Resume;