var routes = require('./ui/routes');

ReactRouter.run(routes, function(Handler) {
    React.render(<Handler />, document.body);
});
