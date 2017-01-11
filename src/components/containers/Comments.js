import React, { Component } from 'react'
import Comment from '../presentation/Comment';
import CreateComment from '../presentation/CreateComment';
import styles from '../layout/styles';
import Api from '../../utils/ApiManager';

class Comments extends Component {
	constructor(props) {
		super(props)
		this.state = {
			list: []
		}
	}
    // override this function
	componentDidMount(){
	    let currComponent = this;
		console.log('Comments componentDidMount: ');
		Api.get('/api/comment', null, function(err, response) {
			if (err) { alert("Error: " + err); return;}
			
			console.log('RESULTS: ' + JSON.stringify(response.message));

            
            currComponent.setState({
                list: response.message
            })
		})
	
	}
	

    submitComment(comment){
        console.log("Submitting comment" + JSON.stringify(comment));
        //let updatedComment =Object.assign({}, this.state.comment);
        let updatedComment =Object.assign({}, comment);
        Api.post('/api/comment', updatedComment, (err, response) => {
            if(err) {alert(JSON.stringify(err)); return;}
            
            console.log(response.message);
            let updatedList = Object.assign([], this.state.list);
            updatedList.push(response.message);

            this.setState({
                list: updatedList
            })
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
                <h2>Comments for ...Zone [1]</h2>
                <div style={commentStyle.commentsBox}>
                    <ul style={commentStyle.commentList}>{commentList}</ul>
                </div>
                <CreateComment onCreate={this.submitComment.bind(this)} />
            </div>
        )
    }
    
}

export default Comments