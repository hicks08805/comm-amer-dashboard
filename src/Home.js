import React, { useEffect, useState } from 'react';
import { Container, Typography } from '@mui/material';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import Papa from 'papaparse';

const SHEET_URL = 'https://docs.google.com/spreadsheets/d/11AI2u8e_q_-99YXX3md2s1qOpClpRJ-959puJFEfw2U/gviz/tq?tqx=out:csv&sheet=Sheet2';

export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(SHEET_URL)
      .then(res => res.text())
      .then(csv => {
        Papa.parse(csv, {
          header: true,
          dynamicTyping: true,
          complete: (results) => {
            setData(results.data);
          },
        });
      });
  }, []);

  return (
    <Container sx={{ mt: 5 }}>
      <Typography variant="h4" gutterBottom>
        Commercial Americas Dashboard
      </Typography>

      <BarChart
        width={600}
        height={300}
        data={data}
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
