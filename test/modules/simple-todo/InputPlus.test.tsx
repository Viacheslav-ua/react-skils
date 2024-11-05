import React from "react";
import { beforeEach, describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { InputPlus } from "../../../src/modules/simple-todo/components/InputPlus";

describe('Тестируем InputPlus', () => {
  describe("Тестируем input", () => {
    let input: HTMLInputElement
    let renderOption;

    beforeEach(() => {
      renderOption = render(<InputPlus />)
      input = screen.getByTestId('new-todo-input')
    })

    it('Рендерится', () => {
      expect(input).toBeTruthy()
    })

    it('Вводим символы, проверяем, что инпут поменялся', async () => {
      await userEvent.type(input, '31sde')
      expect(input.value).toBe('31sde')
    })

  })
})