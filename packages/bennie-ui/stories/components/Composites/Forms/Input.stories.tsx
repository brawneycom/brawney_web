import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "@bennie-ui/inputs";

const meta: Meta<typeof Input> = {
  title: "Components/Composites/Forms/Input",
  component: Input,
  tags: ["autodocs"],
  parameters: {},
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Primary: Story = {
  args: {
    colors: { text: { color: "gray" } },
  },
};
