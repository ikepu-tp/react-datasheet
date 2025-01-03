import React from 'react';
import DatasheetContext, { DatasheetContextType } from './DatasheetContext';
import DatasheetRow from './DatasheetRow';
import { DatasheetSheetComponent } from './types';

export type DatasheetSheetProps = {
	component?: DatasheetSheetComponent;
};
export default function DatasheetSheet({ component }: DatasheetSheetProps): React.ReactNode {
	const {
		data,
		theme,
		headers: { rowHeaderComponent },
	} = React.useContext<DatasheetContextType>(DatasheetContext);

	const Component = component || theme.sheetComponent || 'div';
	const RowHeaderWrapperComponent = theme.rowHeaderWrapperComponent || React.Fragment;
	const RowsWrapperComponent = theme.rowsWrapperComponent || React.Fragment;

	return (
		<Component>
			<RowHeaderWrapperComponent>{rowHeaderComponent}</RowHeaderWrapperComponent>
			<RowsWrapperComponent>
				{data.map((rowData, rowIndex) => (
					<DatasheetRow key={`row-${rowIndex}`} row={rowIndex} rowData={rowData} />
				))}
			</RowsWrapperComponent>
		</Component>
	);
}
