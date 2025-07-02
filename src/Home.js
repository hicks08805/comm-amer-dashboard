import React from 'react';
import { Container, Typography } from '@mui/material';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from 'recharts';

const staticData = [
  { Name: 'Enterprise East', Sales: 9500000 },
  { Name: 'Enterprise West', Sales: 9070000 },
  { Name: 'HCGE East', Sales: 11290000 },
  { Name: 'HCGE West', Sales: 7040000 },
  { Name: 'Mid-Market East', Sales: 11380000 },
  { Name: 'Mid-Market West', Sales: 12900000 },
  { Name: 'LATAM', Sales: 6420000 },
];

export default function Home() {
  return (
    <Container sx={{ mt: 5 }}>
      <Typography variant="h4" gutterBottom>
        Commercial Americas Dashboard
      </Typography>

      <BarChart
        width={600}
        height={300}
        data={staticData}
        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="Name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="Sales" fill="#1976d2" />
      </BarChart>
    </Container>
  );
}
