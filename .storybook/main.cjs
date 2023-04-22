module.exports = {
  addons: ['@storybook/addon-viewport', '@storybook/addon-docs', '@storybook/addon-interactions', '@storybook/addon-a11y'],
  stories: ['../stories/**/*.stories.mdx', '../stories/**/*.stories.@(js|jsx|ts|tsx)'],
  features: {
    interactionsDebugger: true,
    storyStoreV7: true,
  },
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  typescript: {
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      // From ../tsconfig.json
      compilerOptions: {
        allowJs: false,
        allowSyntheticDefaultImports: true,
        allowUnreachableCode: false,
        declaration: true,
        emitDeclarationOnly: true,
        esModuleInterop: true,
        forceConsistentCasingInFileNames: true,
        jsx: 'react',
        lib: ['esnext', 'dom'],
        module: 'esnext',
        noImplicitAny: true,
        noUncheckedIndexedAccess: true,
        noUnusedLocals: true,
        noUnusedParameters: true,
        removeComments: true,
        sourceMap: false,
        strict: true,
        target: 'es2022',
      },
    },
  },
  core: {
    disableTelemetry: true,
  },
  docs: {
    autodocs: 'tag',
  },
}
