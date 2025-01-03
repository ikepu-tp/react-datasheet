import { DatasheetTheme } from './types';

export default function themeByTheme(theme: DatasheetTheme | undefined = undefined): DatasheetTheme {
	let defaultTheme: DatasheetTheme = {};

	switch (theme?.theme) {
		case 'flex':
			defaultTheme.sheetComponent = ({ children }) => <div>{children}</div>;
			defaultTheme.rowComponent = ({ children }) => <div style={{ display: 'flex' }}>{children}</div>;
			defaultTheme.cellComponent = ({ children }) => <div>{children}</div>;
			defaultTheme.rowHeaderWrapperComponent = ({ children }) => <div style={{ display: 'flex' }}>{children}</div>;
			defaultTheme.columnHeaderWrapperComponent = ({ children }) => <div>{children}</div>;
			break;
		case 'table':
			defaultTheme.sheetComponent = ({ children }) => <table>{children}</table>;
			defaultTheme.rowsWrapperComponent = ({ children }) => <tbody>{children}</tbody>;
			defaultTheme.rowComponent = ({ children }) => <tr>{children}</tr>;
			defaultTheme.cellComponent = ({ children }) => <td>{children}</td>;
			defaultTheme.rowHeaderWrapperComponent = ({ children }) => <thead>{children}</thead>;
			defaultTheme.columnHeaderWrapperComponent = ({ children }) => <th>{children}</th>;
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
