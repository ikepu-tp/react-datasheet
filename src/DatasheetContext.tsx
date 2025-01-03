import React from 'react';

export type DatasheetData = string[][];
export type DatasheetContextType = {
	data: DatasheetData;
	changeData: (data: DatasheetData) => void;
	updateData: (row: number, column: number, value: string) => void;
};
const DatasheetContext = React.createContext<DatasheetContextType>({
	data: [],
	changeData: () => {},
	updateData: () => {},
});
export default DatasheetContext;
