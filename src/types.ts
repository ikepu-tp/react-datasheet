import React, { PropsWithChildren } from 'react';

export type DatasheetCellData = string;
export type DatasheetData = DatasheetCellData[][];
export type DatasheetSheetComponent = (props: PropsWithChildren) => React.ReactNode;
export type DatasheetRowsWrapperComponent = (props: PropsWithChildren) => React.ReactNode;
export type DatasheetRowComponent = (props: PropsWithChildren) => React.ReactNode;
export type DatasheetRowHeaderComponent = (props: PropsWithChildren) => React.ReactNode;
export type DatasheetCellComponent = (props: PropsWithChildren) => React.ReactNode;
export type DatasheetColumnHeaderComponent = (props: PropsWithChildren) => React.ReactNode;
export type DatasheetThemeTheme = 'table' | 'flex';
export type DatasheetTheme = {
	theme?: DatasheetThemeTheme;
	sheetComponent?: DatasheetSheetComponent;
	rowComponent?: DatasheetRowComponent;
	cellComponent?: DatasheetCellComponent;
	rowsWrapperComponent?: DatasheetRowsWrapperComponent;
	rowHeaderWrapperComponent?: DatasheetRowHeaderComponent;
	columnHeaderWrapperComponent?: DatasheetColumnHeaderComponent;
	rowHeaderTopAndBottom?: boolean;
	columnHeaderLeftAndRight?: boolean;
};
export type DatasheetHeaders = {
	rowHeaderComponent?: React.ReactNode;
	columnHeaderComponent?: React.ReactNode;
};
