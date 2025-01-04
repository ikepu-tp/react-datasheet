import React from 'react';
import { DatasheetContextType } from './DatasheetContext';
import themeByTheme from './DefaultTheme';
import {
	DatasheetCellData,
	DatasheetData,
	DatasheetDifferenceData,
	DatasheetHeaders,
	DatasheetSelectedRange,
	DatasheetTheme,
	DatasheetUpdateDataHandler,
} from './types';

export type useDatasheetProps = {
	data: DatasheetData;
	theme?: DatasheetTheme;
	headers?: DatasheetHeaders;
	style?: string;
	updateData?: DatasheetUpdateDataHandler;
	contentEditable?: boolean;
};
export default function useDatasheet({
	data,
	theme,
	headers,
	style,
	contentEditable,
	updateData,
}: useDatasheetProps): DatasheetContextType {
	const DataRef = React.useRef<DatasheetData>(data);
	const [Data, setData] = React.useState<DatasheetData>(data);
	const [Theme, setTheme] = React.useState<DatasheetTheme>(themeByTheme(theme));
	const [Headers, setHeaders] = React.useState<DatasheetHeaders>(headers || {});
	const [Style, setStyle] = React.useState<string>(style || '');
	const [ContentEditable, setContentEditable] = React.useState<boolean>(contentEditable || false);
	const [SelectedRange, setSelectedRange] = React.useState<DatasheetSelectedRange>({});
	const SelectedRangeRef = React.useRef<DatasheetSelectedRange>(SelectedRange);

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
		setData([...[], ...DataRef.current]);
		catchDataChange(oldData);
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
		setData([...[], ...DataRef.current]);
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

	/**
	 * Change the contentEditable
	 *
	 * @param {boolean} contentEditable
	 */
	function changeContentEditable(contentEditable: boolean): void {
		setContentEditable(contentEditable);
	}

	/**
	 * Change the selected range
	 *
	 * @param {DatasheetSelectedRange} selectedRange
	 */
	function changeSelectedRange(selectedRange: DatasheetSelectedRange | null): void {
		if (selectedRange === null) {
			SelectedRangeRef.current = {};
			return setSelectedRange({ ...{} });
		}
		let selected = { ...SelectedRangeRef.current, ...selectedRange };

		// 逆順の対応
		if (
			selected.startColumn !== undefined &&
			selected.endColumn !== undefined &&
			selected.startColumn > selected.endColumn
		) {
			[selected.startColumn, selected.endColumn] = [selected.endColumn, selected.startColumn];
		}
		if (selected.startRow !== undefined && selected.endRow !== undefined && selected.startRow > selected.endRow) {
			[selected.startRow, selected.endRow] = [selected.endRow, selected.startRow];
		}

		SelectedRangeRef.current = selected;
		setSelectedRange({ ...{}, ...SelectedRangeRef.current });
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
		contentEditable: ContentEditable,
		chnageContentEditable: changeContentEditable,
		selectedRange: SelectedRange,
		changeSelectedRange,
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
