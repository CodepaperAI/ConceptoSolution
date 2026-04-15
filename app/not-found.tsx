import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import Container from '@/components/ui/Container'

export default function NotFoundPage() {
  return (
    <section className="flex min-h-[80vh] items-center">
      <Container>
        <div className="mx-auto max-w-xl text-center">
          <span className="mb-8 block font-mono text-[6rem] font-bold leading-[1] text-primary md:text-[8rem] lg:text-[10rem]">404</span>
          <h1 className="mb-6 text-[2.5rem] font-bold tracking-tight text-text-primary md:text-[3rem] lg:text-[3.5rem]">Page Not Found</h1>
          <p className="mb-12 text-xl text-text-secondary">The page may have moved. Return to Concepto Solutions to explore smart home, electrical and IT services.</p>
          <Link href="/" className="inline-flex items-center gap-3 rounded-full border border-primary bg-primary px-8 py-4 text-sm font-semibold uppercase tracking-[0.16em] text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-hover">
            <ArrowLeft size={18} />Back to Home
          </Link>
        </div>
      </Container>
    </section>
  )
}
