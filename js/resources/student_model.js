import Backbone from 'backbone';

let StudentModel = Backbone.Model.extend ({

	urlRoot: 'https://api.parse.com/1/classes/MasanHigh',

	idAttribute: 'objectId'

});

export default StudentModel;