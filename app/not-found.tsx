import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import Container from '@/components/ui/Container'

export default function NotFoundPage() {
  return (
    <section className="flex min-h-[80vh] items-center">
      <Container>
        <div className="mx-auto max-w-xl text-center">
          <span className="mb-8 block font-mono text-[6rem] font-bold leading-[1] text-accent md:text-[8rem] lg:text-[10rem]">404</span>
          <h1 className="mb-6 text-[2.5rem] font-bold tracking-tight text-white-primary md:text-[3rem] lg:text-[3.5rem]">Page Not Found</h1>
          <p className="mb-12 text-xl text-white-muted">The page you are looking for does not exist or has been moved. Let us get you back on track.</p>
          <Link href="/" className="inline-flex items-center gap-3 rounded-sm border-2 border-white-subtle px-8 py-4 text-lg font-semibold text-white-primary transition-colors hover:bg-white-subtle hover:text-charcoal-primary">
            <ArrowLeft size={18} />Return Home
          </Link>
        </div>
      </Container>
    </section>
  )
}
