import $ from 'jquery';
import {AppKey, RESTKey} from './parse_info';

$.ajaxSetup ({
	headers: {
	'X-Parse-Application-Id': AppKey,
    'X-Parse-REST-API-Key': RESTKey
  }
});