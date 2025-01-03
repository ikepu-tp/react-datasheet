import React, { PropsWithChildren } from 'react';

export type DatasheetCellData = string;
export type DatasheetData = DatasheetCellData[][];
export type DatasheetSheetComponent = (props: PropsWithChildren) => React.ReactNode;
export type DatasheetRowComponent = (props: PropsWithChildren) => React.ReactNode;
export type DatasheetCellComponent = (props: PropsWithChildren) => React.ReactNode;
export type DatasheetThemeTheme = 'table' | 'flex';
export type DatasheetTheme = {
	theme?: DatasheetThemeTheme;
	sheetComponent?: DatasheetSheetComponent;
	rowComponent?: DatasheetRowComponent;
	cellComponent?: DatasheetCellComponent;
};
