import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import AgoraRTC, { AgoraRTCProvider } from "agora-rtc-react";
import App from "./App";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import JoinRoom from "./pages/JoinRoom";
import Meet from "./pages/Meet";

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
    element: <Meet />,
  },
]);

root.render(
  <StrictMode>
    <Provider store={store}>
      <AgoraRTCProvider client={client}>
        <RouterProvider router={router} />
      </AgoraRTCProvider>
    </Provider>
  </StrictMode>
);
