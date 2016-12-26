// render a list of Zones
// a Container component (will perform CRUD)
"use strict"; // maybe need this?
import React, { Component } from 'react';
import Zone from '../presentation/Zone';
import { ApiManager } from '../../utils/ApiManager';

//var tempList = [1,2,3];

class Zones extends Component {
	constructor() {
		super()
		this.state = {
			zone:{
				name:'',
				zipCodes:''
			},
			list: []
		}
	}
	/* Dummy data
	{name:'Zone 1', zipCode:'10101',numComments:10},
				{name:'Zone 2', zipCode:'10012',numComments:20},
				{name:'Zone 3', zipCode:'90210',numComments:30},
				{name:'Zone 4', zipCode:'60077',numComments:40}
	*/
	
	// override this function
	componentDidMount(){
		console.log('componentDidMount: ');
		ApiManager.get('api/zone', null, (err, response) =>{
			if (err) { alert("Error: " + err); return;}
			
			console.log('RESULTS: ' + JSON.stringify(response.results));
			
			this.setState({
					list: response.results.body
				})
		})
		/*superagent
			.get('api/zone')
			.query(null)
			.set('Accept', 'application/json')
			.end((err, response) => {
				if (err) { alert("Error: " + err); return;}
				console.log(JSON.stringify(response.body));
				
				let results = response.body.message;
				
				this.setState({
					list: results
				})
			})
		*/
	}
	
	updateZone(event){
		console.log('update zone: ' + event.target.id + ' = ' + event.target.value);
		let updatedZone = Object.assign({}, this.state.zone);
		updatedZone[event.target.id] = event.target.value;
		// change the state
		this.setState({
			zone: updatedZone
		})
	}
	
	addZone(){
		console.log('add zone: ' + event.target.zone);
		let updatedZone = Object.assign({}, this.state.zone);
		// set ZipCodes to be an array - break up the string
		updatedZone['zipCodes'] = updatedZone.zipCode.split(',');
		
		ApiManager.post('/api/zone', updatedZone, (err, response) => {
			if (err) { alert("Error: " + err); return;}
			
			console.log('Creating a ZONE...' + response);
		})
		
		// This adds a Zone to the local state
		/*let updatedList = Object.assign([], this.state.list);
		updatedList.push(this.state.zone);
		this.setState({
			list: updatedList
		})*/

	}
	render() {
	//const listItems = this.state.list.map((zone,i)=>{

		const listItems = this.state.list.map((zone, i) =>  {
			return (
				<li>
					<Zone currentZone={zone} /> 
				</li>
			)
	
	
		});
		return (
			<div>
				<ol>
				   {listItems}
				</ol>
			
			 Add a Zone:<br/>
                    <input id="name" onChange={this.updateZone.bind(this)} className="form-control" type="text" placeholder="Name"/>
                    <br/>
                    <input id="zip" onChange={this.updateZone.bind(this)} className="form-control" type="text" placeholder="Zip Code"/>
                    <br/>
                    
                    <br/>
                    <button onClick={this.addZone.bind(this)} className="btn btn-info" >Add Zone</button>
			</div>
	)}
	
 
}

export default Zones;