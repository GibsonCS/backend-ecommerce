/**
 * For a detailed explanation regarding each configuration property, visit:
 */

/** @type {import('jest').Config} */
const config = {
  clearMocks: true,
  coverageProvider: "v8",
  preset: "ts-jest",
  extensionsToTreatAsEsm: [".ts"],
};

export default config;
