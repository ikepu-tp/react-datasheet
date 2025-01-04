import React from 'react';
import { DatasheetTheme } from './types';

export default function themeByTheme(theme: DatasheetTheme | undefined = undefined): DatasheetTheme {
	let defaultTheme: DatasheetTheme = {};

	switch (theme?.theme) {
		case 'flex':
			defaultTheme.sheetComponent = ({ children, ...props }) => <div {...props}>{children}</div>;
			defaultTheme.rowComponent = ({ children, ...props }) => (
				<div style={{ display: 'flex' }} {...props}>
					{children}
				</div>
			);
			defaultTheme.cellComponent = React.forwardRef(
				({ children, ...props }, ref: React.ForwardedRef<HTMLDivElement>) => (
					<div {...props} ref={ref}>
						{children}
					</div>
				)
			);
			defaultTheme.rowHeaderWrapperComponent = ({ children, ...props }) => (
				<div style={{ display: 'flex' }} {...props}>
					{children}
				</div>
			);
			defaultTheme.columnHeaderWrapperComponent = ({ children, ...props }) => <div {...props}>{children}</div>;
			break;
		case 'table':
			defaultTheme.sheetComponent = ({ children, ...props }) => <table {...props}>{children}</table>;
			defaultTheme.rowsWrapperComponent = ({ children, ...props }) => <tbody {...props}>{children}</tbody>;
			defaultTheme.rowComponent = ({ children, ...props }) => <tr {...props}>{children}</tr>;
			defaultTheme.cellComponent = React.forwardRef(
				({ children, ...props }, ref: React.ForwardedRef<HTMLTableCellElement>) => (
					<td {...props} ref={ref}>
						{children}
					</td>
				)
			);
			defaultTheme.rowHeaderWrapperComponent = ({ children, ...props }) => <thead {...props}>{children}</thead>;
			defaultTheme.columnHeaderWrapperComponent = ({ children, ...props }) => <th {...props}>{children}</th>;
			break;
		case undefined:
		default:
			break;
	}

	return {
		...defaultTheme,
		...theme,
	};
}
