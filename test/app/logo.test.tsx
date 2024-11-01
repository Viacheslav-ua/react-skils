import { describe, expect, expectTypeOf, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Logo } from '../../src/app/components/Logo';
import React from 'react';

describe('Logo', () => {
  it('should render', () => {
    render(<Logo />);
    const logoText = screen.getByText('react');
    expectTypeOf(logoText).toEqualTypeOf<HTMLElement>();
    
    
  });
});
