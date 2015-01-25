var Input = ReactBootstrap.Input;

var LevelSettings = React.createClass({
    propTypes: {
        settings: React.PropTypes.object.isRequired
    },
    render: function() {
        var settings = [];
        Object.keys(this.props.settings).sort().forEach(function(key) {
            var setting = this.props.settings[key];
            settings.push(<Input type={setting.type}
                                 label={setting.label}
                                 defaultValue={setting.value}
                                 disabled={setting.readonly}/>);
        }.bind(this));
        return <div>{settings}</div>
    }
});

module.exports = LevelSettings;
