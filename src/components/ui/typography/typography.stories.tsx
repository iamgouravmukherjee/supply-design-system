import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  Typography,
  VariantKey,
} from "@supply/components/ui/typography/typography";

const meta: Meta<typeof Typography> = {
  title: "Components/Typography",
  component: Typography,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "muted", "lead", "small", "blockquote", "code"],
    },
    children: {
      control: "text",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Typography>;

export const Default: Story = {
  args: {
    variant: "default",
    children: "This is default typography",
  },
};

export const Muted: Story = {
  args: {
    variant: "muted",
    children: "This is muted text",
  },
};

export const Lead: Story = {
  args: {
    variant: "lead",
    children: "This is lead text",
  },
};

export const Small: Story = {
  args: {
    variant: "small",
    children: "This is small text",
  },
};

export const Blockquote: Story = {
  args: {
    variant: "blockquote",
    children: "This is a blockquote",
  },
};

export const Code: Story = {
  args: {
    variant: "code",
    children: "console.log('Hello World')",
  },
};
