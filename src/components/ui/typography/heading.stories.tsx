// components/ui/typography/heading.stories.tsx
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Heading } from "./heading";

const meta: Meta<typeof Heading> = {
  title: "Typography/Heading",
  component: Heading,
  tags: ["autodocs"],
  argTypes: {
    level: {
      control: {
        type: "select",
      },
      options: ["1", "2", "3", "4", "5", "6"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Heading>;

export const Default: Story = {
  args: {
    children: "This is H1 Heading",
  },
};

export const H2: Story = {
  args: {
    level: "2",
    children: "This is H2 Heading",
  },
};
