import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { DatasheetData } from '../src/types';
import DatasheetSheet from './../src/DatasheetSheet';
import DatasheetProvider, { DatasheetProviderProps } from './../src/DatashetProvider';

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

function Datasheet(props: DatasheetProviderProps): React.ReactNode {
	return (
		<DatasheetProvider {...props}>
			<DatasheetSheet />
		</DatasheetProvider>
	);
}
