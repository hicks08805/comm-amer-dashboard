import React from 'react';
import { Box, Typography, Container, Button } from '@mui/material';
import { Link } from 'react-router-dom';

export default function SheetPreview({ title, url }) {
  return (
    <Container sx={{ textAlign: 'center', mt: 4 }}>
      <Typography variant="h5" gutterBottom>{title}</Typography>
      <Box sx={{ aspectRatio: '16/9', mb: 2 }}>
        <iframe
          src={url}
          width="100%"
          height="600"
          style={{ border: 0 }}
          title={title}
        />
      </Box>
      <Button component={Link} to="/" variant="outlined" color="primary" sx={{ fontWeight: 'bold' }}>
        ← Back
      </Button>
    </Container>
  );
}
