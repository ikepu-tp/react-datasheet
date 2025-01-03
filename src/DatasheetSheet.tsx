import React from 'react';
import DatasheetContext, { DatasheetContextType } from './DatasheetContext';
import DatasheetRow from './DatasheetRow';
import { DatasheetSheetComponent } from './types';

export type DatasheetSheetProps = {
	component?: DatasheetSheetComponent;
};
export default function DatasheetSheet({ component }: DatasheetSheetProps): React.ReactNode {
	const { data, theme } = React.useContext<DatasheetContextType>(DatasheetContext);

	const Component = component || theme.sheetComponent || 'div';

	return (
		<Component>
			{data.map((rowData, rowIndex) => (
				<DatasheetRow key={`row-${rowIndex}`} row={rowIndex} rowData={rowData} />
			))}
		</Component>
	);
}
