import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import AgoraRTC, { AgoraRTCProvider } from "agora-rtc-react";
import { Provider } from "react-redux";
import { store, persistor } from "./store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import JoinRoom from "./pages/JoinRoom";
import Meet from "./pages/Meet";
import "./index.css";
import { PersistGate } from "redux-persist/integration/react";

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
      <PersistGate loading={null} persistor={persistor}>
        <AgoraRTCProvider client={client}>
          <RouterProvider router={router} />
        </AgoraRTCProvider>
      </PersistGate>
    </Provider>
  </StrictMode>
);
