import { magmav3 as magma } from '../magma';

export const mergeThemes = (
  overrideObject: Record<any, any> = {},
  baseObject: Record<any, any> = magma
) => {
  const keys = Array.from(
    new Set([...Object.keys(overrideObject), ...Object.keys(baseObject)])
  );

  let mergedObject = { ...overrideObject };

  keys.forEach(key => {
    const currentType = typeof overrideObject[key] || typeof baseObject[key];
    const value =
      currentType === 'object'
        ? baseObject[key]
        : overrideObject[key] || baseObject[key];
    if (typeof value === 'object' && value !== null) {
      mergedObject[key] = {
        ...mergedObject[key],
        ...mergeThemes(mergedObject[key], value),
      };
    } else {
      mergedObject = { ...mergedObject, [key]: value };
    }
  });

  return mergedObject;
};
