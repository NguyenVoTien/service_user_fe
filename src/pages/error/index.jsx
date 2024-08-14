import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();

  const { message } = error;

  return <h1>{message}</h1>;
};

export default Error;
