import React from 'react';
import DatasheetCellEditor, { DatasheetCellEditorProps } from './DatasheetCellEditor';
import DatasheetContext, { DatasheetContextType } from './DatasheetContext';
import { DatasheetCellComponent } from './types';

export type DatasheetCellProps = {
	component?: DatasheetCellComponent;
};
const DatasheetCell = React.memo(
	({ component, row, column, cellData }: DatasheetCellProps & DatasheetCellEditorProps): React.ReactNode => {
		const { theme, selectedRange, changeSelectedRange, contentEditable } =
			React.useContext<DatasheetContextType>(DatasheetContext);

		const ComponentRef = React.useRef<HTMLDivElement | HTMLTableCellElement>(null);

		const Component = component || theme.cellComponent || 'div';

		const MousedownHandler = React.useRef<EventListenerOrEventListenerObject>((e: Event) => {
			e.preventDefault();
			e.stopPropagation();
			changeSelectedRange({
				startRow: row,
				startColumn: column,
				endRow: row,
				endColumn: column,
			});
		});
		const MousemoveHandler = React.useRef<EventListenerOrEventListenerObject>((e: Event) => {
			e.preventDefault();
			e.stopPropagation();
		});
		const MouseupHandler = React.useRef<EventListenerOrEventListenerObject>((e: Event) => {
			e.preventDefault();
			e.stopPropagation();
			changeSelectedRange({
				endRow: row,
				endColumn: column,
			});
		});

		React.useEffect(() => {
			if (!ComponentRef.current) return;
			if (contentEditable) {
				removeSelected();
				console.log('remove');
				ComponentRef.current.removeEventListener('mousedown', MousedownHandler.current);
				ComponentRef.current.removeEventListener('mousemove', MousemoveHandler.current);
				ComponentRef.current.removeEventListener('mouseup', MouseupHandler.current);
				return;
			}
			ComponentRef.current.addEventListener('mousedown', MousedownHandler.current);
			ComponentRef.current.addEventListener('mousemove', MousemoveHandler.current);
			ComponentRef.current.addEventListener('mouseup', MouseupHandler.current);
		}, [contentEditable]);

		React.useEffect(() => {
			if (contentEditable) return;
			removeSelected();

			//選択がない場合は何もしない
			if (!selectedRange) return;
			if (selectedRange.startRow === undefined || selectedRange.startColumn === undefined) return;
			if (selectedRange.endRow === undefined || selectedRange.endColumn === undefined) return;

			//開始位置の場合は選択状態にする
			if (selectedRange.startRow === row && selectedRange.startColumn === column) {
				if (selectedRange.startRow === selectedRange.endRow && selectedRange.startColumn === selectedRange.endColumn)
					return addOnlySelected();
				return addSelected();
			}
			//選択範囲に含まれていたら選択状態にする
			if (
				selectedRange.startRow <= row &&
				row <= selectedRange.endRow &&
				selectedRange.startColumn <= column &&
				column <= selectedRange.endColumn
			) {
				addSelected();
			}
		}, [selectedRange]);

		function addSelected(): void {
			ComponentRef.current?.classList.add('ikpeuTp-reactDatasheet__cell-selected');
		}
		function addOnlySelected(): void {
			ComponentRef.current?.classList.add('ikpeuTp-reactDatasheet__cell-onlySelected');
		}
		function removeSelected(): void {
			ComponentRef.current?.classList.remove('ikpeuTp-reactDatasheet__cell-selected');
			ComponentRef.current?.classList.remove('ikpeuTp-reactDatasheet__cell-onlySelected');
		}

		return (
			<Component ref={ComponentRef}>
				<DatasheetCellEditor row={row} column={column} cellData={cellData} />
			</Component>
		);
	}
);

export default DatasheetCell;
