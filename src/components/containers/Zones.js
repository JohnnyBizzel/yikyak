// render a list of Zones
// a Container component (will perform CRUD)
//"use strict"; // maybe need this?
import React, { Component } from 'react';
import Zone from '../presentation/Zone';
import CreateZone from '../presentation/CreateZone';
import Api from '../../utils/ApiManager';

//var tempList = [1,2,3];

class Zones extends Component {
	
	// This state needs sharing with Comments
	// This is where REDUX comes in to save the day :)
	constructor() {
		super()
		this.state = {
			selected: 0,
			list: []
		}
	}

	
	// override this function
	componentDidMount(){
		console.log('componentDidMount: ');
		
		// Do the /*superagent*/ request...
		Api.get('/api/zone', null, (err, response) => {
			if (err) { 
				alert("Error: " + err); 
				return;
			}
			
			console.log('RESULTS: ' + JSON.stringify(response.message));
			
			this.setState({
					list: response.message
				});
		});
	
	
	
	}
	
	// updateZone(event){
	// 	console.log('update zone: ' + event.target.id + ' = ' + event.target.value);
	// 	let updatedZone = Object.assign({}, this.state.zone);
	// 	updatedZone[event.target.id] = event.target.value;
	// 	// change the state
	// 	this.setState({
	// 		zone: updatedZone
	// 	})
	// }
	
	addZone(newZone){
		console.log('add zone: ' + JSON.stringify(newZone));
		let updatedZone = Object.assign({}, newZone);
		
		
		Api.post('/api/zone', updatedZone, (err, response) => {
			if (err) { alert("Error: (api/post) in Zones... " + JSON.stringify(err)); return;}
			
			console.log('Creating a ZONE...' + response);
			let updatedList = Object.assign([], this.state.list);
            updatedList.push(response.message);
            
            this.setState({
                list: updatedList
            })
            
		})
		
		// This adds a Zone to the local state
		/*let updatedList = Object.assign([], this.state.list);
		updatedList.push(this.state.zone);
		this.setState({
			list: updatedList
		})*/

	}
	
	onSelectTitle(index) {
		console.log("Selected Zone status");
		this.setState({ selected :  index});
	}
	
	render() {
	//const listItems = this.state.list.map((zone,i)=>{

		const listItems = this.state.list.map((zone, i) =>  {
			let selected = (i == this.state.selected)
			return (
				<li key={i}>
					<Zone index={i} select={this.onSelectTitle.bind(this)}
						isSelected={selected} currentZone={zone} /> 
				</li>
			)
	
	
		});
		return (
			<div>
				<ol>
				   {listItems}
				</ol>
				
				<CreateZone onCreate={this.addZone.bind(this)} />
			</div>
	)}
	
 
}

export default Zones;

/// progress 1:28:12