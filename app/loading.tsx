import Container from '@/components/ui/Container'

export default function GlobalLoading() {
  return (
    <section className="min-h-[60vh] py-24 md:py-28">
      <Container>
        <div className="mx-auto max-w-5xl space-y-8">
          <div className="h-3 w-40 animate-pulse rounded-full bg-primary/20" />
          <div className="space-y-4">
            <div className="h-16 w-full max-w-3xl animate-pulse rounded-[1.75rem] bg-white/[0.06] shadow-panel" />
            <div className="h-16 w-full max-w-2xl animate-pulse rounded-[1.75rem] bg-white/[0.04] shadow-panel" />
          </div>
          <div className="h-6 w-full max-w-xl animate-pulse rounded-full bg-border/60" />
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {Array.from({ length: 3 }).map((_, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-[1.9rem] border border-border/70 bg-bg-secondary/80 shadow-panel"
              >
                <div className="aspect-[16/11] animate-pulse bg-[linear-gradient(135deg,rgba(200,171,141,0.22),rgba(124,38,51,0.12))]" />
                <div className="space-y-4 p-6">
                  <div className="h-4 w-24 animate-pulse rounded-full bg-primary/12" />
                  <div className="h-8 w-3/4 animate-pulse rounded-full bg-border/60" />
                  <div className="h-4 w-full animate-pulse rounded-full bg-border/50" />
                  <div className="h-4 w-2/3 animate-pulse rounded-full bg-border/40" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
