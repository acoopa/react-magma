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
  componentName?: string
): CSSProperties =>
  componentName
    ? componentName.split('.').reduce((subTheme, componentName) => {
        const { extendsComponent, ...componentTheme } =
          subTheme.components[componentName];

        return extendsComponent
          ? mergeThemes(
              componentTheme,
              getComponentStyle(theme, extendsComponent)
            )
          : componentTheme;
      }, theme)
    : {};

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

  const theme = mergeThemes(themeOverride);
  const style: { [x: string]: any } = mergeThemes(
    styleOverride,
    getComponentStyle(theme, componentName)
  );

  const getBooleanValue = (
    props: ComponentInterface,
    key: keyof ComponentInterface,
    style: { [x: string]: any }
  ) => {
    if (!(props && props[key])) return {};
    if (!(style && style.props && style.props[key])) return {};

    if (style.props[key].default) {
      return getThemeStyling({
        props,
        componentStyle: style.props[key],
      });
    }

    return style.props[key];
  };

  const getObjectValue = (
    props: ComponentInterface,
    key: keyof ComponentInterface,
    style: { [x: string]: any }
  ) => {
    const propKey = props[key] || 'default';

    if (!(style && style.props && style.props[key])) return {};

    if (style.props[key][propKey]?.default) {
      return getThemeStyling({
        props,
        componentStyle: mergeThemes(
          {
            default: mergeThemes(
              style.props[key][propKey].default,
              style.props[key]._base || {}
            ),
          },
          style.props[key][propKey]
        ),
        componentName: '',
      });
    }

    return mergeThemes(style.props[key][propKey], style.props[key]._base || {});
  };

  return mergeThemes(
    props &&
      style &&
      Object.keys(style.props || {}).reduce<CSSProperties>(
        (acc: CSSProperties, key: string): CSSProperties => {
          const value =
            typeof props[key as keyof ComponentInterface] === 'boolean'
              ? getBooleanValue(props, key as keyof ComponentInterface, style)
              : getObjectValue(props, key as keyof ComponentInterface, style);

          return mergeThemes(value, acc);
        },
        style.default || {}
      ),
    cssStyles
  );
};

export const useThemeStyling = <ComponentInterface>(
  props: GetThemeStylingInterface<ComponentInterface>
): CSSProperties => {
  return useMemo(() => getThemeStyling<ComponentInterface>(props), [props]);
};
