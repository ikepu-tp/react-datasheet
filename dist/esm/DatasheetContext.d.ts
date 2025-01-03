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
    style: string;
    changeStyle: (style: string) => void;
};
declare const DatasheetContext: React.Context<DatasheetContextType>;
export default DatasheetContext;
