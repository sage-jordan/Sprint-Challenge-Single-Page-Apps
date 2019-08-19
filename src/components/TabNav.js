import React from "react";
import { Tab, Menu, Icon } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

// TODO: Add missing tabs below
export default function TabNav() {
    const tabs = [
        { menuItem: 'Home', render: () => {
        return (
            <Tab.Pane>
                <Icon name='home' />
                Home
            </Tab.Pane>
        )} },
        { menuItem: 'Characters', render: () => {
        return (
            <Tab.Pane>
                <Icon name='users' />
                Characters
            </Tab.Pane>
        )} },
        { menuItem: 'Location', render: () => {
        return (
            <Tab.Pane>
                <Icon name='map marker alternate' />
                Location
            </Tab.Pane>
        )} },
      ]
      
      return (<Tab tabs={tabs} />)
};
