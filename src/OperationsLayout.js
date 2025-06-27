import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { Box, Typography, Button, Stack } from '@mui/material';

export default function OperationsLayout() {
  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom fontWeight="bold">
        Commercial Americas Operations
      </Typography>

      {/* Optional: navigation buttons to subroutes */}
      <Stack direction="row" spacing={2} sx={{ mb: 3 }}>
        <Button
          component={Link}
          to="/page3/form"
          variant="outlined"
          color="primary"
        >
          Submit a Request
        </Button>
        <Button
          component={Link}
          to="/page3/sheet"
          variant="outlined"
          color="primary"
        >
          View Requests
        </Button>
      </Stack>

      {/* This renders the nested route (form or sheet) */}
      <Outlet />
    </Box>
  );
}