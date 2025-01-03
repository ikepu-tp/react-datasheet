import React from 'react';

export type DatasheetCellData = string;
export type DatasheetData = DatasheetCellData[][];
export type DatasheetContextType = {
	data: DatasheetData;
	changeData: (data: DatasheetData) => void;
	updateCellData: (row: number, column: number, value: DatasheetCellData) => void;
	updateRowData: (row: number, value: DatasheetCellData[]) => void;
};
const DatasheetContext = React.createContext<DatasheetContextType>({
	data: [],
	changeData: () => {},
	updateCellData: () => {},
	updateRowData: () => {},
});
export default DatasheetContext;
