module.exports = {
    root: true,
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:n/recommended",
        "prettier"
    ],
    parser: "@typescript-eslint/parser",
    plugins: ["@typescript-eslint"],
    overrides: [
        {
            files: ["**/*.test.ts"],
            env: {
                jest: true
            },
        }
    ],
    rules: {
        "n/no-unsupported-features/es-syntax": "off",
    },
};
