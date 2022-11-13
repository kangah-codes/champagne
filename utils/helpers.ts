export default function getNumberSuffix(number: number): string {
	/**
	 * example: 1 => 1st
	 * example: 2 => 2nd
	 */

	const lastDigit = number % 10;
	const lastTwoDigits = number % 100;

	if (lastDigit === 1 && lastTwoDigits !== 11) {
		return `${number}st`;
	}

	if (lastDigit === 2 && lastTwoDigits !== 12) {
		return `${number}nd`;
	}

	if (lastDigit === 3 && lastTwoDigits !== 13) {
		return `${number}rd`;
	}

	return `${number}th`;
}
