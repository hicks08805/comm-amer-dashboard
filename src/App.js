import React from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import Sidebar from './Sidebar'; // make sure the path is correct
import {
  Box,
  CssBaseline,
  Container,
  Typography,
  Button,
  Grid,
} from '@mui/material';
import Home from './Home'

const drawerWidth = 240;

export default function Home() {
  return (
    <Container sx={{ textAlign: 'center', mt: 5 }}>
      <Typography variant="h4" gutterBottom>
        Commercial Americas Dashboard
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        {['page1', 'page2', 'page3', 'page4', 'page5'].map((page, index) => (
          <Grid item key={page}>
            <Button
              href={`/${page}`}
              variant="outlined"
              color="primary"
              sx={{ fontWeight: 'bold' }}
            >
              {['Customer Success', 'Distribution', 'Operations', 'Reseller', 'Sales'][index]}
            </Button>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

function SheetPreview({ title, url }) {
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
      <Button href="/" variant="outlined" color="primary" sx={{ fontWeight: 'bold' }}>
        ← Back
      </Button>
    </Container>
  );
}

function OperationsLayout() {
  return <Outlet />;
}

export default function App() {
  return (
    <Router>
      <CssBaseline />
       <Box sx={{ display: 'flex', minHeight: '100vh', background: 'linear-gradient(to bottom, #ffffff, #b6b5b5)' }}>
        <Sidebar />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
         <Routes>
            <Route path="/" element={<Home />} />
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            marginLeft: `${drawerWidth}px`,
          }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/page1"
              element={
                <SheetPreview
                  title="Customer Success Sheet"
                  url="https://docs.google.com/spreadsheets/d/1Zu8rubQkE_gFAgOXdsdL4CYqpLvt33bIbNa9U7pDZdo/preview"
                />
              }
            />
            <Route
              path="/page2"
              element={
                <SheetPreview
                  title="Disti Forecast Dashboard"
                  url="https://docs.google.com/spreadsheets/d/1Ubg6nsP8CndyklOn0g5O7fxzqLO9bZOG0koP4k2K0bA/preview"
                />
              }
            />
            <Route path="/page3" element={<OperationsLayout />}>
              <Route
                index
                element={
                  <SheetPreview
                    title="Comm Amer Requests Tracker"
                    url="https://docs.google.com/spreadsheets/d/1m4X7XssYTrk3ZPmrThtGkDTeDKIKVENnUCastoVnkbQ/preview"
                  />
                }
              />
              <Route
                path="form"
                element={
                  <SheetPreview
                    title="Submit a Comm Amer Request"
                    url="https://docs.google.com/forms/d/e/1FAIpQLSc7Cqmik4Jgg9lBgpzpLHWg7jsSWGeEHl9yN6d5tMNTcD8sNg/viewform?embedded=true"
                  />
                }
              />
              <Route
                path="sheet"
                element={
                  <SheetPreview
                    title="Comm Amer Requests Tracker"
                    url="https://docs.google.com/spreadsheets/d/1m4X7XssYTrk3ZPmrThtGkDTeDKIKVENnUCastoVnkbQ/preview"
                  />
                }
              />
            </Route>
            <Route
              path="/page4"
              element={
                <SheetPreview
                  title="Reseller List"
                  url="https://docs.google.com/spreadsheets/d/1QOkaMRBVgoUPZEuOwpTQbChwTSIwhqnfzDZIpzV1Dco/preview"
                />
              }
            />
            <Route
              path="/page5"
              element={
                <SheetPreview
                  title="Forecast File"
                  url="https://docs.google.com/spreadsheets/d/11AI2u8e_q_-99YXX3md2s1qOpClpRJ-959puJFEfw2U/preview"
                />
              }
            />
          </Routes>
          </Box>
          </Routes>
        </Box>
      </Box>
    </Router>
  );
}
