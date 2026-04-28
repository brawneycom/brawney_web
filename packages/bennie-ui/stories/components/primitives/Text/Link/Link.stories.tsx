import type { Meta, StoryObj } from "@storybook/react";
import { Link } from "@bennie-ui/text";

const meta: Meta<typeof Text> = {
  title: "Components/Primitives/Text/Link",
  component: Link,
  tags: ["autodocs"],
  parameters: {},
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Link>;

export const Primary: Story = {
  args: {
    children: "I am a link",
    onClick: () => {
      alert("i have an event attached");
    },
  },
};
