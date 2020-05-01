module.exports = {
	parser: "@typescript-eslint/parser",
	// eslint-config-prettier is a config that disables rules that conflict with Prettier. Add it to your
	extends: [
		"plugin:@typescript-eslint/recommended",
		"prettier/@typescript-eslint",
		"plugin:prettier/recommended",
		"plugin:react/recommended",
	],
	// eslint-plugin-prettier is a plugin that adds a rule that formats content using Prettier
	plugins: ["prettier", "@typescript-eslint", "react"],
	env: {
		es6: true
	},
	parserOptions: {
		ecmaVersion: 11,
		// script | module
		sourceType: "module",
		ecmaFeatures: {
			jsx: false,
		},
	},
	rules: {
		"prettier/prettier": "error",
		"semi": ["error", "never"],
		"react/jsx-uses-react": "error",
		"react/jsx-uses-vars": "error",
		"@typescript-eslint/explicit-function-return-type": "off",
		"@typescript-eslint/no-var-requires": "off",
	},
}
