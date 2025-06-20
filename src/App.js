import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function Home() {
  return (
    <div className="container text-center mt-5">
      <h1 className="mb-4">Commercial Americas Dashboard</h1>
      <div className="d-grid gap-3 col-6 mx-auto">
        <Link to="/page1" className="btn btn-primary">Customer Success</Link>
        <Link to="/page2" className="btn btn-success">Distribution</Link>
        <Link to="/page3" className="btn btn-warning">Operations</Link>
        <Link to="/page4" className="btn btn-danger">Reseller</Link>
        <Link to="/page5" className="btn btn-info">Sales</Link>
      </div>
    </div>
  );
}

function Page({ number }) {
  return (
    <div className="container text-center mt-5">
      <h2 className="mb-3">This is Page {number}</h2>
      <Link to="/" className="btn btn-outline-secondary">← Back to Home</Link>
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
      <Link to="/" className="btn btn-outline-secondary mt-3">← Back</Link>
    </div>
  );
}

export default function App() {
  return (
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
        <Route
          path="/page3"
          element={
            <SheetPreview
            title="Opearations Dashboard"
            url="https://docs.google.com/forms/d/e/1FAIpQLSc7Cqmik4Jgg9lBgpzpLHWg7jsSWGeEHl9yN6d5tMNTcD8sNg/"
            />
          }
        />
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
  );
  
}