import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { hydrateRoot } from "react-dom/client";

export default function ClientApp() {
  const rootElem = document.getElementById("root");

  if (!rootElem) throw new Error("cannot find the root element");

  hydrateRoot(
    rootElem,
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  );
}
