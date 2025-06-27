import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Box,
  List,
  ListItemButton,
  ListItemText,
  Collapse,
  ListItemIcon,
} from '@mui/material';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import BusinessIcon from '@mui/icons-material/Business';
import StoreIcon from '@mui/icons-material/Store';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

const drawerWidth = 240;

export default function Sidebar() {
  const location = useLocation();

  const [openOperations, setOpenOperations] = useState(false);

  const handleOperationsClick = () => {
    setOpenOperations(!openOperations);
  };

  return (
    <Box
      sx={{
        width: drawerWidth,
        bgcolor: 'grey.200',
        height: '100vh',
        p: 2,
        boxSizing: 'border-box',
      }}
    >
      <List component="nav">

        <ListItemButton component={Link} to="/page1" selected={location.pathname === '/page1'}>
          <ListItemIcon><PeopleIcon /></ListItemIcon>
          <ListItemText primary="Customer Success" />
        </ListItemButton>

        <ListItemButton component={Link} to="/page2" selected={location.pathname === '/page2'}>
          <ListItemIcon><BusinessIcon /></ListItemIcon>
          <ListItemText primary="Distribution" />
        </ListItemButton>

        {/* Operations parent menu */}
        <ListItemButton onClick={handleOperationsClick}>
          <ListItemIcon><DashboardIcon /></ListItemIcon>
          <ListItemText primary="Operations" />
          {openOperations ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={openOperations} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton
              component={Link}
              to="/page3/form"
              sx={{ pl: 4 }}
              selected={location.pathname === '/page3/form'}
            >
              <ListItemText primary="Submit a Request" />
            </ListItemButton>
            <ListItemButton
              component={Link}
              to="/page3/sheet"
              sx={{ pl: 4 }}
              selected={location.pathname === '/page3/sheet'}
            >
              <ListItemText primary="View Requests" />
            </ListItemButton>
          </List>
        </Collapse>

        <ListItemButton component={Link} to="/page4" selected={location.pathname === '/page4'}>
          <ListItemIcon><StoreIcon /></ListItemIcon>
          <ListItemText primary="Reseller" />
        </ListItemButton>

        <ListItemButton component={Link} to="/page5" selected={location.pathname === '/page5'}>
          <ListItemIcon><AttachMoneyIcon /></ListItemIcon>
          <ListItemText primary="Sales" />
        </ListItemButton>

      </List>
    </Box>
  );
}