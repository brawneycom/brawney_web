import type { Meta, StoryObj } from "@storybook/react";
import { Text } from "@bennie-ui/text";

const meta: Meta<typeof Text> = {
  title: "Components/Primitives/Text/Text",
  component: Text,
  tags: ["autodocs"],
  parameters: {},
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Primary: Story = {
  args: {
    children: "I am a text",
    colors: { text: { color: "gray" } },
  },
};
