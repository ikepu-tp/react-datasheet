import React from 'react';
import { DatasheetContextType } from './DatasheetContext';
import themeByTheme from './DefaultTheme';
import {
	DatasheetCellData,
	DatasheetData,
	DatasheetDifferenceData,
	DatasheetHeaders,
	DatasheetTheme,
	DatasheetUpdateDataHandler,
	DatasheetWrapperComponent,
} from './types';

export type useDatasheetProps = {
	data: DatasheetData;
	theme?: DatasheetTheme;
	headers?: DatasheetHeaders;
	style?: string;
	wrapperComponent?: DatasheetWrapperComponent;
	updateData?: DatasheetUpdateDataHandler;
};
export default function useDatasheet({
	data,
	theme,
	headers,
	style,
	updateData,
}: useDatasheetProps): DatasheetContextType {
	const DataRef = React.useRef<DatasheetData>(data);
	const [Theme, setTheme] = React.useState<DatasheetTheme>(themeByTheme(theme));
	const [Headers, setHeaders] = React.useState<DatasheetHeaders>(headers || {});
	const [Style, setStyle] = React.useState<string>(style || '');

	function catchDataChange(
		oldData: DatasheetData,
		differences: DatasheetDifferenceData[] | undefined = undefined
	): void {
		if (updateData) updateData(DataRef.current, differences ? differences : findDifferences(oldData, DataRef.current));
	}

	/**
	 * Change the data
	 *
	 * @param {DatasheetData} data
	 */
	function changeData(data: DatasheetData): void {
		const oldData = JSON.parse(JSON.stringify(DataRef.current));
		DataRef.current = data;
		catchDataChange(oldData);
	}

	/**
	 * Update the data at the specified row and column
	 *
	 * @param {number} row
	 * @param {number} column
	 * @param {DatasheetCellData} value
	 */
	function updateCellData(row: number, column: number, value: DatasheetCellData): void {
		const oldData = JSON.parse(JSON.stringify(DataRef.current));
		if (!DataRef.current[row]) DataRef.current[row] = [];
		DataRef.current[row][column] = value;
		catchDataChange(oldData, [
			{
				oldValue: oldData[row] ? oldData[row][column] : undefined,
				newValue: value,
				rowIndex: row,
				columnIndex: column,
			},
		]);
	}

	/**
	 * Update the data at the specified row
	 *
	 * @param {number} row
	 * @param {DatasheetCellData[]} value
	 */
	function updateRowData(row: number, value: DatasheetCellData[]): void {
		const oldData = JSON.parse(JSON.stringify(DataRef.current));
		DataRef.current[row] = value;
		catchDataChange(oldData);
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

function findDifferences(oldData: DatasheetData, newData: DatasheetData): DatasheetDifferenceData[] {
	const differences: DatasheetDifferenceData[] = [];

	const maxRows = Math.max(oldData.length, newData.length);

	// Iterate through rows
	Array.from({ length: maxRows }).forEach((_, rowIndex) => {
		const oldRow = oldData[rowIndex] || []; // Use empty array if row doesn't exist
		const newRow = newData[rowIndex] || []; // Use empty array if row doesn't exist

		const maxColumns = Math.max(oldRow.length, newRow.length);

		// Iterate through columns
		Array.from({ length: maxColumns }).forEach((_, columnIndex) => {
			const oldValue = oldRow[columnIndex];
			const newValue = newRow[columnIndex];

			// Compare values and record differences
			if (oldValue !== newValue) {
				differences.push({
					oldValue: oldValue !== undefined ? oldValue : undefined,
					newValue: newValue !== undefined ? newValue : undefined,
					rowIndex: rowIndex,
					columnIndex: columnIndex,
				});
			}
		});
	});

	return differences;
}
