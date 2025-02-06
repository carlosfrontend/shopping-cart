import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import {Loader} from '../Loader/Loader'
describe("Loader tests", () => {
    
    it("Loader is rendered", () => {
     render(<Loader/>)
     expect(screen.getByText('Loading ...')).toBeInTheDocument()
    })
})