import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import {BrowserRouter, MemoryRouter} from 'react-router-dom'
import { App } from "app";

describe.skip('Тестируем Router', () => {
  
  it('Полный рендеринг/навигация приложения', async () => {
    render(<App />, {wrapper: BrowserRouter})
    const user = userEvent.setup()

    expect(screen.getAllByTestId('home-page')).toBeTruthy()
    
    await user.click(screen.getByTestId('link-simple-todo'))
    expect(screen.getByTestId('simple-todo-page')).toBeTruthy()

    await user.click(screen.getByTestId('link-advanced-todo'))
    expect(screen.getByTestId('advanced-todo-page')).toBeTruthy()

    await user.click(screen.getByTestId('link-home'))
    expect(screen.getByTestId('home-page')).toBeTruthy()
  })

  it('Переход на несуществующий роут', () => {
    const badRoute = '/some/bad/route'
    render(
      <MemoryRouter initialEntries={[badRoute]}>
        <App />
      </MemoryRouter>,
    )
    expect(screen.getByTestId('not-found-page')).toBeTruthy()
  })

  
})