var React    = require('react');
var TimeLine = require('./components/TimeLine.jsx');



module.exports = React.createClass({
  
  getInitialState: function() {
    return {}
  },

  render: function() {
    return (

      <div id="App"> 
        
        <TimeLine/>
        
      </div>
      
    )
  }
    
});