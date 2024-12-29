// import {it,expect,describe} from 'vitest'
import {render,screen} from '@testing-library/react'
import App from "../../src/App"
import React from 'react';
// import '@testing-library/jest-dom/vitest'

describe("App",() =>{
    it("Display empty list if not todo items",()=>{
        render(<App/>)

        const listEmpty = screen.getByRole('note')
        expect(listEmpty).toBeInTheDocument()

        expect(listEmpty).toHaveTextContent(/list is empty.../i)
    })
})