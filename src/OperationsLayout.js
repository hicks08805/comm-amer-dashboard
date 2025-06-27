import React from 'react';
import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';

export default function OperationsLayout() {
  return (
    <Box sx={{ p: 3 }}>
      <Outlet />
    </Box>
  );
}
