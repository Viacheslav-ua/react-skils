import { afterEach, beforeAll, beforeEach, describe, expect, test, vi } from "vitest";
import { render, RenderResult, screen } from "@testing-library/react";
import { NumberInput } from "../../src/app/examples/NumberInput";
import userEvent from "@testing-library/user-event";
import React from "react";


describe("Тестируем NumberInput", () => {
  describe("Тестируем базовое поведение", () => {

    
    const inputValue = 198;
    const onChangeInput = vi.fn();
    const onHoverInput = vi.fn();
    const onBlurInput = vi.fn();
    let input: HTMLInputElement;

    beforeEach(() => {
      const inputTestId = Date.now().toString();
      render(<NumberInput 
        data-testid={inputTestId} 
        value={inputValue} 
        onChange={onChangeInput}
        onMouseEnter={onHoverInput}
        onMouseLeave={onBlurInput}
         />)
      input = screen.getByTestId(inputTestId)
    })

    afterEach(() => {
      vi.clearAllMocks()
    })

    test("Тестируем default value", () => {
      expect(input.valueAsNumber).toBe(inputValue);
    });

    test("Тестируем onChange, user change data - called onChange", async () => {
      await userEvent.type(input, '349');
      expect(onChangeInput).toBeCalledWith(1984);
      expect(onChangeInput).toBeCalledWith(1983);
      expect(onChangeInput).toBeCalledWith(1989);
      
    });

    test('NumberInput use html tag input', () => {
      expect(input.tagName).toBe('INPUT')
    })

    test('hover event trigger onMouseEnter event', async () => {
      await userEvent.hover(input)
      expect(onHoverInput).toBeCalled()
      expect(onBlurInput).not.toBeCalled()

      await userEvent.unhover(input)
      expect(onBlurInput).toBeCalled()
    })
  });

  describe('Тестируем, что ввод данных будет менять отображение, но будет игнорировать не цифры', () => {
    let inputTestId: string;
    let inputValue = 42;
    let onChangeInput = vi.fn((value: number) => inputValue = value);
    let input: HTMLInputElement
    let renderOption: RenderResult

    beforeEach(() => {
      inputValue = 0;
      inputTestId = Date.now().toString();
      renderOption = render(<NumberInput
        data-testid={inputTestId}
        value={inputValue}
        onChange={onChangeInput}
      />)
      input = screen.getByTestId(inputTestId);
    })

    afterEach(() => {
      vi.clearAllMocks()
    })

    test('вводим цифры, проверяем, что инпут поменялся', async () => {
      await userEvent.type(input, '3')
      expect(onChangeInput).toBeCalledWith(3)
      renderOption.rerender(<NumberInput data-testid={inputTestId} value={inputValue} onChange={onChangeInput} />)

      expect(input.valueAsNumber).toBe(3)
    })

    test('вводим буквы, проверяем, что инпут не поменялся', async () => {
      // await userEvent.type(input, '')
      await userEvent.type(input, 'фвыа')
      expect(onChangeInput).not.toBeCalled()
      renderOption.rerender(<NumberInput data-testid={inputTestId} value={inputValue} onChange={onChangeInput} />)

      expect(input.valueAsNumber).toBe(0)
    })
  })
});