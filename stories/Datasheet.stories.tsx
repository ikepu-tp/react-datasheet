import type { Meta, StoryObj } from '@storybook/react';
import React, { PropsWithChildren } from 'react';
import DatasheetContext from '../src/DatasheetContext';
import { DatasheetData } from '../src/types';
import DatasheetProvider, { DatasheetProviderProps } from './../src/DatasheetProvider';
import DatasheetSheet from './../src/DatasheetSheet';
import './styles/datasheet.scss';

const meta = {
	title: 'Components/Datasheet',
	component: Datasheet,
	tags: ['autodocs'],
	argTypes: {},
} satisfies Meta<typeof Datasheet>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultData: DatasheetData = [
	['data at row 0, column 0', 'data at row 0, column 1'],
	['data at row 1, column 0', 'data at row 1, column 1'],
];

export const Normal: Story = {
	args: {
		data: defaultData,
		theme: {
			theme: 'table',
		},
		style: '.ikpeuTp-reactDatasheet__wrapper div[style] {border: 1px solid black;}',
		contentEditable: false,
	},
};

export const Flex: Story = {
	args: {
		data: defaultData,
		theme: {
			theme: 'flex',
		},
	},
};

export const Table: Story = {
	args: {
		data: defaultData,
		theme: {
			theme: 'table',
		},
	},
};

export const FlexWithHeaders: Story = {
	args: {
		data: defaultData,
		theme: {
			theme: 'flex',
			columnHeaderLeftAndRight: true,
			rowHeaderTopAndBottom: true,
		},
		headers: {
			rowHeaderComponent: (
				<>
					<div>Row Header 0</div>
					<div>Row Header 1</div>
					<div>Row Header 2</div>
				</>
			),
			columnHeaderComponent: 'Colunm Header',
		},
	},
};

export const TableWithHeaders: Story = {
	args: {
		data: defaultData,
		theme: {
			theme: 'table',
			columnHeaderLeftAndRight: true,
			rowHeaderTopAndBottom: true,
		},
		headers: {
			rowHeaderComponent: (
				<tr>
					<th>Row Header 0</th>
					<th>Row Header 1</th>
					<th>Row Header 2</th>
				</tr>
			),
			columnHeaderComponent: 'Colunm Header',
		},
	},
};

function Datasheet(props: DatasheetProviderProps): React.ReactNode {
	function updateData(newData, differences): void {
		console.log('data is updated', 'newData', newData, 'differences', differences);
	}
	return (
		<div className="datasheet-story">
			<DatasheetProvider updateData={updateData} {...props}>
				<DatasheetChild {...props} />
			</DatasheetProvider>
		</div>
	);
}
function DatasheetChild(props: DatasheetProviderProps & PropsWithChildren): React.ReactNode {
	const datasheet = React.useContext(DatasheetContext);

	React.useEffect(() => {
		datasheet.chnageContentEditable(props.contentEditable || false);
	}, [props.contentEditable]);
	return <DatasheetSheet />;
}
