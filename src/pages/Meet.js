import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Meet = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const queryParams = new URLSearchParams(location.search);
  const username = queryParams.get("username");
  const channel = queryParams.get("channel");

  useEffect(() => {
    if (!username && !channel) {
      navigate("/");
    }
  }, [channel, navigate, username]);

  return (
    <div>Meet</div>
  );
};

export default Meet;
