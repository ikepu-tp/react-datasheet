import React from 'react';
import DatasheetContext, { DatasheetContextType } from './DatasheetContext';
import { DatasheetCellComponent, DatasheetCellData } from './types';

export type DatasheetCellProps = {
	component?: DatasheetCellComponent;
	row: number;
	column: number;
	cellData?: DatasheetCellData;
};
export default function DatasheetCell({ component, row, column, cellData }: DatasheetCellProps): React.ReactNode {
	const { data, theme } = React.useContext<DatasheetContextType>(DatasheetContext);

	const Component = component || theme.cellComponent || 'div';

	let initData: DatasheetCellData;
	if (cellData) {
		initData = cellData;
	} else {
		if (!data[row] || !data[row][column]) throw new Error(`No data at row: ${row}, column: ${column}`);
		initData = data[row][column];
	}

	return <Component>{initData}</Component>;
}
