import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Toolbar } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
});

const Sidebar = () => {
  const classes = useStyles();

  return (
    <Toolbar>
        <List>
        <ListItem button>
            <ListItemIcon><InboxIcon /></ListItemIcon>
            <ListItemText primary={'Nasdaq'} />
        </ListItem>
        <ListItem button onClick={() => {alert('Kospi 지수는 준비중입니다!');}}>
            <ListItemIcon><InboxIcon /></ListItemIcon>
            <ListItemText primary={'Kospi'} />
        </ListItem>
        <ListItem button onClick={() => {alert('Kosdaq 지수는 준비중입니다!');}}>
            <ListItemIcon><InboxIcon /></ListItemIcon>
            <ListItemText primary={'Kosdaq'} />
        </ListItem>
        <ListItem button onClick={() => {alert('Bitcoin 지수는 준비중입니다!');}}>
            <ListItemIcon><InboxIcon /></ListItemIcon>
            <ListItemText primary={'Bitcoin'} />
        </ListItem>
        {/* add more list items here */}
        </List>
    </Toolbar>

  );
};

export default Sidebar;