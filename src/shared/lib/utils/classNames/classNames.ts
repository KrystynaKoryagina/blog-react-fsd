// TODO !!!!!!!!!!
/* eslint-disable @typescript-eslint/comma-dangle */

export function classNames(
  cls: string,
  additional: string[] = [],
  mods: Record<string, boolean> = {}
): string {
  return [
    cls,
    ...additional.filter(Boolean),
    ...Object.entries(mods).map(([classname, value]) => (value ? classname : '')),
  ].join(' ');
}
