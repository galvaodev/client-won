module.exports = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/', './next/'],
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.ts(x)', '!src/**/stores.tsx'],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts']
}
