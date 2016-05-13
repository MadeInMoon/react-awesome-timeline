var React    = require('react');
var ReactDOM = require('react-dom');
var App      = require('./App.jsx');



function startApp() {
    ReactDOM.render( <App/>, document.getElementById("app-container") );  
};

window.onload = function(){
    startApp(); 
};