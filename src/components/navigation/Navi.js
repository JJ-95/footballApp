import React from "react";
import AppBar from "material-ui/AppBar";
import Drawer from "material-ui/Drawer";
import MenuItem from "material-ui/MenuItem";
import { NavLink } from "react-router-dom";

export default class NaviBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
  }

  handleToggle = () => this.setState({ open: !this.state.open });

  render() {
    return (
      <div>
        <AppBar
          title="Football App"
          onLeftIconButtonClick={this.handleToggle}
        />

        <Drawer open={this.state.open}>
          <NavLink to="/">
            <MenuItem onClick={this.handleToggle} primaryText="Home Page" />
          </NavLink>
          <NavLink to="/players">
            <MenuItem onClick={this.handleToggle} primaryText="Players" />
          </NavLink>
          <NavLink to="/dreamteam">
            <MenuItem onClick={this.handleToggle} primaryText="Dream Team" />
          </NavLink>
          <NavLink to="/creatorsteam">
            <MenuItem onClick={this.handleToggle} primaryText="Creators Team" />
          </NavLink>
          <MenuItem onClick={this.handleToggle}>Hide</MenuItem>
        </Drawer>
      </div>
    );
  }
}
