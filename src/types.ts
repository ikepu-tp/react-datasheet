import React, { PropsWithChildren } from 'react';

export type DatasheetDifferenceData = {
	oldValue: DatasheetCellData | undefined;
	newValue: DatasheetCellData | undefined;
	rowIndex: number;
	columnIndex: number;
};
export type DatasheetUpdateDataHandler = (newData: DatasheetData, differences: DatasheetDifferenceData[]) => void;
export type DatasheetCellData = string | number | boolean | null; // undefined を含めると，データ更新時の比較する際に誤作動を起こす
export type DatasheetData = DatasheetCellData[][];
export type DatasheetWrapperComponent = (props: PropsWithChildren) => React.ReactNode;
export type DatasheetSheetComponent = (props: PropsWithChildren) => React.ReactNode;
export type DatasheetRowsWrapperComponent = (props: PropsWithChildren) => React.ReactNode;
export type DatasheetRowComponent = (props: PropsWithChildren) => React.ReactNode;
export type DatasheetRowHeaderComponent = (props: PropsWithChildren) => React.ReactNode;
export type DatasheetCellComponent = React.ForwardRefExoticComponent<PropsWithChildren>;
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
export type DatasheetSelectedRange = {
	startRow?: number;
	endRow?: number;
	startColumn?: number;
	endColumn?: number;
};
