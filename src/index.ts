import { DatasheetData } from './types';

export * from './DatasheetCell';
export * from './DatasheetCellEditor';
export * from './DatasheetContext';
export * from './DatasheetProvider';
export * from './DatasheetRow';
export * from './DatasheetSheet';
export * from './DefaultTheme';
export * from './types';
export * from './useDatasheet';

export function getPasteData(e: ClipboardEvent): DatasheetData {
	const clipboardData = e.clipboardData;
	if (!clipboardData) return [];

	let text = clipboardData.getData('text/plain');

	text = text.replace(/(\n|\r\n|\r)/, '\n');
	text = text.replace(/(\n)$/, '');

	return text.split('\n').map((line) => line.split('\t'));
}
