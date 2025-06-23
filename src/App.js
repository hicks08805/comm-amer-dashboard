import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Outlet } from 'react-router-dom';

function Home() {
  return (
    <div className="container text-center mt-5">
      <h1 className="mb-4">Commercial Americas Dashboard</h1>
      <div className="d-grid gap-3 col-6 mx-auto">
        <Link to="/page1" className="btn btn-outline-dark">Customer Success</Link>
        <Link to="/page2" className="btn btn-outline-dark">Distribution</Link>
        <Link to="/page3" className="btn btn-outline-dark">Operations</Link>
        <Link to="/page4" className="btn btn-outline-dark">Reseller</Link>
        <Link to="/page5" className="btn btn-outline-dark">Sales</Link>
      </div>
    </div>
  );
}

function SheetPreview({ title, url }) {
  return (
    <div className="container text-center mt-4">
      <h2>{title}</h2>
      <div className="ratio ratio-16x9">
        <iframe
          src={url}
          width="100%"
          height="600"
          frameBorder="0"
          title={title}
        ></iframe>
      </div>
      <Link to="/" className="btn btn-outline-dark mt-3">← Back</Link>
    </div>
  );
}

function OperationsLayout() {
  return (
    <div className="container-fluid">
      <div className="row vh-100">
        <div className="col-3 p-4 border-end">
          <h4>Comm Amer Requests</h4>
          <div className="d-grid gap-2 mt-3">
            <Link to="/page3/form" className="btn btn-outline-dark">Submit a Request</Link>
            <Link to="/page3/sheet" className="btn btn-outline-dark">View Requests</Link>
          </div>
          <Link to="/" className="btn btn-link mt-5">← Back to Home</Link>
        </div>
        <div className="col-9 p-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div style={{
      minHeight: '100vh',
      minWidth: '100vw',
      background: 'linear-gradient(to bottom,rgb(252, 231, 231),rgb(107, 1, 1))',
    }}>
    <Router>
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

        <Route path="/page3"  element={<OperationsLayout />}>
          <Route
            index
            element={
              <div className="container text-center mt-3">
                <h2 className="mb-4">Comm Amer Requests Tracker</h2>
                <div className="ratio ratio-16x9">
                  <iframe
                    src="https://docs.google.com/spreadsheets/d/1m4X7XssYTrk3ZPmrThtGkDTeDKIKVENnUCastoVnkbQ/preview"
                    width="100%"
                    height="600"
                    frameBorder="0"
                    title="Comm Amer Requests"
                  />
                </div>
              </div>
            }
          />
          <Route
            path="form"
            element={
              <div className="container text-center mt-3">
                <h2 className="mb-4">Submit a Comm Amer Request</h2>
                <div className="ratio ratio-4x3">
                  <iframe
                    src="https://docs.google.com/forms/d/e/1FAIpQLSc7Cqmik4Jgg9lBgpzpLHWg7jsSWGeEHl9yN6d5tMNTcD8sNg/viewform?embedded=true"
                    width="100%"
                    height="800"
                    frameBorder="0"
                    title="Comm Amer Requests Form"
                  />
                </div>
              </div>
            }
          />
          <Route
            path="sheet"
            element={
              <div className="container text-center mt-3">
                <h2 className="mb-4">Comm Amer Requests Tracker</h2>
                <div className="ratio ratio-16x9">
                  <iframe
                    src="https://docs.google.com/spreadsheets/d/1m4X7XssYTrk3ZPmrThtGkDTeDKIKVENnUCastoVnkbQ/preview"
                    width="100%"
                    height="600"
                    frameBorder="0"
                    title="Comm Amer Requests"
                  />
                </div>
              </div>
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
    </Router>
    </div>
      );
}
