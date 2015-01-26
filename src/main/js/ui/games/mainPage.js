var LevelSettings = require('./levelSettings'),
    CodeMirror = require('./codeMirror');

var Button = ReactBootstrap.Button,
    ButtonToolbar = ReactBootstrap.ButtonToolbar;

var MainPage = React.createClass({
    render: function() {
        return <div>
            <div className='row'>
                <div className='col-md-12'>
                    Game Output Here
                </div>
            </div>
            <div className='row'>
                <div className='col-md-8'>
                    <CodeMirror style={{'border': '1px solid black'}} mode='javascript' lineNumbers='true' />
                </div>
                <div className='col-md-4'>
                    <LevelSettings settings={this.props.levelSettings} onChange={this.props.onSettingsChange}/>
                </div>
            </div>
            <div className='row'>
                <div className='col-md-12'>
                    <ButtonToolbar>
                        <Button bsStyle='primary' onClick={this.props.onStart}>Start</Button>
                        <Button onClick={this.props.onStop}>Stop</Button>
                        <Button onClick={this.props.onRestart}>Restart</Button>
                        <Button bsStyle='danger' onClick={this.props.onReset}>Reset</Button>
                    </ButtonToolbar>
                </div>
            </div>
        </div>;
    }
});

module.exports = MainPage;
