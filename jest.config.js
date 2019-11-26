module.exports = {
  testEnvironment: 'node',
  verbose: true,
  clearMocks: true,
  transform: {
    '^.+\\.js$': 'babel-jest',
  },
  moduleDirectories: ['node_modules', '.'],
  testMatch: ['**/src/**/?(*.)+(spec|test).js'],
  setupFiles: ['<rootDir>/tests/setup.js'],
  testPathIgnorePatterns: [
    '/node_modules/',
    '<rootDir>/build/',
    '/config/',
    '/nginx/',
    '/static/',
    '/docs/',
    '/bin/',
    '/tests/',
  ],
  coverageDirectory: 'report/coverage',
  collectCoverageFrom: [
    '<rootDir>/src/**/*.js',
  ],
}
