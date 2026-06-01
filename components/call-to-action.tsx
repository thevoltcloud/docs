import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Card } from '@/components/ui/card'
import { LogoIcon } from '@/components/logo'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://voltcloud.ai'

export default function CallToAction() {
    return (
        <section className="bg-background py-12 md:py-24">
            <div className="mx-auto max-w-5xl px-6">
                <Card className="relative overflow-hidden p-8 shadow-lg md:px-32 md:py-20">
                    <LogoIcon
                        uniColor
                        aria-hidden
                        className="text-foreground/10 pointer-events-none absolute inset-0 size-full translate-y-3/4"
                    />
                    <div className="relative text-center">
                        <h2 className="text-foreground text-balance text-3xl font-semibold md:text-4xl">Ready to run frontier models in your metro?</h2>
                        <p className="text-muted-foreground mb-6 mt-4 text-balance">Get an API key, point your OpenAI client at Volt, and serve Llama 70B in-metro with zero egress.</p>

                        <div className="flex items-center justify-center gap-3">
                            <Button asChild>
                                <Link href={`${SITE_URL}/contact`}>Get an API key</Link>
                            </Button>
                            <Button
                                asChild
                                variant="outline">
                                <Link href="/docs/getting-started/quickstart">Read the quickstart</Link>
                            </Button>
                        </div>
                    </div>
                </Card>
            </div>
        </section>
    )
}