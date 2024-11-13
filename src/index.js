import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import AgoraRTC, { AgoraRTCProvider } from "agora-rtc-react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import JoinRoom from "./pages/JoinRoom";
import Meet from "./pages/Meet";
import "./index.css";

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

const client = AgoraRTC.createClient({ mode: "rtc", codec: "vp8" });
const router = createBrowserRouter([
  {
    path: "/",
    element: <JoinRoom />,
  },
  {
    path: "/meet",
    element: (
      <AgoraRTCProvider client={client}>
        <Meet />
      </AgoraRTCProvider>
    ),
  },
]);

root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
