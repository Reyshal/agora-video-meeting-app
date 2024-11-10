import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import AgoraRTC, { AgoraRTCProvider } from "agora-rtc-react";
import App from "./App";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./store";

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

const client = AgoraRTC.createClient({ mode: "rtc", codec: "vp8" });

root.render(
  <Provider store={store}>
    <StrictMode>
      <AgoraRTCProvider client={client}>
        <App />
      </AgoraRTCProvider>
    </StrictMode>
  </Provider>
);
