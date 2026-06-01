import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { gitConfig } from './shared';
import { Logo } from '@/components/logo';

// Brand domain is voltcloud.ai. Base URLs are env-overridable so the interim
// deploy can point back at the live website/status host (e.g. volt.cuemby.cloud)
// without a code change — set NEXT_PUBLIC_SITE_URL / NEXT_PUBLIC_STATUS_URL in
// the deployment environment.
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://voltcloud.ai';
const STATUS_URL = process.env.NEXT_PUBLIC_STATUS_URL ?? 'https://status.voltcloud.ai';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      // Same monochrome bolt as the marketing site header (Logo uniColor).
      title: <Logo uniColor />,
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
