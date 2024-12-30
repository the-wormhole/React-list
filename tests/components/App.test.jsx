// import {it,expect,describe} from 'vitest'
import {render,screen} from '@testing-library/react'
import App from "../../src/App"
import React from 'react';
// import { expect, it } from 'vitest';
import userEvent from "@testing-library/user-event"
// import '@testing-library/jest-dom/vitest'

describe("App",() =>{
    it("Display empty list if not todo items",()=>{
        render(<App/>)

        const listEmpty = screen.getByRole('note')
        expect(listEmpty).toBeInTheDocument()

        expect(listEmpty).toHaveTextContent(/list is empty.../i)
    })

    it("button should be disabled if the input is empty",() =>{
        render(<App/>)

        const input = screen.getByRole('textbox');
        expect(input).toBeInTheDocument();
        expect(input).not.toHaveTextContent();

        const button = screen.getByRole('button');
        expect(button).toBeInTheDocument();
        expect(button).toBeDisabled();

    })

    it("should submit the form and add a new list item",async () =>{
        render(<App/>)

        const input = screen.getByRole("textbox");
        const user = userEvent.setup();
        const button = screen.getByRole('button')

        await user.type(input,'Buy vegetables');
        expect(button).toBeEnabled();
        expect(input.value).toBe("Buy vegetables");

        const form = screen.getByRole('todo');
        expect(form).toBeInTheDocument();
        await user.click(button);

        expect(input.value).toBe("");
        expect(button).toBeDisabled();
        const listitem = screen.getByRole("listitem");
        expect(listitem).toBeInTheDocument();
        expect(listitem).toHaveTextContent(/buy vegetables/i)
    })
})