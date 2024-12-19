import { beforeEach, describe, expect, it, vi } from "vitest";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { InputFilter } from "../components/InputFilter";
import { renderWithTranslation } from "shared/lib/tests/renderWithTranslation";

describe('Тестируем InputFilter', () => {
  let input: HTMLInputElement;
  const setFilterSpy =  vi.fn();
    
  beforeEach(() => {
    renderWithTranslation(<InputFilter setFilter={setFilterSpy} />)
    input = screen.getByTestId('filter-input')
  })

  describe("Тестируем input", () => {
 
    it('Рендерится', () => {
      expect(input).toBeTruthy()
      expect(input).toBeInstanceOf(HTMLInputElement)
    })

    it('Вводим символы, проверяем, что инпут поменялся и вызываем setFilter', async () => {
      await userEvent.type(input, '322sde')
      expect(input.value).toBe('322sde')
      expect(setFilterSpy).toBeCalled()
    })

  })

  // describe("Тестируем add task", () => {

  //   it('Кликаем на кнопку - очищается инпут, добавляется новая задача', async () => {
  //     const testTitle = '31sde'
  //     await userEvent.type(input, testTitle)
  //     expect(input.value).toEqual(testTitle)

  //     fireEvent.click(addButton)
  //     const isIncludesTestTitle = useTodoStore.getState().entities.some((task) => task.title === testTitle)
  //     expect(input.value).toEqual('')
  //     expect(isIncludesTestTitle).toBeTruthy()
  //   })
    
  // })
})