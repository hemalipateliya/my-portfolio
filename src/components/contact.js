import React,{Component} from 'react';
import {Grid,Cell,List,ListItem,ListItemContent}  from 'react-mdl';
import path from './codeF.jpg';
class Contact extends Component{
	render(){


		return(

				<div className="contact-body">
					<Grid className="contact-grid">
						<Cell col={6}>
						
						<img src={path}
						style={{height:'400px',width:'350px',marginTop:'50px'}} />
						<p style={{width:'75%', margin:'auto',paddingTop:'1em'}}>
						</p>


						</Cell>
						<Cell col={6}>
							<h2>Contact Me</h2>
							<hr/>
							<div className="contact-list">
							<List>
								<ListItem>
								<ListItemContent>
									<i className="fa fa-phone-square" aria-hidden="true"/>(408)-718-1586

								</ListItemContent>
								</ListItem>

								<ListItem>
								<ListItemContent>
									<i className="fa fa-envelope" aria-hidden="true"/>hemali.pateliya@gmail.com

								</ListItemContent>
								</ListItem>

								<ListItem>
								<ListItemContent>
									<i className="fa fa-skype" aria-hidden="true"/>hemali.pateliya

								</ListItemContent>
								</ListItem>

								
								</List>
								</div>






						</Cell>
					</Grid>
				

				</div>



			);



	}



}
export default Contact;