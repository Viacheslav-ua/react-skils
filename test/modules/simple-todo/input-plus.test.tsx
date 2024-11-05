import { afterEach, beforeAll, beforeEach, describe, expect, test, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { InputPlus } from "../../../src/modules/simple-todo/components/InputPlus";
import userEvent from "@testing-library/user-event";
import React from "react";


describe("Тестируем InputPlus", () => {
  describe("Тестируем input", () => {

    let input: HTMLInputElement;


    beforeAll(() => {
      render(<InputPlus />)
      input = screen.queryByPlaceholderText('HereAddTask') as HTMLInputElement
    })


    test("Тестируем default value", () => {
      expect(input.value).toBe('');
    });

    test("Тестируем ввод с клавиатуры", async () => {
      await userEvent.type(input, 'keyboard ENTER');
      expect(input.value).toBe('keyboard ENTER');
    });

    test('NumberInput use html tag input', () => {
      expect(input.tagName).toBe('INPUT')
    })

  });
});