import React from 'react';
import ReactDom from 'react-dom';
import './ajax_setup';

import Router from './router';

let element = document.querySelector('.app');

let router = new Router (element);
router.start();	

window.router = router;

