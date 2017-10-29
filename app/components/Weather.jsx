var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var opentWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
    
    getInitialState: function (){
       
        return {

            isLoading: false
        }

    },
    
    handleSearch: function (location){
        var that = this; 

        this.setState({isLoading: true});


        opentWeatherMap.getTemp(location).then(function(temp) {

            that.setState({

                location: location,
                temp: temp,
                isLoading: false

            });

        }, function (errorMessage) {
           
            that.setState({isLoading: false});
            alert(errorMessage);
            
        });
        
    },

    render: function() {
        
        var {isLoading, temp, location} = this.state;

        function renderMessage() {


            if (isLoading) {

                return <h3 className="text-center">Gimme a sec to find the weather...</h3>;
                

            } else if (temp && location) {

                return <WeatherMessage temp={temp} location={location}/>

            }
        }

        return(

            <div>
                <h1 className="text-center">Get Weather</h1>
                <WeatherForm onSearch={this.handleSearch}/>
                {renderMessage()}
                <br/><br/><br/><br/><br/><br/>
                <p className="text-justify">About Giberish results: the Open weather map API when auto 
                    correcting names leads to some strange search queries. For 
                    example "asdf" returns weather data for "La Atalaya" in Spain,
                    others like "asdfasdf" will not work and the API will correctly
                    respond with an error.
                </p>

            </div>
        );
    }
});

module.exports = Weather;