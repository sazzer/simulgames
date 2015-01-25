var App = require('./app'),
    Home = require('./home'),
    ElevatorGame = require('./games/elevator/game.js');

var Route = ReactRouter.Route,
    DefaultRoute = ReactRouter.DefaultRoute;

var routes = <Route name='home' path='/' handler={App}>
    <Route name='game.elevator' path='/games/elevator' handler={ElevatorGame}/>
    <DefaultRoute handler={Home} />
</Route>

module.exports = routes;
