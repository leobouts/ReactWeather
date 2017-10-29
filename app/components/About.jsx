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
            <h1 className="text-center page-title">About</h1>
            <p>This is a weather application build on React.</p>
            <p>Here are some of the tools I used:</p>
            <ul>
                <li>
                    <a href="https://facebook.github.io/react">React</a> Javascript Framework.
                </li>
                <li>
                    <a href="http://openweathermap.org">Open Weather Map</a> - Open Weather Map
                    used to search for weather data by city name.
                </li>
                <li>
                    <a href="https://foundation.zurb.com">Foundation</a> - responsive front-end framework.
                </li>
            </ul>
        </div>
    )
};

module.exports = About;