import type { Meta, StoryObj } from "@storybook/react";
import { Section } from "@bennie-ui/section";

const meta: Meta<typeof Section> = {
  title: "Components/Primitives/Section",
  component: Section,
  tags: ["autodocs"],
  parameters: {},
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Section>;

export const Example: Story = {
  args: {
    padding: { all: "2" },
    border: {
      style: "solid",
      width: { all: "1" },
    },
    onClick: () => {
      alert("click");
    },
    children: "Click me",
  },
};
