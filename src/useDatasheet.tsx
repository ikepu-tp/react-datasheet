import React from 'react';
import { DatasheetContextType } from './DatasheetContext';
import themeByTheme from './DefaultTheme';
import { DatasheetCellData, DatasheetData, DatasheetHeaders, DatasheetTheme, DatasheetWrapperComponent } from './types';

export type useDatasheetProps = {
	data: DatasheetData;
	theme?: DatasheetTheme;
	headers?: DatasheetHeaders;
	style?: string;
	wrapperComponent?: DatasheetWrapperComponent;
};
export default function useDatashet({ data, theme, headers, style }: useDatasheetProps): DatasheetContextType {
	const DataRef = React.useRef<DatasheetData>(data);
	const [Theme, setTheme] = React.useState<DatasheetTheme>(themeByTheme(theme));
	const [Headers, setHeaders] = React.useState<DatasheetHeaders>(headers || {});
	const [Style, setStyle] = React.useState<string>(style || '');

	function catchDataChange(): void {
		console.log('Data changed', DataRef.current);
	}

	/**
	 * Change the data
	 *
	 * @param {DatasheetData} data
	 */
	function changeData(data: DatasheetData): void {
		DataRef.current = data;
		catchDataChange();
	}

	/**
	 * Update the data at the specified row and column
	 *
	 * @param {number} row
	 * @param {number} column
	 * @param {DatasheetCellData} value
	 */
	function updateCellData(row: number, column: number, value: DatasheetCellData): void {
		if (!DataRef.current[row]) DataRef.current[row] = [];
		DataRef.current[row][column] = value;
		catchDataChange();
	}

	/**
	 * Update the data at the specified row
	 *
	 * @param {number} row
	 * @param {DatasheetCellData[]} value
	 */
	function updateRowData(row: number, value: DatasheetCellData[]): void {
		DataRef.current[row] = value;
		catchDataChange();
	}

	/**
	 * Change the theme
	 *
	 * @param {DatasheetTheme} theme
	 */
	function changeTheme(theme: DatasheetTheme): void {
		setTheme({ ...{}, ...theme });
	}

	/**
	 * Change the headers
	 *
	 * @param {DatasheetHeaders} headers
	 */
	function changeHeaders(headers: DatasheetHeaders): void {
		setHeaders({ ...{}, ...headers });
	}

	/**
	 * Change the style
	 *
	 * @param {string} style
	 */
	function changeStyle(style: string): void {
		setStyle(style);
	}

	return {
		data: DataRef.current,
		changeData,
		updateCellData,
		updateRowData,
		theme: Theme,
		changeTheme,
		headers: Headers,
		changeHeaders,
		style: Style,
		changeStyle,
	};
}
