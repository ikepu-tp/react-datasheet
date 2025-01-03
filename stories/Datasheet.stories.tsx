import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
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
	args: {},
};
function Datasheet(): React.ReactNode {
	return (
		<DatasheetProvider>
			<DatasheetCell />
		</DatasheetProvider>
	);
}
