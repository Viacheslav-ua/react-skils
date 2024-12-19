import { beforeEach, describe, expect, it } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { ToggleLanguage } from "../ui/ToggleLanguage";

describe('Тестируем ToggleLanguage', () => {
  let blockContextMenu: HTMLDivElement;
  
  beforeEach(() => {
    render(<ToggleLanguage  />)
    blockContextMenu = screen.getByTestId('block-toggle-language')
  })

  it('Рендерится ToggleLanguage', () => {
    expect(blockContextMenu).toBeTruthy()
    expect(blockContextMenu).toBeInstanceOf(HTMLParagraphElement)
  })

  it('При наведении курсора - открыывается menu language', () => {
    fireEvent.mouseEnter(blockContextMenu)
    expect(screen.getByTestId('content-menu-language')).toBeTruthy()
  })
})