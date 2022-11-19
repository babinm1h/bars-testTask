import React, { FC } from "react";

interface IProps {
  message?: string;
}

const ErrorPage: FC<IProps> = ({ message }) => {
  return (
    <div>
      <h1 style={{ fontSize: "20px", padding: "20px", textAlign: "center" }}>{message}</h1>
    </div>
  );
};

export default ErrorPage;
