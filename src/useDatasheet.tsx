import React from 'react';
import { DatasheetContextType, DatasheetData } from './DatasheetContext';

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
	function changeData(data: DatasheetData) {
		setData(data);
	}
	/**
	 * Update the data at the specified row and column
	 *
	 * @param {number} row
	 * @param {number} column
	 * @param {string} value
	 */
	function updateData(row: number, column: number, value: string) {
		if (!Data[row]) Data[row] = [];
		Data[row][column] = value;
		setData(Data.concat());
	}
	return {
		data: Data,
		changeData,
		updateData,
	};
}
