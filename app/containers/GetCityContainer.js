var React = require('react');
var GetCity = require('../components/GetCity');

var GetCityContainer = React.createClass({

    getInitialState: function () {
        return {
            city: ''
        }
    },

    handleSubmitCity: function (e) {
        console.log(this.state.city)
    },

    handleUpdateCity: function (e) {
        this.setState({
            city: e.target.value
        })
    },

    render: function () {
        return (
            <GetCity
                onSubmitCity={this.handleSubmitCity}
                onUpdateCity={this.handleUpdateCity}
                city={this.state.city}
            />
        )
    }
});

module.exports = GetCityContainer;