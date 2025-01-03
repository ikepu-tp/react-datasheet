import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { DatasheetData } from '../src/DatasheetContext';
import DatasheetCell from './../src/DatasheetCell';
import DatasheetProvider from './../src/DatashetProvider';

const meta = {
	title: 'Components/Datasheet',
	component: Datasheet,
	tags: ['autodocs'],
	argTypes: {},
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
	args: { data: [['data at row 0, column 0']] },
};
function Datasheet({ data }: { data: DatasheetData }): React.ReactNode {
	return (
		<DatasheetProvider data={data}>
			<DatasheetCell row={0} column={0} />
		</DatasheetProvider>
	);
}
