var RouteHandler = ReactRouter.RouteHandler,
    Navbar = ReactBootstrap.Navbar,
    Nav = ReactBootstrap.Nav,
    NavItem = ReactBootstrap.NavItem,
    NavItemLink = ReactRouterBootstrap.NavItemLink,
    DropdownButton = ReactBootstrap.DropdownButton,
    MenuItemLink = ReactRouterBootstrap.MenuItemLink;

var App = React.createClass({
    render: function() {
        return <div>
            <Navbar>
              <Nav>
                <NavItemLink to='home'>Home</NavItemLink>
                <DropdownButton title="Games">
                  <MenuItemLink to='game.elevator'>Elevators</MenuItemLink>
                </DropdownButton>
              </Nav>
            </Navbar>
            <RouteHandler />
        </div>
    }
});

module.exports = App;
