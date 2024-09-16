import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { Toaster } from "@/components/ui/toaster";

import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div className=" bg-white text-black h-screen w-screen text-foreground">
      <App />
    </div>
    <Toaster />
  </StrictMode>
);
