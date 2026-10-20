import type { Meta, StoryObj } from "@storybook/react";
import { expect, userEvent, within } from "@storybook/test";
import { TestimonialSlider } from "./TestimonialSlider";
import { TESTIMONIALS_DATA } from "@/lib/data";

const meta: Meta<typeof TestimonialSlider> = {
    title: "Organisms/TestimonialSlider",
    component: TestimonialSlider,
    tags: ["autodocs"]
};

export default meta;
type Story = StoryObj<typeof TestimonialSlider>;

export const DefaultView: Story = {
    args: {
        testimonials: TESTIMONIALS_DATA
    },
    play: async ({ canvasElement }: any) => {
        const canvas = within(canvasElement);

        // Initial author check
        const firstAuthor = canvas.getByText(/Joseph Ben Zvi/i);
        await expect(firstAuthor).toBeInTheDocument();

        // Click dot 2 to advance slide
        const dots = canvas.getAllByRole("button", { name: /Go to slide/i });
        await userEvent.click(dots[1]);

        // Second author check
        const secondAuthor = await canvas.findByText(/Yordan Petrov/i);
        await expect(secondAuthor).toBeInTheDocument();
    }
};