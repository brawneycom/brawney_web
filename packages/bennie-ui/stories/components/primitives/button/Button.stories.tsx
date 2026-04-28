import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "@bennie-ui/button";

const meta: Meta<typeof Button> = {
  title: "Components/Primitives/Button",
  component: Button,
  tags: ["autodocs"],
  parameters: {},
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Example: Story = {
  args: {
    action: "dark",
    children: "Content",
  },
};
