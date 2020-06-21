import React from "react";
import { Menu } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

  const TabNav = () => (
    <Menu>
      <Menu.Item>
        <NavLink to="/">Home</NavLink>
      </Menu.Item>
  
      <Menu.Item>
        <NavLink to="/characters/">Characters</NavLink>
      </Menu.Item>

      <Menu.Item>
        <NavLink to="/location/">Location</NavLink>
      </Menu.Item>

      <Menu.Item>
        <NavLink to="/episodes/">Episodes</NavLink>
      </Menu.Item>
    </Menu>
  )
  
  export default TabNav