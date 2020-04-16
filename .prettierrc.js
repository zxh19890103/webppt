module.exports = {
	printWidth: 80,
	useTabs: true,
	tabWidth: 2,
	semi: false,
	singleQuote: false,
	// as-needed | consistent | preserve
	quoteProps: "consistent",
	jsxSingleQuote: false,
	// es5 | none | all
	trailingComma: "all",
	bracketSpacing: true,
	jsxBracketSameLine: false,
	// always | avoid
	arrowParens: "always",
	rangeStart: 0,
	rangeEnd: Infinity,
	// parser: "",
	/// cli ~ stdin-filepath Specify the file name to use to infer which parser to use.
	// filepath: ""
	requirePragma: false,
	insertPragma: false,
	// always | never | preserve
	proseWrap: "always",
	// css | strict | ignore
	htmlWhitespaceSensitivity: "strict",
	vueIndentScriptAndStyle: false,
	// lf | crlf | cr | auto
	endOfLine: "auto",
}
