module.exports = {
    root: true,
    extends: [
        "eslint:recommended",
        "plugin:n/recommended",
        "prettier"
    ],
    overrides: [
        {
            files: ["**/*.test.js"],
            env: {
                jest: true
            },
        }
    ]
};
