import React from 'react';
import { DatasheetCellData, DatasheetData, DatasheetHeaders, DatasheetSelectedRange, DatasheetTheme } from './types';

export type DatasheetContextType = {
	data: DatasheetData;
	dataCurrent: DatasheetData;
	changeData: (data: DatasheetData) => void;
	updateCellData: (row: number, column: number, value: DatasheetCellData) => void;
	updateRowData: (row: number, value: DatasheetCellData[]) => void;
	theme: DatasheetTheme;
	changeTheme: (theme: DatasheetTheme) => void;
	headers: DatasheetHeaders;
	changeHeaders: (headers: DatasheetHeaders) => void;
	style: string;
	changeStyle: (style: string) => void;
	contentEditable: boolean;
	chnageContentEditable: (contentEditable: boolean) => void;
	selectedRange: DatasheetSelectedRange;
	changeSelectedRange: (selectedRange: DatasheetSelectedRange | null) => void;
};
const DatasheetContext = React.createContext<DatasheetContextType>({
	data: [],
	dataCurrent: [],
	changeData: () => {},
	updateCellData: () => {},
	updateRowData: () => {},
	theme: {},
	changeTheme: () => {},
	headers: {},
	changeHeaders: () => {},
	style: '',
	changeStyle: () => {},
	contentEditable: false,
	chnageContentEditable: () => {},
	selectedRange: {},
	changeSelectedRange: () => {},
});
export default DatasheetContext;
