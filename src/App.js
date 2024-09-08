import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";

import HomePage from "./pages/HomePage";
import MovieDetail from "./pages/MovieDetails";
import SearchAppBar from "./components/SearchAppBar";
import { SearchProvider } from "./context/SearchContext";
function App() {
  return (
    <AuthProvider>
      <SearchProvider>
        <Router>
          <SearchAppBar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/movie/:id" element={<MovieDetail />} />
          </Routes>
        </Router>
      </SearchProvider>
    </AuthProvider>
  );
}

export default App;
