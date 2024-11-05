import { afterEach, beforeAll, beforeEach, describe, expect, Mock, test, vi } from "vitest";
import { render, RenderResult, screen } from "@testing-library/react";
import { NumberInput } from "../../src/app/examples/NumberInput";
import ExApp from "../../src/app/examples/ExApp";
import userEvent from "@testing-library/user-event";
import React from "react";
import { mockLoaderTestId } from "../mock/Loader";
import { setImmediate } from "timers";

vi.mock('../../src/app/examples/Loader', () => ({
  Loader: () => <div data-testId={mockLoaderTestId} />
}))

describe("Тестируем екран курсов валют", () => {
  beforeEach(() => {
    global.fetch = vi.fn()
  })

  afterEach(() => {
    vi.clearAllMocks()
  })

  test('Loading before fetch execute', () => {
    (fetch as Mock).mockResolvedValue({
      json: () => Promise.resolve([54])
    })
    const { container, baseElement } = render(<ExApp />)
    // const loader = container.querySelector(`[data-testId="${mockLoaderTestId}"]`)
    const loader = screen.getByTestId(mockLoaderTestId)
    expect(loader).not.toBeNull()
    expect(loader).not.toBe(null)
    expect(loader).toBeTruthy()
    // expect(baseElement).toMatchSnapshot()
  })

  test('Loading doesnt exist after fetch execute', async () => {
    (fetch as Mock).mockResolvedValue({
      json: () => Promise.resolve([54])
    })
    const { container, rerender } = render(<ExApp />)
    await new Promise(setImmediate)
    rerender(<ExApp />)
    expect(() => screen.getByTestId(mockLoaderTestId)).toThrow();
        
  })

  test('Change both inputs', async () => {
    (fetch as Mock).mockResolvedValue({json: () => Promise.resolve([54])})
    const { container, rerender } = render(<ExApp />)
    await new Promise(setImmediate)

    const input = container.querySelector('input') as HTMLInputElement
    if (!input) {
      test.fails('Does not exist input')
      return
    }

    await userEvent.type(input, '3')

    rerender(<ExApp />)
    // expect(container).toMatchSnapshot();
    
        
  })
});