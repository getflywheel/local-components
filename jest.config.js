module.exports = {
	"moduleFileExtensions": [
		"ts",
		"tsx",
		"js",
		"jsx",
		"json",
		"node"
	],
	"moduleNameMapper": {
		"\\.(css|scss|sass)$": "identity-obj-proxy"
	},
	"roots": [
		"<rootDir>/src"
	],
	"testRegex": "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
	"transform": {
		"^.+\\.tsx?$": "ts-jest"
	},
	"setupFilesAfterEnv": ["<rootDir>/src/setupTests.ts"]
}
