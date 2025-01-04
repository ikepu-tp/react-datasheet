import React from 'react';
import DatasheetCellEditor, { DatasheetCellEditorProps } from './DatasheetCellEditor';
import DatasheetContext, { DatasheetContextType } from './DatasheetContext';
import { DatasheetCellComponent } from './types';

export type DatasheetCellProps = {
	component?: DatasheetCellComponent;
};
const DatasheetCell = React.memo(
	({ component, row, column, cellData }: DatasheetCellProps & DatasheetCellEditorProps): React.ReactNode => {
		const { theme } = React.useContext<DatasheetContextType>(DatasheetContext);

		const ComponentRef = React.useRef<HTMLDivElement | HTMLTableCellElement | any>(null);

		const Component = component || theme.cellComponent || 'div';

		return (
			<Component ref={ComponentRef}>
				<DatasheetCellEditor row={row} column={column} cellData={cellData} />
			</Component>
		);
	}
);

export default DatasheetCell;
