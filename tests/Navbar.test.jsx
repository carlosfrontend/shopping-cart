import { render, screen, within } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import { MemoryRouter } from "react-router-dom";
import App from "../src/App";
window.scrollTo = vi.fn();
describe("Navbar component", () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );
  const navbar = screen.getByRole("navigation");
  const brandLink = screen.getByRole("link", {
    name: /deals shop logo deals shop/i,
  });

  const logo = within(brandLink).getByRole("img", { name: /deals shop logo/i });

  const brandText = screen.getByRole("heading", { name: /deals shop/i });

  expect(window.scrollTo).toHaveBeenCalled();

  it("Navbar component must be exist in the document", () => {
    expect(navbar).toBeInTheDocument();
  });

  it("Navbar must contain a brand link", () => {
    expect(navbar).toContainElement(brandLink);
  });

  it("Navbar must contain a image logo", () => {
    expect(navbar).toContainElement(logo);
  });

  it("Navbar brand Link must contain the text 'Deals Shop'", () => {
    expect(brandText.textContent).toBe("Deals Shop");
  });

  it("Navbar logo must have  an alt attribute ", () => {
    expect(logo).toHaveAttribute("alt");
  });

  it("Navbar logo must have the alt text 'Deals Shop logo' ", () => {
    expect(logo.getAttribute("alt")).toBe("Deals Shop logo");
  });
  it
});
