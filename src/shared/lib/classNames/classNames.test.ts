import { classNames } from './classNames';

/*
TODO
1. Накатываете Jest Runner https://marketplace.visualstudio.com/items?itemName=firsttris.vscode-jest-runner
2. Добавляете в хоткеи команду
{
"key": "alt+n",
"when": "editorTextFocus && resourceFilename =~ /\\w+.test.ts$|\\w+.test.js$/",
"command": "extension.runJestFile",
}
3. Нажимаете alt+n находясь внутри файла с тестами

*/

describe('className', () => {
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
    // TODO remove space
    const expected = 'someClass class1 class2 hovered ';
    expect(
      classNames('someClass', ['class1', 'class2'], {
        hovered: true,
        scrollable: false,
      }),
    ).toBe(expected);
  });
});
