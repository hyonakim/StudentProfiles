import React from 'react';
import $ from 'jquery';

export default React.createClass({

	imageClickHandler() {
		this.props.onImageClick();
	},

	spinClickHandler() {
		this.props.onSpinClick();
	},

	render() {
		return (
      <div>
        <h1>Masan High Student Database</h1>
        // <img src='${item.Photo}' width='40px' height='40px'/>
      </div>
		);
	   }
});