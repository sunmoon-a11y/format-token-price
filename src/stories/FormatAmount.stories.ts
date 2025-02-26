import type { Meta, StoryObj } from "@storybook/react";
import FormatTokenPrice from "../components";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Example/FormatTokenPrice",
  component: FormatTokenPrice,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  args: {},
} satisfies Meta<typeof FormatTokenPrice>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Demo7: Story = {
  args: {
    amount: '0.00003574111111000001073793',
    showLess:true,
    decimals: 8
  },
};
