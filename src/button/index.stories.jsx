import Button from "./index";

export default {
  title: "Button",
  component: Button,
};

export const Default = {
  args: {
    children: "Button",
  },
};

export const Disabled = {
  args: {
    children: "Button",
    disabled: true,
  },
};
