import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
  Divider,
} from '@mui/material';

const drawerWidth = 240;

function Sidebar() {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
      }}
    >
      <Toolbar>
        <Typography variant="h6" noWrap component="div">
          Comm Amer Dashboard
        </Typography>
      </Toolbar>
      <Divider />
      <List>
        {[
          { text: 'Customer Success', path: '/page1' },
          { text: 'Distribution', path: '/page2' },
          { text: 'Operations', path: '/page3' },
          { text: 'Reseller', path: '/page4' },
          { text: 'Sales', path: '/page5' },
        ].map(({ text, path }) => (
          <ListItem key={text} disablePadding>
            <ListItemButton component={RouterLink} to={path}>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}

export default Sidebar;