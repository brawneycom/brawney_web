import type { Meta, StoryObj } from "@storybook/react";
import { Icon } from "@bennie-ui/icons";

const meta: Meta<typeof Icon> = {
  title: "Components/Primitives/Icon/Icon",
  component: Icon,
  tags: ["autodocs"],

  parameters: {},
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Icon>;

export const Primary: Story = {
  args: {
    type: "solid",
    figure: "BeakerIcon",
    colors: { text: { color: "gray" } },
  },
};
