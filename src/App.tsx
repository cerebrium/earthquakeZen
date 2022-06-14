import React from "react";
import { Detail } from "./components/detail";
import { Home } from "./components/home";
import { Profile } from "./components/profiles";
import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/layout";
import { DataParser } from "./context/EarthquakeContext";
import { EarthquakeDetails } from "./components/detail/earthquakeDetails/EarthquakeDetails";

const App = () => {
  return (
    <DataParser>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="detail" element={<Detail />}>
            <Route path=":id" element={<EarthquakeDetails />} />
          </Route>
          <Route path="profile" element={<Profile />} />
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Route>
      </Routes>
    </DataParser>
  );
};

export default App;
