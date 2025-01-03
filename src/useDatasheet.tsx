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
	const [Data, setData] = React.useState<DatasheetData>(data);
	const [Theme, setTheme] = React.useState<DatasheetTheme>(themeByTheme(theme));
	const [Headers, setHeaders] = React.useState<DatasheetHeaders>(headers || {});
	const [Style, setStyle] = React.useState<string>(style || '');

	/**
	 * Change the data
	 *
	 * @param {DatasheetData} data
	 */
	function changeData(data: DatasheetData): void {
		setData(data);
	}

	/**
	 * Update the data at the specified row and column
	 *
	 * @param {number} row
	 * @param {number} column
	 * @param {DatasheetCellData} value
	 */
	function updateCellData(row: number, column: number, value: DatasheetCellData): void {
		if (!Data[row]) Data[row] = [];
		Data[row][column] = value;
		setData(Data.concat());
	}

	/**
	 * Update the data at the specified row
	 *
	 * @param {number} row
	 * @param {DatasheetCellData[]} value
	 */
	function updateRowData(row: number, value: DatasheetCellData[]): void {
		Data[row] = value;
		setData(Data.concat());
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
		data: Data,
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
