module.exports = {
  rollup(config) {
    if (config.output.format !== 'esm') {
      return config;
    }
    const overrides = {
      output: {
        ...config.output,
        file: null,
        dir: 'dist',
        entryFileNames: 'esm/[name].js',
      },
      external: [
        'react',
        'react-dom',
        'date-fns',
        'date-fns/locale',
        'downshift',
        'framer-motion',
        '@emotion/react',
        '@emotion/styled',
        '@emotion/styled-base',
        '@emotion/serialize',
        'prop-types',
        'react-fast-compare',
        'react-input-autosize',
        'react-loadable',
        'react-magma-icons',
        'warning',
      ],
    };

    return { ...config, ...overrides };
  },
};
