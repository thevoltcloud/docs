import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { gitConfig } from './shared';
import { Logo } from '@/components/logo';

// Brand domain is voltcloud.ai. Base URLs are env-overridable so the interim
// deploy can point back at the live website/status host (e.g. volt.cuemby.cloud)
// without a code change — set NEXT_PUBLIC_SITE_URL / NEXT_PUBLIC_STATUS_URL in
// the deployment environment.
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://voltcloud.ai';
// Self-hosted status page lives at /status on the marketing site.
const STATUS_URL = process.env.NEXT_PUBLIC_STATUS_URL ?? `${SITE_URL}/status`;

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      // Same monochrome bolt as the marketing site header (Logo uniColor).
      // Logo returns to docs home, not the marketing site, so it stays same-tab.
      title: <Logo uniColor />,
      url: '/',
    },
    githubUrl: `https://github.com/${gitConfig.user}`,
    // external: false keeps these same-tab — Fumadocs otherwise opens external
    // URLs in a new tab, which piles up tabs when bouncing to the site.
    links: [
      {
        text: 'Status',
        url: STATUS_URL,
        external: false,
      },
      {
        text: 'Website',
        url: SITE_URL,
        external: false,
      },
      {
        type: 'button',
        text: 'Get an API key',
        url: `${SITE_URL}/contact`,
        external: false,
      },
    ],
  };
}
