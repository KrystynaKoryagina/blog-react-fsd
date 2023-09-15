export const classNames = (
  cls: string,
  additional: Array<string | undefined> = [],
  mods: Record<string, boolean | undefined> = {},
): string => {
  const additionalClasses = [
    ...additional,
    ...Object.entries(mods).map(([classname, value]) => (value ? classname : ''))
  ].filter(Boolean);

  return [
    cls,
    ...additionalClasses,
  ].join(' ');
}
