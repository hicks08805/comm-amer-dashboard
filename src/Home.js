import React from 'react';
import { Container, Typography } from '@mui/material';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from 'recharts';

const staticData = [
  { Name: 'Enterprise East', Sales: 9500000, Leader: 'David Cagle' },
  { Name: 'Enterprise West', Sales: 9070000, Leader: 'David Sciano' },
  { Name: 'HCGE East', Sales: 11290000, Leader: 'Jennifer Dominguez' },
  { Name: 'HCGE West', Sales: 7040000, Leader: 'Michael Thompson'},
  { Name: 'Mid-Market East', Sales: 11380000, Leader: 'Mike Brown' },
  { Name: 'Mid-Market West', Sales: 12900000, Leader: 'Abby Gill' },
  { Name: 'LATAM', Sales: 6420000, Leader: 'Cecilia Moreno' },
];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div style={{
        backgroundColor: 'white',
        border: '1px solid #ccc',
        padding: '10px',
      }}>
        <p><strong>Custom Label:</strong> {data.leader}</p>  {Leader}
        <p>{payload[0].name}: ${payload[0].value.toLocaleString()}</p>
      </div>
    );
  }

  return null;
};

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
          dataKey="Sales"
          tickFormatter={(value) =>
            `$${value.toLocaleString(undefined, {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}`
          }
        />
        <Tooltip content={<CustomTooltip />} />
        <Bar dataKey="Sales" fill="#1976d2"/>
      </BarChart>
    </Container>
  );
}

