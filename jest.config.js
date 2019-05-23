module.exports = {
    verbose: true,
    clearMocks: true,
    collectCoverage: true,
    roots: ["<rootDir>/src"],
    transform: { "^.+\\.tsx?$": "ts-jest" },
    setupFiles: ["raf/polyfill"],
    testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
    moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
    snapshotSerializers: ["enzyme-to-json/serializer"],
    setupTestFrameworkScriptFile: "<rootDir>/src/config/setupTests.ts",
};
