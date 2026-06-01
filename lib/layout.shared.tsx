import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { gitConfig } from './shared';

// Brand domain is voltcloud.ai. Base URLs are env-overridable so the interim
// deploy can point back at the live website/status host (e.g. volt.cuemby.cloud)
// without a code change — set NEXT_PUBLIC_SITE_URL / NEXT_PUBLIC_STATUS_URL in
// the deployment environment.
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://voltcloud.ai';
const STATUS_URL = process.env.NEXT_PUBLIC_STATUS_URL ?? 'https://status.voltcloud.ai';

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
      url: SITE_URL,
    },
    githubUrl: `https://github.com/${gitConfig.user}`,
    links: [
      {
        text: 'Status',
        url: STATUS_URL,
      },
      {
        text: 'Website',
        url: SITE_URL,
      },
      {
        type: 'button',
        text: 'Get an API key',
        url: `${SITE_URL}/contact`,
      },
    ],
  };
}
