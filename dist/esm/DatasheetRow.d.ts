import React from 'react';
import { DatasheetCellData, DatasheetRowComponent } from './types';
export type DatasheetRowProps = {
    component?: DatasheetRowComponent;
    row: number;
    rowData?: DatasheetCellData[];
};
declare const DatasheetRow: React.MemoExoticComponent<({ component, row, rowData }: DatasheetRowProps) => React.ReactNode>;
export default DatasheetRow;
