import { useRouteError } from "react-router-dom";
import Navbar from "../sharedLayouts/Navbar";

export default function Errorlayout() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <Navbar></Navbar>
      <div className="flex flex-col justify-center items-center min-h-[500px]">
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
    </div>
  );
}