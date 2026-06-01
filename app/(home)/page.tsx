import Link from 'next/link';
import { ArrowRight, BookOpen, Code, Shield, Terminal } from 'lucide-react';
import { Button } from '@/components/ui/button';
import FeaturesSection from '@/components/features-2';
import CallToAction from '@/components/call-to-action';

const quickLinks = [
  {
    title: 'Quickstart',
    description: 'Install the SDK, get a key, make your first request in under five minutes.',
    href: '/docs/getting-started/quickstart',
    icon: Terminal,
  },
  {
    title: 'Concepts',
    description: 'Zero egress, the sovereign tier, tiers and catalogs — how Volt works.',
    href: '/docs/concepts/zero-egress',
    icon: Shield,
  },
  {
    title: 'Cookbook',
    description: 'Streaming chat, batch embeddings, sovereign isolation, and SDK quickstarts.',
    href: '/docs/cookbook/streaming-chat',
    icon: Code,
  },
  {
    title: 'API reference',
    description: 'The full control-plane API for Spark, Forge, and Vault.',
    href: '/docs',
    icon: BookOpen,
  },
];

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col">
      <section className="bg-background border-b py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="text-fd-primary text-sm font-semibold uppercase tracking-widest">
            Volt documentation
          </p>
          <h1 className="text-foreground mt-4 text-balance text-4xl font-semibold md:text-5xl">
            Run 70B models in your customer&apos;s metro
          </h1>
          <p className="text-muted-foreground mx-auto mt-5 max-w-xl text-balance text-lg">
            The Sovereign Inference Cloud. OpenAI-compatible, zero egress, served in-metro. Start
            here.
          </p>
          <div className="mt-8 flex items-center justify-center gap-3 max-sm:flex-col">
            <Button asChild>
              <Link href="/docs/getting-started/quickstart">
                Quickstart <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/docs">Browse the docs</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-background py-16">
        <div className="mx-auto grid max-w-5xl gap-4 px-6 sm:grid-cols-2">
          {quickLinks.map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className="bg-card/50 ring-border hover:bg-card group rounded-2xl border border-transparent p-6 shadow-sm ring-1 transition-colors"
            >
              <link.icon className="text-fd-primary size-6" />
              <h3 className="text-foreground mt-4 flex items-center gap-1 font-semibold">
                {link.title}
                <ArrowRight className="size-4 -translate-x-1 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
              </h3>
              <p className="text-muted-foreground mt-2 text-sm">{link.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <FeaturesSection />
      <CallToAction />
    </main>
  );
}
