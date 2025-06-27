import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Collapse,
  Toolbar,
} from '@mui/material';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

const drawerWidth = 240;

export default function Sidebar() {
  const location = useLocation();
  const [openOperations, setOpenOperations] = useState(false);

  const handleOperationsClick = () => {
    setOpenOperations(!openOperations);
  };

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
      }}
    >
      <Toolbar />
      <List>
        <ListItemButton component={Link} to="/page1" selected={location.pathname === '/page1'}>
          <ListItemText primary="Customer Success" />
        </ListItemButton>

        <ListItemButton component={Link} to="/page2" selected={location.pathname === '/page2'}>
          <ListItemText primary="Distribution" />
        </ListItemButton>

        {/* Operations with dropdown */}
        <ListItemButton onClick={handleOperationsClick}>
          <ListItemText primary="Operations" />
          {openOperations ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={openOperations} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton
              sx={{ pl: 4 }}
              component={Link}
              to="/page3/form"
              selected={location.pathname === '/page3/form'}
            >
              <ListItemText primary="Submit a Request" />
            </ListItemButton>
            <ListItemButton
              sx={{ pl: 4 }}
              component={Link}
              to="/page3/sheet"
              selected={location.pathname === '/page3/sheet'}
            >
              <ListItemText primary="View Requests" />
            </ListItemButton>
            <ListItemButton
              sx={{ pl: 4 }}
              component={Link}
              to="/page3"
              selected={location.pathname === '/page3'}
            >
              <ListItemText primary="Requests Tracker" />
            </ListItemButton>
          </List>
        </Collapse>

        <ListItemButton component={Link} to="/page4" selected={location.pathname === '/page4'}>
          <ListItemText primary="Reseller" />
        </ListItemButton>

        <ListItemButton component={Link} to="/page5" selected={location.pathname === '/page5'}>
          <ListItemText primary="Sales" />
        </ListItemButton>
      </List>
    </Drawer>
  );
}
