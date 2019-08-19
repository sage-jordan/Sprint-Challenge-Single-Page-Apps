import React from "react";
import { Tab, Menu, Icon } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

// TODO: Add missing tabs below
export default function TabNav() {
    const tabs = [
        { menuItem: 'Home', render: () => {
        return (
            <Tab.Pane>
                <NavLink to="/about">
                    <Icon name='home' />
                    Home
                </NavLink>
            </Tab.Pane>
        )} },
        { menuItem: 'Characters', render: () => {
        return (
            <NavLink to="/users">
                <Icon name='users' />
                Users
            </NavLink>
        )} },
        { menuItem: 'Location', render: () => {
        return (
            <NavLink to="/location">
                <Icon name='map marker alternate' />
                Location
            </NavLink>
        )} },
      ]
      
      return (<Tab tabs={tabs} />)
};
