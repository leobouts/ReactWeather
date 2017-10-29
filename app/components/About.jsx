var React = require('react');

// var About = React.createClass({
    
//     render: function() {
//         return(
//             <h3> About components</h3>

//         );
//     }
// });

var About = function (props) {
    return (
        <div>
            <h3>About</h3>
            <p> Welcome to the about page.</p>
        </div>
    )
};

module.exports = About;