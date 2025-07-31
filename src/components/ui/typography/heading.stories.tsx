// components/ui/typography/heading.stories.tsx
import type { Meta, StoryFn } from "@storybook/react";
import { Heading } from "./heading";

const meta: Meta<typeof Heading> = {
  title: "Typography/Heading",
  component: Heading,
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

const Template: StoryFn<typeof Heading> = (args) => <Heading {...args} />;

export const H1 = Template.bind({});
H1.args = {
  level: "1",
  children: "This is an H1 heading",
};
