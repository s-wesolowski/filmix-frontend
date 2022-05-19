// Button.stories.js|jsx

import React from "react";

import Button from "./Button";

export default {
  title: "Button",
  component: Button,
};

const ButtonStory = ({ data, ...args }) => <Button {...args}></Button>;
export const Primary = ButtonStory.bind({});
Primary.args = {
  transparent: true,
  type: "button",
  children: "Click!",
};
