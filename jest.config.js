module.exports = {
  testEnvironment: 'jsdom',
  roots: ["<rootDir>/src"],
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  },
  setupFilesAfterEnv: [
    "@testing-library/jest-dom/extend-expect"
  ],
  'moduleNameMapper': {
    '@/(.*)': '<rootDir>/src/$1',
    "\\.(scss)$": "identity-obj-proxy"
  },
  testRegex: "^.+(test)\\.tsx?$",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"]
};