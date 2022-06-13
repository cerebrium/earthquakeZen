import React from "react";
import { Detail } from "./components/detail";
import { Home } from "./components/home";
import { Profile } from "./components/profiles";
import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/layout";

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/profile" element={<Profile />} />
        <Route
          path="/*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Route>
    </Routes>
  );
};

export default App;
