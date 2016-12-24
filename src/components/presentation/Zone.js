// presentational componet
// "use strict"; // maybe need this?
import React, { Component } from 'react';
import styles from '../layout/styles';

class Zone extends Component {
    
    render() {
        
        const zoneStyle = styles.zone; // needs to be inside the render func!
        const zipCode1 = this.props.currentZone.zipCodes[0];
        return (<div style={zoneStyle.container}>
				    <h2 style={zoneStyle.header}>
				        <a style={zoneStyle.title} href="#">{this.props.currentZone.name}</a>
				    </h2>
				        <span className="detail">{zipCode1}</span>
				        <br/>
				        <span>{this.props.currentZone.numComments} comments</span>
				</div>
                );
    }
}


export default Zone