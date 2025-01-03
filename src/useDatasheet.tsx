import React from 'react';
import { DatasheetContextType } from './DatasheetContext';
import { DatasheetCellData, DatasheetData } from './types';

export type useDatashetProps = {
	data: DatasheetData;
};
export default function useDatashet({ data }: useDatashetProps): DatasheetContextType {
	const [Data, setData] = React.useState<DatasheetData>(data);

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
	return {
		data: Data,
		changeData,
		updateCellData,
		updateRowData,
	};
}
