import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { ErrorPage } from "./ErrorPage";
import { BrowserRouter } from "react-router-dom";

describe("ErrorPage tests", () => {
  vi.mock("react-router-dom", async () => {
    const actual = await vi.importActual("react-router-dom");
    return {
      ...actual,
      useLocation: () => ({ pathname: "/error" }),
    };
  });

  render(
    <BrowserRouter>
      <ErrorPage />
    </BrowserRouter>
  );
  it("renders an error message if the pathname is not found", () => {
    expect(screen.getByText(/error/i)).toBeInTheDocument();
  });
});
