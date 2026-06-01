import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { gitConfig } from './shared';

function VoltMark() {
  return (
    <span className="inline-flex items-center gap-2">
      <svg
        className="size-5"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <path
          d="M13.2 2 4 13.2a.6.6 0 0 0 .47.98H10l-1.1 7.2c-.1.66.74 1.03 1.16.5L20 10.8a.6.6 0 0 0-.47-.98H14l1.06-7.3c.1-.66-.74-1.02-1.16-.5Z"
          fill="url(#volt_doc_logo)"
        />
        <defs>
          <linearGradient id="volt_doc_logo" x1="4" y1="2" x2="20" y2="22" gradientUnits="userSpaceOnUse">
            <stop stopColor="#F7D000" />
            <stop offset="1" stopColor="#E63946" />
          </linearGradient>
        </defs>
      </svg>
      <span className="font-semibold">Volt</span>
    </span>
  );
}

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: <VoltMark />,
      url: 'https://volt.cloud',
    },
    githubUrl: `https://github.com/${gitConfig.user}`,
    links: [
      {
        text: 'Status',
        url: 'https://status.volt.cloud',
      },
      {
        text: 'Website',
        url: 'https://volt.cloud',
      },
      {
        type: 'button',
        text: 'Get an API key',
        url: 'https://volt.cloud/contact',
      },
    ],
  };
}
