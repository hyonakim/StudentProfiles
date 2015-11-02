//Libraries and Frameworks
import Backbone from 'backbone';
import $ from 'jquery';
import React from 'react';
import ReactDom from 'react-dom';

//Collections and Models
import {StudentModel} from './resources';
import {StudentCollection} from './resources';

//Views Templates
import {AllStudents} from './views';
import {EachStudent} from './views';


export default Backbone.Router.extend ({

	routes: {

		''            : 'showStudents',
		'student:id' 	: 'showSpecificStudent',
		'editstudent' : 'modifyStudent',
		'studentform' : 'addNewStudent'
	},


  initialize(appElement) {
    this.el = appElement;
    this.students = new StudentCollection();

    let router = this;
  },


  goto(route) {
    this.navigate(route, {
      trigger: true
    });
  },


  render(component) {
    ReactDom.render(component, this.el);
  },


  showStudents() {
    this.students.fetch().then(()=>{
      this.render(
      <AllStudents 
        onImageSelect={this.students.toJSON()}  
        onHomeClick={()=>this.goto('')} 
        onImageClick={(id)=>this.goto(`profile/` + id)} 
        onModifyClick={()=>this.goto(`editstudent`)} 
        onAddClick={()=>this.goto(`studentform`)}/>
      );
    });
  },

  showSpecificStudent (id) {
    let person = this.students.find(person => person.objectId === id);

    ReactDom.render(<EachStudent src={info.objectId}/>, this.el);
  },


  modifyStudent () {

  },


  addNewStudent () {

  },


  start () {
    Backbone.history.start();
  }


});



