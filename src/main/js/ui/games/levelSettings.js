var Input = ReactBootstrap.Input;

var LevelSettings = React.createClass({
    propTypes: {
        settings: React.PropTypes.object.isRequired
    },
    render: function() {
        var settings = [];
        Object.keys(this.props.settings).sort().forEach(function(key) {
            var setting = this.props.settings[key];
            var onChange = this.props.onChange;
            var settingChanged = function(e) {
                onChange(key, e.target.value);
            };
            settings.push(<Input type={setting.type}
                                 label={setting.label}
                                 defaultValue={setting.value}
                                 disabled={setting.readonly}
                                 onChange={settingChanged} />);
        }.bind(this));
        return <div>{settings}</div>
    }
});

module.exports = LevelSettings;
