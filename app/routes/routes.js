var express = require('express');
var router = express.Router();
//var User = require('../models/user');

export default (app, router) => {
	/*router.get('*', function(req, res) {
	    res.sendfile('../../index.html'); // load the single view file (angular will handle the page changes on the front-end)
	});*/

	router.router('/users')
	.get((req, res) => {

      // Use mongoose to get all todo items in the database
      User.find((err, user) => {

        if(err)
          res.send(err);

        else
          res.json(user);
      });
    })

};