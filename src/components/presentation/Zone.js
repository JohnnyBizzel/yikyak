// presentational componet
// "use strict"; // maybe need this?
import React, { Component } from 'react';
import styles from '../layout/styles';

class Zone extends Component {
    
    onSelectTitle(event){
        event.preventDefault();
        console.log('onSelectTitle index: ' + this.props.index);    
        this.props.select(this.props.index)
    }
    
    render() {
        
        const zoneStyle = styles.zone; // needs to be inside the render func!
        const zipCode1 = this.props.currentZone.zipCodes[0];
        const title = (this.props.isSelected) ? 
            <a style={zoneStyle.title} href="#">{this.props.currentZone.name}</a> : 
            <a href="#">{this.props.currentZone.name}</a>;
        // replaces:
        // <a style={zoneStyle.title} href="#">{this.props.currentZone.name}</a>
        
        
        return (<div style={zoneStyle.container}>
				    <h2 onClick={this.onSelectTitle.bind(this)} style={zoneStyle.header}>
				        {title}
				    </h2>
				        <span className="detail">{zipCode1}</span>
				        <br/>
				        <span>{this.props.currentZone.numComments} comments</span>
				</div>
                );
    }
}


export default Zone