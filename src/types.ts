import React from 'react';

export type DatasheetCellData = string;
export type DatasheetData = DatasheetCellData[][];
export type DatasheetSheetComponent = () => React.ReactNode;
export type DatasheetRowComponent = (props: { style?: React.CSSProperties }) => React.ReactNode;
export type DatasheetCellComponent = () => React.ReactNode;
export type DatasheetTheme = {
	sheetComponent?: DatasheetSheetComponent;
	rowComponent?: DatasheetRowComponent;
	cellComponent?: DatasheetCellComponent;
};
