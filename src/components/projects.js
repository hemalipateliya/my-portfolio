import React,{Component} from 'react';
import {Card,CardTitle,CardText,CardActions,Button,CardMenu,IconButton,Grid,Cell}  from 'react-mdl';



class Projects extends Component{


	
	render(){


		return(
				<div className="projects-name">
				<Grid>
					<Cell  className="projects-desc" col={4} >
					<Card shadow={0} style={{width: '300px', margin: 'auto'}}>
    		<CardTitle style={{color: 'crimson'}}>Virtual File System</CardTitle>
				    <CardText>
				       <p>	Implemented File System Structure with directory blocks and data files which stores sub directories/data files and data respectively.
							Based on the user input different  operation can be performed on the files.
						</p>
				    </CardText>
				    <CardActions border>
				        <Button colored style={{align:'center'}}><a href="https://github.com/hemalipateliya/FileSystem">GitHub</a></Button>
				    </CardActions>
				    <CardMenu style={{color: 'pink'}}>
				        <IconButton name="share" />
				    </CardMenu>
					</Card>
					</Cell>

					<Cell  className="projects-desc" col={4} >
					<Card shadow={0} style={{width: '300px', margin: 'auto'}}>
    		<CardTitle style={{color: 'crimson'}}>E-commerce Web Service</CardTitle>
				    <CardText>
				        	<p>It is a application for e-commerce item listing/reading flow.Data replication and sharding is done as it is the part of the distributed system.
				        	It is created using NodeJS, Redis,MongoDB
							</p>
				    </CardText>
				    <CardActions border>
				        <Button colored style={{align:'center'}}><a href="https://github.com/hemalipateliya/E-commerce-web-service.git">GitHub</a></Button>
				    </CardActions>
				    <CardMenu style={{color: 'pink'}}>
				        <IconButton name="share" />
				    </CardMenu>
					</Card>
					</Cell>


					<Cell  className="projects-desc" col={4} >
					<Card shadow={0} style={{width: '300px', margin: 'auto'}}>
    		<CardTitle style={{color: 'crimson'}}>House Help Finder</CardTitle>
				    <CardText>
				      <p>It is a web application similar to Angie's list but limited to my area.It is created using HTML,CSS,MongoDB,NodeJs
				      </p>
				    </CardText>
				    <CardActions border>
				        <Button colored style={{align:'center'}}><a href="https://github.com/hemalipateliya/FirstReactApp.git">GitHub</a></Button>
				    </CardActions>
				    <CardMenu style={{color: 'pink'}}>
				        <IconButton name="share" />
				    </CardMenu>
					</Card>
					</Cell>

					<Cell  className="projects-desc" col={4} >
					<Card shadow={0} style={{width: '300px', margin: 'auto'}}>
    		<CardTitle style={{color: 'crimson'}}>Refrigerator Notes</CardTitle>
				    <CardText>
				       	<p>Refrigerator notes is like 'todo list' web application, where user can write their notes, can view all the notes and can delete particular note.
				    		</p>
				    </CardText>
				    <CardActions border>
				        <Button colored style={{align:'center'}}><a href="https://github.com/hemalipateliya/refrigerator_notes">GitHub</a></Button>
				    </CardActions>
				    <CardMenu style={{color: 'pink'}}>
				        <IconButton name="share" />
				    </CardMenu>
					</Card>
					</Cell>


				<Cell  className="projects-desc" col={4} >
					<Card shadow={0} style={{width: '300px', margin: 'auto'}}>
    		<CardTitle style={{color: 'crimson'}}>Student Registration</CardTitle>
				    <CardText>
				       	<p>	It is a student registration web application. It is created using HTML,Php
						</p>

				    </CardText>
				    <CardActions border>
				        <Button colored style={{align:'center'}}><a href="https://github.com/hemalipateliya/Student-registration.git">GitHub</a></Button>
				    </CardActions>
				    <CardMenu style={{color: 'pink'}}>
				        <IconButton name="share" />
				    </CardMenu>
					</Card>
					</Cell>

					<Cell  className="projects-desc" col={4} >
					<Card shadow={0} style={{width: '300px', margin: 'auto'}}>
    		<CardTitle style={{color: 'crimson'}}>Weather Finder</CardTitle>
				    <CardText>
				       	<p>	It is created using ReactJs. Whuch shows the temperature and condition of the perticular city beased on the user input.
						</p>

				    </CardText>
				    <CardActions border>
				        <Button colored style={{align:'center'}}><a href="https://github.com/hemalipateliya/weather-app">GitHub</a></Button>
				    </CardActions>
				    <CardMenu style={{color: 'pink'}}>
				        <IconButton name="share" />
				    </CardMenu>
					</Card>
					</Cell>


					</Grid>
					</div>



			);



	}



}
export default Projects;