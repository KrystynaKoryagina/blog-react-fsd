import { classNames } from './classNames';

describe('classNames', () => {
  test('should return correct class with only first param', () => {
    expect(classNames('someClass')).toBe('someClass');
  });

  test('should return correct classes with additional class', () => {
    const expected = 'someClass class1 class2';

    expect(classNames('someClass', ['class1', 'class2'])).toBe(expected);
  });

  test('should return correct classes with mods', () => {
    const expected = 'someClass class1 class2 hovered scrollable';

    expect(
      classNames('someClass', ['class1', 'class2'], {
        hovered: true,
        scrollable: true,
      }),
    ).toBe(expected);
  });

  test('should return correct classes with mods false', () => {
    const expected = 'someClass class1 class2 hovered';

    expect(
      classNames('someClass', ['class1', 'class2'], {
        hovered: true,
        scrollable: false,
      }),
    ).toBe(expected);
  });
});
