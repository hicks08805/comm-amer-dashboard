// Home.js
import React from 'react';
import { Container, Typography, Grid, Button, Box } from '@mui/material';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Link } from 'react-router-dom';

const data = [
  { name: 'Customer Success', value: 400 },
  { name: 'Distribution', value: 300 },
  { name: 'Operations', value: 200 },
  { name: 'Reseller', value: 278 },
  { name: 'Sales', value: 189 },
];

export default function Home() {
  return (
    <Container sx={{ mt: 5 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Commercial Americas Dashboard
      </Typography>

      {/* Buttons */}
      <Grid container spacing={2} justifyContent="center" sx={{ mb: 5 }}>
        {['page1', 'page2', 'page3', 'page4', 'page5'].map((page, index) => (
          <Grid item key={page}>
            <Button
              component={Link}
              to={`/${page}`}
              variant="outlined"
              color="primary"
              sx={{ fontWeight: 'bold' }}
            >
              {['Customer Success', 'Distribution', 'Operations', 'Reseller', 'Sales'][index]}
            </Button>
          </Grid>
        ))}
      </Grid>

      {/* Metrics Graph */}
      <Typography variant="h5" gutterBottom>
        Team Metrics Overview
      </Typography>
      <Box sx={{ height: 400 }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="value" fill="#1976d2" />
          </BarChart>
        </ResponsiveContainer>
      </Box>
    </Container>
  );
}
