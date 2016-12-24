import React, { Component } from 'react'
import Comment from '../presentation/Comment';
import styles from '../layout/styles';

class Comments extends Component {
    constructor(){
        super()
            this.state = {
                comment:{
                    username: '',
                    body: '',
                    timestamp: '0:00'
                },
                list:[
                    {body:'a funny thing', username:'TrumpD', timestamp:'10:30'},
                    {body:'well there goes number 4', username:'BradshawT', timestamp:'10:32'},
                    {body:'fantastic performance by Wales', username:'SavageR', timestamp:'12:05'}
                ]
        };
    }
    
    
    updateUsername(event){
        console.log("updating username: " + event.target.value);
        // WRONG!!! Never mutate state!!
        // this.state.comment['username'] =event.target.value; 
        let updatedComment = Object.assign({}, this.state.comment);
        updatedComment['username'] = event.target.value;
        
        this.setState({
            comment: updatedComment
        });
    }
    
    updateBody(event) {
        let updatedContent = Object.assign({}, this.state.comment);
        updatedContent['body'] = event.target.value;
        this.setState({
            comment: updatedContent
        });
    }
    
    updateTimestamp(event) {
        let updatedContent = Object.assign({}, this.state.comment);
        updatedContent['timestamp'] = event.target.value;
        this.setState({
            comment: updatedContent
        });
    }
    
    submitComment(){
        console.log("Submitting comment" + JSON.stringify(this.state.comment));
        let updatedList = Object.assign([], this.state.list);
        updatedList.push(this.state.comment);
        
        this.setState({
            list: updatedList
        })
    }
    
    
    render() {
        const commentStyle = styles.comment;
        const commentList = this.state.list.map((comment, i) => {
            return (
                <li key={i}><Comment currentComment={comment} /></li>
            )
        });
        return (
            <div>
                <h2>Comments: Zone [1]</h2>
                <div style={commentStyle.commentsBox}>
                    <ul style={commentStyle.commentList}>{commentList}</ul>
                    Add a comment:<br/>
                    <input onChange={this.updateUsername.bind(this)} className="form-control" type="text" placeholder="Username"/>
                    <br/>
                    <input onChange={this.updateBody.bind(this)} className="form-control" type="text" placeholder="Comment"/>
                    <br/>
                    <input onChange={this.updateTimestamp.bind(this)} className="form-control" type="text" placeholder="Time"/>
                    <br/>
                    <button onClick={this.submitComment.bind(this)} className="btn btn-info" >Send</button>
                </div>
            </div>
        )
    }
    
}

export default Comments