import React from "react";
import { Detail } from "./views/detail";
import { Home } from "./views/home";
import { Profile } from "./views/profiles";
import { Routes, Route, Link } from "react-router-dom";
import { Layout } from "./shared/layout";
import { NotFound } from "./views/notFound";

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="detail/:id" element={<Detail />} />
        <Route path="profile" element={<Profile />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;
