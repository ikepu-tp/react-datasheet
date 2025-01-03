import React from 'react';
import { DatasheetCellComponent, DatasheetCellData } from './types';
export type DatasheetCellProps = {
    component?: DatasheetCellComponent;
    row: number;
    column: number;
    cellData?: DatasheetCellData;
};
declare const DatasheetCell: React.MemoExoticComponent<({ component, row, column, cellData }: DatasheetCellProps) => React.ReactNode>;
export default DatasheetCell;
