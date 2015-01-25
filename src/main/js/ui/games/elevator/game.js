var MainPage = require('../mainPage');

var ElevatorGame = React.createClass({
    render: function() {
        var levelSettings = {
            numElevators: {
                label: 'Number of Elevators',
                value: 1,
                type: 'number',
                readonly: true
            },
            numFloors: {
                label: 'Number of Floors',
                value: 4,
                type: 'number',
                readonly: false
            }
        };
        return <MainPage levelSettings={levelSettings}
                         onStart={this._onStart}
                         onStop={this._onStop}
                         onRestart={this._onRestart}
                         onReset={this._onReset}
                         onSettingsChange={this._onSettingsChange}></MainPage>;
    },

    _onSettingsChange: function(key, value) {
        console.log(key + " = " + value);
    },

    _onStart: function() {
        console.log("Starting");
    },

    _onStop: function() {
        console.log("Stopping");
    },

    _onRestart: function() {
        console.log("Restarting");
    },

    _onReset: function() {
        console.log("Resetting");
    }
});

module.exports = ElevatorGame;
