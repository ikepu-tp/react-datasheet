import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { DatasheetData } from '../src/DatasheetContext';
import DatasheetSheet from './../src/DatasheetSheet';
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
	args: {},
};
function Datasheet({
	data = [
		['data at row 0, column 0', 'data at row 0, column 1'],
		['data at row 1, column 0', 'data at row 1, column 1'],
	],
}: {
	data?: DatasheetData;
}): React.ReactNode {
	return (
		<DatasheetProvider data={data}>
			<DatasheetSheet />
		</DatasheetProvider>
	);
}
