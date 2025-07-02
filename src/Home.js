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
        margin={{ top: 20, right: 30, left: 20, bottom: 70 }} // increased bottom margin
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey="Name"
          angle={-45}
          textAnchor="end"
          interval={0}
          dy={20} // move labels down a bit more
          height={60} // reserve enough space for labels
        />
        <YAxis
          tickFormatter={(value) =>
            `$${value.toLocaleString(undefined, {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}`
          }
        />
        <Tooltip
          formatter={(value) =>
            `$${value.toLocaleString(undefined, {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}`
          }
        />
        <Legend />
        <Bar dataKey="Sales" fill="#1976d2" label={{ position: 'top', dy: -10 }} />
      </BarChart>
    </Container>
  );
}

