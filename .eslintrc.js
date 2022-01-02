module.exports = {
	env: {
		browser: true,
		es2021: true
	},
	extends: [
		'plugin:@next/next/recommended',
		'airbnb',
		'airbnb/hooks',
		'plugin:react/recommended',
		'plugin:react-hooks/recommended',
		'airbnb-typescript',
		'plugin:jsx-a11y/recommended',
		'plugin:prettier/recommended'
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true
		},
		ecmaVersion: 12,
		sourceType: 'module',
		project: './tsconfig.json'
	},
	plugins: ['react', '@typescript-eslint', 'jsx-a11y', 'prettier'],
	rules: {
		'no-unused-vars': ['error', { varsIgnorePattern: '_.*' }],
		'react-hooks/rules-of-hooks': 'error',
		'react-hooks/exhaustive-deps': [
			'warn',
			{
				additionalHooks: 'useRecoilCallback'
			}
		],
		'prettier/prettier': [
			'error',
			{
				endOfLine: 'auto'
			}
		],
		'react/react-in-jsx-scope': 'off',
		'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
		'no-console': ['error', { allow: ['warn', 'error'] }],
		'@typescript-eslint/naming-convention': [
			'error',
			{
				selector: ['variable', 'function'],
				modifiers: ['unused'],
				format: ['camelCase'],
				leadingUnderscore: 'require'
			}
		],
		'@typescript-eslint/no-unused-vars': ['error', { varsIgnorePattern: '_.*' }],
		'react/function-component-definition': ['error', { namedComponents: 'function-declaration', unnamedComponents: 'arrow-function' }],
		'no-underscore-dangle': ['error', { allow: ['_key', '_id'] }]
	}
};
