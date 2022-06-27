module.exports = {
	moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
	moduleNameMapper: {
		'\\.(css|scss|sass)$': 'identity-obj-proxy',
		'\\.(png|svg|jpg|gif)$': '<rootDir>/src/__mocks__/file.js',
	},
	roots: ['<rootDir>/src'],
	testEnvironment: 'jsdom',
	testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
	transform: {
		'^.+\\.tsx?$': 'ts-jest',
	},
	setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
};
