import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ExplorePage } from "./screens/ExplorePage";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <ExplorePage />
  </StrictMode>,
);
