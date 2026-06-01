import { Terminal } from 'lucide-react'

export const MessageIllustration = () => (
    <div aria-hidden>
        <div className="flex items-center gap-2">
            <Terminal className="text-primary size-4" />
            <span className="text-sm">python</span>
        </div>

        <div className="bg-illustration ring-border-illustration mt-2 w-fit rounded-2xl rounded-tl border border-transparent p-4 font-mono text-xs leading-relaxed shadow shadow-black/10 ring-1">
            <div>client = OpenAI(</div>
            <div className="pl-4">
                base_url=<span className="text-primary">&quot;https://api.voltcloud.ai/v1&quot;</span>,
            </div>
            <div className="pl-4">
                api_key=<span className="text-primary">VOLT_KEY</span>,
            </div>
            <div>)</div>
        </div>
    </div>
)
