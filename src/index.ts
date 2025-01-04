import { DatasheetData, DatasheetSelectedRange } from './types';

export * from './DatasheetCell';
export * from './DatasheetCellEditor';
export * from './DatasheetContext';
export * from './DatasheetProvider';
export * from './DatasheetRow';
export * from './DatasheetSheet';
export * from './DefaultTheme';
export * from './types';
export * from './useDatasheet';

/**
 * Get the data from the clipboard
 *
 * @export
 * @param {ClipboardEvent} e
 * @return {*}  {DatasheetData}
 */
export function getPasteData(e: ClipboardEvent): DatasheetData {
	const clipboardData = e.clipboardData;
	if (!clipboardData) return [];

	let text = clipboardData.getData('text/plain');

	text = text.replace(/(\n|\r\n|\r)/, '\n');
	text = text.replace(/(\n)$/, '');

	return text.split('\n').map((line) => line.split('\t'));
}

/**
 * Copy the selected range
 *
 * @export
 * @param {DatasheetSelectedRange} selectedRange
 * @param {DatasheetData} data
 * @return {*}  {void}
 */
export function copySelectedRange(selectedRange: DatasheetSelectedRange, data: DatasheetData): void {
	if (
		selectedRange.startRow === undefined ||
		selectedRange.startColumn === undefined ||
		selectedRange.endRow === undefined ||
		selectedRange.endColumn === undefined
	)
		return;
	const copyData = data
		.slice(selectedRange.startRow, selectedRange.endRow + 1)
		.map((line) => line.slice(selectedRange.startColumn, (selectedRange.endColumn || 0) + 1));
	const copyText = copyData.map((line) => line.join('\t')).join('\n');

	navigator.clipboard.writeText(copyText);
}
