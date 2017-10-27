var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');

var Weather = React.createClass({
    
    getInitialState: function (){
        return{
            location: 'Miami',
            temp: 25
        }
    },
    
    handleSearch: function (location){
        this.setState({
            location: location,
            temp: 23
        });
    },

    render: function() {

        var {temp, location} = this.state;

        return(
            <div>
                <h3> weather components</h3>
                <WeatherForm onSearch={this.handleSearch}/>
                <WeatherMessage temp={temp} location={location}/>
            </div>
        );
    }
});

module.exports = Weather;