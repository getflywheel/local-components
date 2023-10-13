import randomId from './randomId';

describe('randomId', () => {
	it('should return a string of default length when no arguments are passed', () => {
		const result = randomId();
		expect(result).toHaveLength(21);
	});

	it('should return a string of specified length when an argument is provided', () => {
		const result = randomId(10);
		expect(result).toHaveLength(10);
	});

	it('should return unique values across multiple calls', () => {
		const sampleSize = 100;
		const ids = Array.from({ length: sampleSize }, randomId);
		const uniqueIds = new Set(ids);

		expect(uniqueIds.size).toEqual(sampleSize);
	});
});
