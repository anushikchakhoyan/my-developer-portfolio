import type { Meta, StoryObj } from "@storybook/react";
import { expect, fn, userEvent, within } from "@storybook/test";
import { FiArrowUpRight } from "react-icons/fi";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
    title: "Primitives/Button",
    component: Button,
    tags: ["autodocs"],
    args: {
        onClick: fn()
    }
};

export default meta;
type Story = StoryObj<typeof Button>;

export const ThemedObsidian: Story = {
    args: {
        children: "Hire Me / Inquire",
        variant: "themed",
        size: "md",
        icon: <FiArrowUpRight size={15} />
    },
    play: async ({ canvasElement, args }) => {
        const canvas = within(canvasElement);
        const button = canvas.getByRole("button", { name: /hire me/i });
        await expect(button).toBeInTheDocument();
        await userEvent.click(button);
        await expect(args.onClick).toHaveBeenCalled();
    }
};

export const PrimaryRose: Story = {
    args: {
        children: "Schedule a Call",
        variant: "primary",
        size: "md",
        icon: <FiArrowUpRight size={15} />
    }
};