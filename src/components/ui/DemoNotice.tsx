import { Info } from 'lucide-react'

/** Small, honest label for sample/demo content. */
export default function DemoNotice({ children }: { children: string }) {
  return (
    <p className="mx-auto mt-6 flex w-fit max-w-full items-start gap-2 rounded-lg border border-line bg-gold/5 px-3 py-2 text-xs text-muted sm:items-center">
      <Info className="mt-0.5 size-3.5 shrink-0 text-accent sm:mt-0" aria-hidden="true" />
      <span>{children}</span>
    </p>
  )
}
