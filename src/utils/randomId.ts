/**
 * Creates a random URL-safe string for IDs and unique fallback values.
 *
 * @param len Length of the string to generate.
 */
export default function randomId(len: number = 21): string {
	const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_-';
	let result = '';
	for (let i = 0; i < len; i += 1) {
		const randomIndex = Math.floor(Math.random() * charset.length);
		result += charset[randomIndex];
	}
	return result;
}
