import { beforeEach, describe, expect, it } from "vitest";
import { screen, fireEvent } from "@testing-library/react";
import { BtnFunc } from "../components/BtnFunc";
import { renderWithTranslation } from "shared/lib/tests/renderWithTranslation";

describe('Тестируем BtnFunc', () => {
  let blockContextMenu: HTMLDivElement;
  
  beforeEach(() => {
    renderWithTranslation(<BtnFunc  />)
    blockContextMenu = screen.getByTestId('block-context-menu')
  })

  it('Рендерится button', () => {
    expect(blockContextMenu).toBeTruthy()
    expect(blockContextMenu).toBeInstanceOf(HTMLDivElement)
  })

  it('При наведении курсора - открыывается меню функций', () => {
    fireEvent.mouseEnter(blockContextMenu)
    expect(screen.getByTestId('content-menu')).toBeTruthy()
  })
})