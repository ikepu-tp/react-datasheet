import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { DatasheetData } from '../src/types';
import DatasheetSheet from './../src/DatasheetSheet';
import DatasheetProvider, { DatasheetProviderProps } from './../src/DatashetProvider';
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
		theme: {},
		style: '.ikpeuTp-reactDatasheet__wrapper div[style] {border: 1px solid black;}',
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
				<>
					<th>Row Header 0</th>
					<th>Row Header 1</th>
					<th>Row Header 2</th>
				</>
			),
			columnHeaderComponent: 'Colunm Header',
		},
	},
};

function Datasheet(props: DatasheetProviderProps): React.ReactNode {
	return (
		<div className="datasheet-story">
			<DatasheetProvider {...props}>
				<DatasheetSheet />
			</DatasheetProvider>
		</div>
	);
}
