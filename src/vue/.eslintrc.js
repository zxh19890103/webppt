module.exports = {
	root: true,
	// eslint-config-prettier is a config that disables rules that conflict with Prettier. Add it to your
	extends: ["plugin:vue/vue3-recommended"],
	// eslint-plugin-prettier is a plugin that adds a rule that formats content using Prettier
	plugins: ["vue"],
	env: {
		es6: true,
	},
	parserOptions: {
		ecmaVersion: 11,
		// script | module
		sourceType: "module",
		ecmaFeatures: {
			jsx: true,
		},
	},
	rules: {
		"semi": ["error", "never"],
		"vue/html-indent": ["error", "tab"],
		"vue/component-tags-order": [
			"error",
			{
				order: ["template", "script", "style"],
			},
		],
		"vue/script-indent": [
			"error",
			"tab",
			{
				baseIndent: 1,
			},
		],
	},
}
