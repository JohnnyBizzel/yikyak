import React, { Component } from 'react'
import styles from '../layout/styles';

class Comment extends Component {
   
    render() {
        return (
            <div>
                <p style={{fontSize:16, fontWeight:600}}>
                {this.props.currentComment.body}
                </p>
                <p>
                [{this.props.currentComment.username}] at&nbsp; 
                {this.props.currentComment.timestamp}
                </p>
                <hr/>
            </div>
        )
    }
    
}

export default Comment