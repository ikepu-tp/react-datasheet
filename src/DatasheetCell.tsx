import React from 'react';
import DatasheetContext, { DatasheetContextType } from './DatasheetContext';

export type DatasheetCellProps = {
	row: number;
	column: number;
};
export default function DatasheetCell({ row, column }: DatasheetCellProps): React.ReactNode {
	const { data } = React.useContext<DatasheetContextType>(DatasheetContext);
	if (!data[row] || !data[row][column]) throw new Error(`No data at row: ${row}, column: ${column}`);
	return <div>{data[row][column]}</div>;
}
