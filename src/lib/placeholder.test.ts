import { describe, expect, it } from 'vitest';
import { placeholder } from './placeholder';

describe('placeholder', () => {
  it('returns ok', () => {
    expect(placeholder()).toBe('ok');
  });
});
