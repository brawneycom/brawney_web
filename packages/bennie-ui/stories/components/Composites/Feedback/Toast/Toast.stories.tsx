import type { Meta, StoryObj } from "@storybook/react";
import { Toast } from "@bennie-ui/toast";

const meta: Meta<typeof Toast> = {
  title: "Components/Composites/Feedback/Toast",
  component: Toast,
  tags: ["autodocs"],
  parameters: {},
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Toast>;

export const Primary: Story = {
  args: {
    children: "click me",
    action: "primary",
    onClick: () => {
      alert("hello there");
    },
  },
};
