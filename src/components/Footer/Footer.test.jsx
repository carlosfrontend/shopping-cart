import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { beforeEach, describe, expect, it } from "vitest";
import {PageContainer} from '../PageContainer/PageContainer'

describe('Footer tests', () => {
   beforeEach(() => {
    render(<BrowserRouter><PageContainer/></BrowserRouter>)
   })
    it('renders the text Heading "Social Media" ', () => {
       expect( screen.getByRole('heading', {
        name: /social media/i
      }).textContent).match(/social media/i)
    })
    it('renders a link with the title attribute "Github"', () => {
        expect(screen.getByRole('link', {  name: /github/i}).getAttribute('title')).matches(/github/i)
    })
    it('renders a link with the title attribute "Linkedin"', () => {
        expect(screen.getByRole('link', {  name: /linkedin/i}).getAttribute('title')).matches(/linkedin/i)
    })

    it('renders a link with the title attribute "X Twitter"', () => {
        expect(screen.getByRole('link', {  name: /x twitter/i}).getAttribute('title')).matches(/x twitter/i)
    })

    it('The Github external link is correct', () => {
        expect(screen.getByRole('link', {  name: /github/i})).toHaveAttribute('href', 'https://github.com/carlosfrontend')
    })

    it('The Linkedin external link is correct', () => {
        expect(screen.getByRole('link', {  name: /linkedin/i})).toHaveAttribute('href', 'https://www.linkedin.com/in/carlosfrontend/')
    })

    it('The Twitter external link is correct', () => {
        expect(screen.getByRole('link', {  name: /x twitter/i})).toHaveAttribute('href', 'https://x.com/CarlosFrontEnd')
    })

    it('renders attributions', () => {
        expect(screen.getByTestId('attr')).toBeInTheDocument()
    })

})