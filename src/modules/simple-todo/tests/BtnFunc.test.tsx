import { beforeEach, describe, expect, it } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { BtnFunc } from "../components/BtnFunc";

describe('Тестируем BtnFunc', () => {
  let blockContextMenu: HTMLDivElement;
  
  beforeEach(() => {
    render(<BtnFunc  />)
    blockContextMenu = screen.getByTestId('block-context-menu')
  })

  it('Рендерится button', () => {
    expect(blockContextMenu).toBeTruthy()
    expect(blockContextMenu).toBeInstanceOf(HTMLDivElement)
  })

  it('При наведении курсора - открыывается меню функций', () => {
    fireEvent.mouseEnter(blockContextMenu)
    expect(screen.getByTestId('content-menu')).toBeTruthy
  })
})