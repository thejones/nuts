/**
 * @jsx React.DOM
 */

var React           = require('react');
var Link            = require('react-router').Link;
var Navbar          = require('react-bootstrap/Navbar');
var Nav             = require('react-bootstrap/Nav');
var NavItem         = require('react-bootstrap/NavItem');
var MenuItem    = require('react-bootstrap/MenuItem');
var DropdownButton  = require('react-bootstrap/DropdownButton');


var Header = React.createClass({

  _onChange: function() {
    var newState = require('../../stores/session').attributes;
    this.setState(newState);
  },

  getInitialState: function() {
    return {
      isAuthenticated: this.props.session.isAuthenticated || false
    };
  },

  componentDidMount: function() {
    require('../../stores/session').on('change', this._onChange);
  },

  render: function() {

    var userMenu;
    if(!this.state.isAuthenticated) {
      userMenu = (
        <Nav right>
          <li>
            <Link to="login">Login</Link>
          </li>
          <li>
            <Link to="/signup">Create Account</Link>
          </li>
        </Nav>
      );
    } else {
      userMenu = (
        <Nav right>
          <li>
            <DropdownButton navItem title="test">
              <MenuItem eventKey={1} href="/logout">Logout</MenuItem>
            </DropdownButton>
          </li>
        </Nav>
      )
    }

    var brand = (
      <Link to="/">
        <span className="ion-cube"></span> App Name
      </Link>
    );


    return (
      <Navbar fixedTop toggleNavKey={1} brand={brand}>
        {userMenu}
      </Navbar>
    );
  }

});

module.exports = Header;