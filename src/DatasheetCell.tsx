import React from 'react';
import DatasheetContext, { DatasheetCellData, DatasheetContextType } from './DatasheetContext';

export type DatasheetCellProps = {
	row: number;
	column: number;
	cellData?: DatasheetCellData;
};
export default function DatasheetCell({ row, column, cellData }: DatasheetCellProps): React.ReactNode {
	const { data } = React.useContext<DatasheetContextType>(DatasheetContext);

	let initData: DatasheetCellData;
	if (cellData) {
		initData = cellData;
	} else {
		if (!data[row] || !data[row][column]) throw new Error(`No data at row: ${row}, column: ${column}`);
		initData = data[row][column];
	}

	return <div>{initData}</div>;
}
