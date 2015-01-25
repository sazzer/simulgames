var App = require('./app'),
    Home = require('./home');

var Route = ReactRouter.Route,
    DefaultRoute = ReactRouter.DefaultRoute;

var routes = <Route name='home' path='/' handler={App}>
    <DefaultRoute handler={Home} />
</Route>

module.exports = routes;
