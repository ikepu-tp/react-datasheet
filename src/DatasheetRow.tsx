export type DatasheetRowProps = {
	component?: () => React.ReactNode;
};
export default function DatasheetRow({ component }: DatasheetRowProps): React.ReactNode {
	const Component = component || 'div';
	return <Component>row</Component>;
}
