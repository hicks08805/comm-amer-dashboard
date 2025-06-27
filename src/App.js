import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Box, CssBaseline } from '@mui/material';
import Sidebar from './Sidebar';      // your Sidebar component
import Home from './Home';            // your Home component
import SheetPreview from './SheetPreview';
import OperationsLayout from './OperationsLayout';

const drawerWidth = 240;

export default function App() {
  return (
    <Router>
      <CssBaseline />
      <Box
        sx={{
          display: 'flex',
          minHeight: '100vh',
          minWidth: '100vw',
          background: 'linear-gradient(to bottom, rgb(173,172,172), rgb(107,1,1))',
        }}
      >
        <Sidebar />

        {/* Main content area */}
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
      </Box>
    </Router>
  );
}