import React from "react";
import { beforeEach, describe, expect, it } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { InputPlus } from "../components/InputPlus";
import { useTodoStore } from "../store/useTodoStore";

describe('Тестируем InputPlus', () => {
  let renderOption;
  let input: HTMLInputElement;
  let addButton: HTMLButtonElement;
  
  beforeEach(() => {
    renderOption = render(<InputPlus />)
    input = screen.getByTestId('new-todo-input')
    addButton = screen.getByTestId('add-task-btn')
  })

  describe("Тестируем input", () => {
 
    it('Рендерится', () => {
      expect(input).toBeTruthy()
      expect(input).toBeInstanceOf(HTMLInputElement)
    })

    it('Вводим символы, проверяем, что инпут поменялся', async () => {
      await userEvent.type(input, '31sde')
      expect(input.value).toBe('31sde')
    })

  })

  describe("Тестируем add task", () => {

    it('Кликаем на кнопку - очищается инпут, добавляется новая задача', async () => {
      const testTitle = '31sde'
      await userEvent.type(input, testTitle)
      expect(input.value).toEqual(testTitle)

      fireEvent.click(addButton)
      const isIncludesTestTitle = useTodoStore.getState().entities.some((task) => task.title === testTitle)
      expect(input.value).toEqual('')
      expect(isIncludesTestTitle).toBeTruthy()
    })
    
  })
})