import { CSSProperties, useMemo } from 'react';
import { mergeThemes } from './mergeThemes';
export interface GetThemeStylingInterface<ComponentInterface> {
  props: ComponentInterface;
  theme?: any;
  componentStyle?: any;
  style?: CSSProperties;
  componentName?: string;
}

const getComponentStyle = (
  theme: Record<any, any>,
  componentName: string
): CSSProperties =>
  componentName.split('.').reduce((subTheme, componentName) => {
    const { extendsComponent, ...componentTheme } =
      subTheme.components[componentName];

    if (extendsComponent) {
      console.log(componentTheme);
    }

    return extendsComponent
      ? mergeThemes(componentTheme, getComponentStyle(theme, extendsComponent))
      : componentTheme;
  }, theme);

export const getThemeStyling = <ComponentInterface>(
  attributes: GetThemeStylingInterface<ComponentInterface>
): CSSProperties => {
  const {
    props,
    componentStyle: styleOverride,
    theme: themeOverride,
    style: cssStyles = {},
    componentName,
  } = attributes;

  let style: { [x: string]: any } = {};
  const theme = mergeThemes(themeOverride);

  if (componentName) {
    style = mergeThemes(styleOverride, getComponentStyle(theme, componentName));
  }

  const getBooleanValue = (
    props: ComponentInterface,
    key: keyof ComponentInterface,
    style: { [x: string]: any }
  ) => props && props[key] && style && style.props && style.props[key];

  const getObjectValue = (
    props: ComponentInterface,
    key: keyof ComponentInterface,
    style: { [x: string]: any }
  ) => {
    if (!(props && props[key])) return {};
    if (
      !(
        style &&
        style.props &&
        style.props[key] &&
        style.props[key][props[key]]
      )
    )
      return {};

    if (style.props[key][props[key]].default) {
      return getThemeStyling({
        props,
        componentStyle: style.props[key][props[key]],
      });
    }

    return style.props[key][props[key]];
  };

  return {
    ...cssStyles,
    ...(props &&
      style &&
      Object.keys(props).reduce<CSSProperties>(
        (acc: CSSProperties, key: string): CSSProperties => {
          const value =
            typeof props[key as keyof ComponentInterface] === 'boolean'
              ? getBooleanValue(props, key as keyof ComponentInterface, style)
              : getObjectValue(props, key as keyof ComponentInterface, style);

          return { ...acc, ...value };
        },
        style.default || {}
      )),
  };
};

export const useThemeStyling = <ComponentInterface>(
  props: GetThemeStylingInterface<ComponentInterface>
): CSSProperties => {
  return useMemo(() => getThemeStyling<ComponentInterface>(props), [props]);
};
