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

export const numberFormatter = (num: number, digits: number): string => {
	const lookup = [
		{ value: 1, symbol: "" },
		{ value: 1e3, symbol: "k" },
		{ value: 1e6, symbol: "M" },
	];

	const item = lookup
		.slice()
		.reverse()
		.find((item) => num >= item.value);

	return item
		? (num / item.value)
				.toFixed(digits)
				.replace(/\.0+$|(\.[0-9]*[1-9])0+$/, "$1") + item.symbol
		: "0";
};
