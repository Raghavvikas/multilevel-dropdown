import React from "react";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div id="error-page">
      <h1>Oops! Something went wrong!</h1>
      <p>Sorry, unexpected error has occurred..</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
};

export default ErrorPage;
