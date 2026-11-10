import type { CSSProperties } from 'react';
import type { Decorator, Meta, StoryObj } from '@storybook/nextjs';
import { fn } from 'storybook/test';
import { Button } from './Button';
import type { ButtonSize, ButtonVariant } from './Button';

/* ------------------------------------------------------------------
   Theme tokens
   The button CSS relies on global design tokens. In the real app they
   come from your global stylesheet; here we mirror them so the stories
   render correctly in isolation. Replace the values with your own tokens
   (or delete the decorator if .storybook/preview already loads them).
------------------------------------------------------------------- */
const baseTokens = {
  '--radius-full': '9999px',
  '--brand-hue': '250',
  '--accent-hue': '320',
} as CSSProperties;

const themeTokens: Record<'light' | 'dark', CSSProperties> = {
  light: {
    ...baseTokens,
    '--color-primary': 'oklch(0.82 0.15 var(--brand-hue))',
    '--color-primary-glow': 'oklch(0.82 0.15 250 / 0.35)',
    '--color-accent': 'oklch(0.78 0.15 var(--accent-hue))',
    '--color-text': '#0d1217',
    '--color-surface': '#ffffff',
    '--color-border': 'rgba(0, 0, 0, 0.15)',
    background: '#f5f6f8',
  } as CSSProperties,
  dark: {
    ...baseTokens,
    '--color-primary': 'oklch(0.6 0.2 var(--brand-hue))',
    '--color-primary-glow': 'oklch(0.6 0.2 250 / 0.45)',
    '--color-accent': 'oklch(0.7 0.18 var(--accent-hue))',
    '--color-text': '#ffffff',
    '--color-surface': 'oklch(0.18 0.02 255)',
    '--color-border': 'rgba(255, 255, 255, 0.18)',
    background: 'oklch(0.13 0.015 255)',
  } as CSSProperties,
};

type ThemeName = keyof typeof themeTokens;

/** Wraps a story in a themed container. Use `parameters: { theme: 'dark' }` to switch. */
const withTheme: Decorator = (Story, context) => {
  const theme = (context.parameters.theme ?? 'light') as ThemeName;
  return (
    <div
      data-theme={theme}
      style={{
        ...themeTokens[theme],
        color: 'var(--color-text)',
        padding: '2rem',
        minHeight: '100%',
      }}
    >
      <Story />
    </div>
  );
};

/* ------------------------------------------------------------------
   Small helpers for the demo icons / layout
------------------------------------------------------------------- */
const PlusIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <path d="M12 5v14M5 12h14" />
  </svg>
);

const ArrowIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

const row: CSSProperties = { display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center' };
const column: CSSProperties = { display: 'flex', flexDirection: 'column', gap: '1.5rem' };
const label: CSSProperties = { fontSize: 12, opacity: 0.65, marginBottom: 8, textTransform: 'uppercase', letterSpacing: 1 };

const variants: ButtonVariant[] = ['primary', 'secondary', 'outline', 'themed'];
const sizes: ButtonSize[] = ['sm', 'md', 'lg'];

/* ------------------------------------------------------------------
   Meta
------------------------------------------------------------------- */
const meta = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  decorators: [withTheme],
  parameters: {
    layout: 'fullscreen',
    theme: 'light',
    docs: {
      description: {
        component:
          'Pill-shaped button with a gradient ring on hover/focus. Supports four variants, three sizes and optional left/right icons. Forwards its ref and all native button attributes.',
      },
    },
  },
  argTypes: {
    variant: {
      control: 'inline-radio',
      options: variants,
      description: 'Visual style',
      table: { defaultValue: { summary: 'primary' } },
    },
    size: {
      control: 'inline-radio',
      options: sizes,
      description: 'Padding and font size',
      table: { defaultValue: { summary: 'md' } },
    },
    leftIcon: { control: false, description: 'Icon before the label' },
    rightIcon: { control: false, description: 'Icon after the label' },
    disabled: { control: 'boolean' },
    children: { control: 'text', description: 'Button label' },
    onClick: { action: 'clicked' },
  },
  args: {
    children: 'Button',
    variant: 'primary',
    size: 'md',
    disabled: false,
    onClick: fn(),
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

/* ------------------------------------------------------------------
   Stories
------------------------------------------------------------------- */

/** Use the controls panel to explore every prop. */
export const Playground: Story = {};

export const Primary: Story = { args: { variant: 'primary', children: 'Get started' } };
export const Secondary: Story = { args: { variant: 'secondary', children: 'Learn more' } };
export const Outline: Story = { args: { variant: 'outline', children: 'Cancel' } };
export const Themed: Story = { args: { variant: 'themed', children: 'Themed' } };

/** All variants at a glance. */
export const Variants: Story = {
  parameters: { controls: { disable: true } },
  render: (args) => (
    <div style={row}>
      {variants.map((variant) => (
        <Button key={variant} {...args} variant={variant}>
          {variant}
        </Button>
      ))}
    </div>
  ),
};

/** Every variant in every size. */
export const Sizes: Story = {
  parameters: { controls: { disable: true } },
  render: (args) => (
    <div style={column}>
      {variants.map((variant) => (
        <div key={variant}>
          <div style={label}>{variant}</div>
          <div style={row}>
            {sizes.map((size) => (
              <Button key={size} {...args} variant={variant} size={size}>
                {size}
              </Button>
            ))}
          </div>
        </div>
      ))}
    </div>
  ),
};

export const WithLeftIcon: Story = {
  args: { children: 'Add item', leftIcon: <PlusIcon /> },
};

export const WithRightIcon: Story = {
  args: { children: 'Continue', rightIcon: <ArrowIcon /> },
};

export const WithBothIcons: Story = {
  args: { children: 'Create & continue', leftIcon: <PlusIcon />, rightIcon: <ArrowIcon /> },
};

/** Icons across all variants. */
export const IconsAcrossVariants: Story = {
  parameters: { controls: { disable: true } },
  render: (args) => (
    <div style={row}>
      {variants.map((variant) => (
        <Button key={variant} {...args} variant={variant} leftIcon={<PlusIcon />} rightIcon={<ArrowIcon />}>
          {variant}
        </Button>
      ))}
    </div>
  ),
};

export const Disabled: Story = {
  args: { children: 'Disabled', disabled: true },
};

/** Disabled state for each variant. */
export const DisabledVariants: Story = {
  parameters: { controls: { disable: true } },
  render: (args) => (
    <div style={row}>
      {variants.map((variant) => (
        <Button key={variant} {...args} variant={variant} disabled>
          {variant}
        </Button>
      ))}
    </div>
  ),
};

/** The `themed` variant adapts to `[data-theme]`; compare light and dark side by side. */
export const ThemedLightAndDark: Story = {
  parameters: { controls: { disable: true } },
  render: (args) => (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0 }}>
      {(['light', 'dark'] as const).map((theme) => (
        <div
          key={theme}
          data-theme={theme}
          style={{ ...themeTokens[theme], color: 'var(--color-text)', padding: '2rem' }}
        >
          <div style={label}>{theme}</div>
          <div style={row}>
            {variants.map((variant) => (
              <Button key={variant} {...args} variant={variant}>
                {variant}
              </Button>
            ))}
          </div>
        </div>
      ))}
    </div>
  ),
};

/** Everything on the dark theme. */
export const DarkTheme: Story = {
  parameters: { theme: 'dark', controls: { disable: true } },
  render: (args) => (
    <div style={column}>
      <div style={row}>
        {variants.map((variant) => (
          <Button key={variant} {...args} variant={variant}>
            {variant}
          </Button>
        ))}
      </div>
      <div style={row}>
        {variants.map((variant) => (
          <Button key={variant} {...args} variant={variant} leftIcon={<PlusIcon />}>
            {variant}
          </Button>
        ))}
      </div>
    </div>
  ),
};

/** Renders as a long label to verify `white-space: nowrap` and padding. */
export const LongLabel: Story = {
  args: { children: 'A considerably longer button label', rightIcon: <ArrowIcon /> },
};

/** Click and keyboard (Tab / Enter / Space) behaviour; open the Interactions panel. */
export const Interactive: Story = {
  args: { children: 'Click me' },
  play: async ({ canvasElement, args }) => {
    const { within, userEvent, expect } = await import('storybook/test');
    const button = within(canvasElement).getByRole('button', { name: /click me/i });

    await userEvent.tab();
    await expect(button).toHaveFocus();

    await userEvent.keyboard('{Enter}');
    await userEvent.click(button);
    await expect(args.onClick).toHaveBeenCalledTimes(2);
  },
};