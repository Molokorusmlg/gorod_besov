import MyForm from "./pages/form/Form";
import HomePage from "./pages/home/Home";
import Videos from "./pages/videos/Videos";
import AllVideos from "./pages/allVideos/AllVideos";
import UserProfile from "./pages/userProfile/UserProfile";
import Create from "./pages/create/Create";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import * as React from "react";

const queryClient = new QueryClient();
const routes = [
  { path: "/", element: <MyForm /> },
  { path: "/main", element: <HomePage /> },
  { path: "/videos/:id", element: <Videos /> },
  { path: "/allvideo", element: <AllVideos /> },
  { path: "/profile", element: <UserProfile /> },
  { path: "/create", element: <Create /> },
];

function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <Router>
          <Routes>
            {routes.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                element={route.element}
              />
            ))}
          </Routes>
        </Router>
      </QueryClientProvider>
    </div>
  );
}

export default App;
