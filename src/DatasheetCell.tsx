import React from 'react';
import DatasheetCellEditor, { DatasheetCellEditorProps } from './DatasheetCellEditor';
import DatasheetContext, { DatasheetContextType } from './DatasheetContext';
import { DatasheetCellComponent } from './types';

export type DatasheetCellProps = {
	component?: DatasheetCellComponent;
};
const DatasheetCell = React.memo(
	({ component, row, column, cellData }: DatasheetCellProps & DatasheetCellEditorProps): React.ReactNode => {
		const { theme, selectedRange, changeSelectedRange } = React.useContext<DatasheetContextType>(DatasheetContext);

		const ComponentRef = React.useRef<HTMLDivElement | HTMLTableCellElement>(null);

		const Component = component || theme.cellComponent || 'div';

		React.useEffect(() => {
			if (!ComponentRef.current) return;
			ComponentRef.current.addEventListener('mousedown', (e: Event) => {
				e.preventDefault();
				e.stopPropagation();
				changeSelectedRange({
					startRow: row,
					startColumn: column,
				});
			});
			ComponentRef.current.addEventListener('mouseup', (e: Event) => {
				e.preventDefault();
				e.stopPropagation();
				changeSelectedRange({
					...selectedRange,
					endRow: row,
					endColumn: column,
				});
			});
		}, []);

		React.useEffect(() => {
			console.log(selectedRange);
		}, [selectedRange]);

		return (
			<Component ref={ComponentRef}>
				<DatasheetCellEditor row={row} column={column} cellData={cellData} />
			</Component>
		);
	}
);

export default DatasheetCell;
