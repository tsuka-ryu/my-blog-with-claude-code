import type { Preview } from '@storybook/react';
import '../src/app/globals.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    // Next.js Image最適化をStorybookでも使えるようにするよ〜♪
    nextjs: {
      appDirectory: true,
    },
  },
};

export default preview;