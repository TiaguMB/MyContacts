module.exports = {
	env: {
		commonjs: true,
		es2021: true,
		node: true,
	},
	extends: [
		'airbnb-base',
	],
	parserOptions: {
		ecmaVersion: 12,
	},
	rules: {
		indent: ['error', 'tab'],
		'no-tabs': 'off',
		'class-methods-use-this': 'off',
		'consistent-return': 'off',
		camelcase: 'off',
	},
};
