import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "../src/App";
import { MemoryRouter } from "react-router-dom";

window.scrollTo = vi.fn();

describe("App component", () => {
  it("Contains Navbar element", () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    const app = screen.getByTestId("app");

    const navbar = screen.getByRole("navigation");

    expect(window.scrollTo).toHaveBeenCalled();
    expect(app).toContainElement(navbar);
  });

  it("Contains Footer element", () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    const app = screen.getByTestId("app");

    const footer = screen.getByRole("contentinfo");

    expect(app).toContainElement(footer);
  });
});
