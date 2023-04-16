export function classNames(
  cls: string,
  additional: Array<string | undefined> = [],
  mods: Record<string, boolean | undefined> = {},
): string {
  return [
    cls,
    ...additional.filter(Boolean),
    ...Object.entries(mods).map(([classname, value]) => (value ? classname : '')),
  ].join(' ');
}
