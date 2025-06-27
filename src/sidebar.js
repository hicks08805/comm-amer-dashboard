// Sidebar.js
import React, { useState } from 'react';
import {
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Collapse,
  ListItemIcon,
} from '@mui/material';
import {
  ExpandLess,
  ExpandMore,
  Dashboard as DashboardIcon,
  Assignment as AssignmentIcon,
  Assessment as AssessmentIcon,
  Group as GroupIcon,
  Business as BusinessIcon,
  InsertChart as ChartIcon,
} from '@mui/icons-material';
import { Link } from 'react-router-dom';

const drawerWidth = 240;

export default function Sidebar() {
  const [openOps, setOpenOps] = useState(false);

  const handleOpsClick = () => {
    setOpenOps(!openOps);
  };

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: drawerWidth,
          boxSizing: 'border-box',
          backgroundColor: '#f5f5f5',
        },
      }}
    >
      <List>
        <ListItemButton component={Link} to="/">
          <ListItemIcon><DashboardIcon /></ListItemIcon>
          <ListItemText primary="Home" />
        </ListItemButton>

        <ListItemButton component={Link} to="/page1">
          <ListItemIcon><AssignmentIcon /></ListItemIcon>
          <ListItemText primary="Customer Success" />
        </ListItemButton>

        <ListItemButton component={Link} to="/page2">
          <ListItemIcon><ChartIcon /></ListItemIcon>
          <ListItemText primary="Distribution" />
        </ListItemButton>

        {/* Operations with nested links */}
        <ListItemButton onClick={handleOpsClick}>
          <ListItemIcon><GroupIcon /></ListItemIcon>
          <ListItemText primary="Operations" />
          {openOps ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={openOps} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton component={Link} to="/page3/form" sx={{ pl: 4 }}>
              <ListItemText primary="Submit a Request" />
            </ListItemButton>
            <ListItemButton component={Link} to="/page3/sheet" sx={{ pl: 4 }}>
              <ListItemText primary="View Requests" />
            </ListItemButton>
          </List>
        </Collapse>

        <ListItemButton component={Link} to="/page4">
          <ListItemIcon><BusinessIcon /></ListItemIcon>
          <ListItemText primary="Reseller" />
        </ListItemButton>

        <ListItemButton component={Link} to="/page5">
          <ListItemIcon><AssessmentIcon /></ListItemIcon>
          <ListItemText primary="Sales Forecast" />
        </ListItemButton>
      </List>
    </Drawer>
  );
}
