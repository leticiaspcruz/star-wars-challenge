const nextJest = require('next/jest');

const createJestConfig = nextJest({ dir: './' });

const customJestConfig = {
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/', '<rootDir>/coverage'],
  moduleNameMapper: {
    '@/src': ['<rootDir>/src/$1'],
    '@/mocks(.*)$': ['<rootDir>/src/mocks$1'],
    '@/components(.*)$': ['<rootDir>/src/components$1'],
    '@/styles(.*)$': ['<rootDir>/src/styles/$1'],
    '@/hooks(.*)$': ['<rootDir>/src/hooks$1'],
    '@/utils(.*)$': ['<rootDir>/src/utils$1'],
    '@/store(.*)$': ['<rootDir>/src/store$1'],
    '@/style(.*)$': ['<rootDir>/src/style$1'],
    '@/services(.*)$': ['<rootDir>/src/services$1'],
    '@/configs(.*)$': ['<rootDir>/src/configs$1'],
    '@/enums(.*)$': ['<rootDir>/src/enums$1'],
    '@/public(.*)$': ['<rootDir>/public/$1'],
  },

  coverageDirectory: 'coverage',
  coverageReporters: ['text', 'lcov'],
  collectCoverageFrom: [
    'src/app/**/*.{js,jsx,ts,tsx}',
    'src/components/**/*.{js,jsx,ts,tsx}',
    'src/hooks/*.{js,jsx,ts,tsx}',
    'src/utils/*.{js,jsx,ts,tsx}',
    '!src/app/[brand]/*.{js,jsx,ts,tsx}',
  ],
  coverageThreshold: {
    global: {
      branches: 0,
      functions: 0,
      lines: 0,
      statements: 0,
    },
  },
};

// createJestConfig is exported in this way to ensure that next/jest can load the Next.js configuration, which is async
module.exports = createJestConfig(customJestConfig);
