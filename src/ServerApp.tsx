import {
  RenderToPipeableStreamOptions,
  renderToPipeableStream,
} from "react-dom/server";
import { StaticRouter } from "react-router-dom/server"; // just like react router that can work on a node environments
import App from "./App";

export default function render(
  url: string,
  options: RenderToPipeableStreamOptions | undefined,
) {
  return renderToPipeableStream(
    <StaticRouter location={url}>
      <App />
    </StaticRouter>,
    options,
  );
}
