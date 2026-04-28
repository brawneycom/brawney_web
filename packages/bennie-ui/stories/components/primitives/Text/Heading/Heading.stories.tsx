import type { Meta, StoryObj } from "@storybook/react";
import { Heading } from "@bennie-ui/text";

const meta: Meta<typeof Text> = {
  title: "Components/Primitives/Text/Heading",
  component: Heading,
  tags: ["autodocs"],
  parameters: {},
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Heading>;

export const Primary: Story = {
  args: {
    children: "I am a Heading",
  },
};
