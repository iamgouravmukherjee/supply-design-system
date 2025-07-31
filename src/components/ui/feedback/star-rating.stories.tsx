import type { Meta, StoryObj } from "@storybook/react-vite";
import { StarRating } from "./star-rating";

const meta: Meta<typeof StarRating> = {
  title: "Feedback/StarRating",
  component: StarRating,
  tags: ["autodocs"],
  argTypes: {
    max: { control: { type: "number", min: 1, max: 10 } },
    value: { control: { type: "number", min: 0, max: 10 } },
    defaultValue: { control: { type: "number", min: 0, max: 10 } },
    size: { control: { type: "number", min: 10, max: 48 } },
    readOnly: { control: "boolean" },
  },
};
export default meta;

type Story = StoryObj<typeof StarRating>;

export const Default: Story = {
  args: {
    max: 5,
    defaultValue: 3,
  },
};

export const Controlled: Story = {
  args: {
    max: 5,
    value: 4,
  },
};

export const ReadOnly: Story = {
  args: {
    max: 5,
    value: 2,
    readOnly: true,
  },
};

export const CustomSize: Story = {
  args: {
    max: 5,
    defaultValue: 4,
    size: 36,
  },
};
