import Backbone from 'backbone';
import StudentModel from './student_model';
import {AppURL} from '../parse_info';

export default Backbone.Collection.extend ({

	url: AppURL,

	model: StudentModel,

	parse(data) {
		return data.results;
	}

});



