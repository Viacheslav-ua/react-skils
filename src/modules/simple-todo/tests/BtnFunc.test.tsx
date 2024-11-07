import { beforeEach, describe, expect, it } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BtnFunc } from "../components/BtnFunc";
import { useTodoStore } from "../store/useTodoStore";

describe('Тестируем InputPlus', () => {
  let renderOption;
  let funcBlock: HTMLDivElement;
  let funcButton: HTMLButtonElement;
  let funcMenu: HTMLElement;
  
  beforeEach(() => {
    renderOption = render(<BtnFunc />).debug()
    funcBlock = screen.getByTestId('block-func')
    funcButton = screen.getByTestId('btn-func')
    funcMenu = screen.getByTestId('menu-func')
  })

  
 
    it('Рендерится button', () => {
      expect(funcButton).toBeTruthy()
      expect(funcButton).toBeInstanceOf(HTMLButtonElement)
    })

    it('При наведении курсора - открыывается меню функций', async () => {
      // await userEvent.type(input, '31sde')
      expect(funcMenu).toBeTruthy()
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