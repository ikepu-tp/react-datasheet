import { DatasheetTheme } from './types';

export default function themeByTheme(theme: DatasheetTheme | undefined = undefined): DatasheetTheme {
	let defaultTheme: DatasheetTheme = {};

	switch (theme?.theme) {
		case 'flex':
			defaultTheme.sheetComponent = ({ children }) => <div style={{ display: 'flex' }}>{children}</div>;
			defaultTheme.rowComponent = ({ children }) => <div>{children}</div>;
			defaultTheme.cellComponent = ({ children }) => <div>{children}</div>;
			break;
		case 'table':
			defaultTheme.sheetComponent = ({ children }) => (
				<table>
					<tbody>{children}</tbody>
				</table>
			);
			defaultTheme.rowComponent = ({ children }) => <tr>{children}</tr>;
			defaultTheme.cellComponent = ({ children }) => <td>{children}</td>;
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
