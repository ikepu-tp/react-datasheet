import React from 'react';
import { DatasheetCellData, DatasheetData, DatasheetHeaders, DatasheetTheme } from './types';

export type DatasheetContextType = {
	data: DatasheetData;
	changeData: (data: DatasheetData) => void;
	updateCellData: (row: number, column: number, value: DatasheetCellData) => void;
	updateRowData: (row: number, value: DatasheetCellData[]) => void;
	theme: DatasheetTheme;
	changeTheme: (theme: DatasheetTheme) => void;
	headers: DatasheetHeaders;
	changeHeaders: (headers: DatasheetHeaders) => void;
};
const DatasheetContext = React.createContext<DatasheetContextType>({
	data: [],
	changeData: () => {},
	updateCellData: () => {},
	updateRowData: () => {},
	theme: {},
	changeTheme: () => {},
	headers: {},
	changeHeaders: () => {},
});
export default DatasheetContext;
