import React from "react";
import { ModeToggle } from "./toggle-mode";

export default function Footer() {
  return (
    <footer className="bg-background/80 border-t">
      <div className="text-muted-foreground custom-container custom-padding flex items-center justify-center gap-3 py-6 text-center text-sm">
        <ModeToggle />
        <p>
          &copy; {new Date().getFullYear()} made with love ❤️ by Habiba Galal.
        </p>
      </div>
    </footer>
  );
}
