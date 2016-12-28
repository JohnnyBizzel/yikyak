import React, { Component } from 'react';
import Comment from './Comment';
import Api from '../../utils/ApiManager';

//var tempList = [1,2,3];

class CreateComment extends Component {
    constructor(){
        super()
            this.state = {
                comment:{
                    username: '',
                    body: ''
                }
        };
    }
    
    updateComment(event){

        // WRONG!!! Never mutate state!!
        // this.state.comment['username'] =event.target.value; 
        let updatedComment = Object.assign({}, this.state.comment);
        updatedComment[event.target.id] = event.target.value;

        this.setState({
            comment: updatedComment
        });
    }
    

    submitComment(event){
        console.log("Submitting comment (CreateComment): " + JSON.stringify(this.state.comment));
        // call the function from the container (not here as this is presentation layer)
        this.props.onCreate(this.state.comment);
    }
    
    render(){	
        return (
			<div>
              Add a comment:<br/>
                    <input onChange={this.updateComment.bind(this)} id="username" className="form-control" type="text" placeholder="Username"/>
                    <br/>
                    <input onChange={this.updateComment.bind(this)} id="body" className="form-control" type="text" placeholder="Comment"/>
                    <br/>
                 
                    <br/>
                    <button onClick={this.submitComment.bind(this)} className="btn btn-info" >Send</button>
            </div>
	    )
    }
    
}
        /* Removed Timestamp field : /*  <!-- input onChange={this.updateTimestamp.bind(this)} className="form-control" type="text" placeholder="Time"/ -->*/
export default CreateComment