'use client'

import { useState } from 'react'
import Button from '@/components/ui/Button'

export default function ContactFormCard() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    setIsSubmitting(true)
    setTimeout(() => setIsSubmitting(false), 1000)
  }

  return (
    <div className="lux-panel p-8 md:p-10">
      <span className="lux-eyebrow text-primary">Send a Message</span>
      <h2 className="mt-6 font-display text-[2.3rem] leading-[0.95] tracking-[-0.05em] text-text-primary md:text-[3rem]">
        Request a Consultation
      </h2>
      <p className="mt-5 max-w-xl text-base leading-8 text-text-secondary">
        Fill out the form below and our team will respond within one business day with the next steps.
      </p>

      <form onSubmit={handleSubmit} className="mt-10 space-y-6">
        <div className="grid gap-5 md:grid-cols-2">
          <Field label="Name *">
            <input type="text" required className="field-input" placeholder="Your full name" />
          </Field>
          <Field label="Email *">
            <input type="email" required className="field-input" placeholder="you@example.com" />
          </Field>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          <Field label="Phone">
            <input type="tel" className="field-input" placeholder="+44 (0)XXX XXX XXXX" />
          </Field>
          <Field label="Project Type">
            <select className="field-input default:text-text-muted">
              <option value="">Select a service</option>
              <option value="electrical">Electrical</option>
              <option value="smart-home">Smart Home</option>
              <option value="security">Security</option>
              <option value="data-fibre">Data &amp; Fibre</option>
              <option value="it-support">IT Support</option>
            </select>
          </Field>
        </div>
        <Field label="Project Details">
          <textarea
            rows={7}
            className="field-input resize-none"
            placeholder="Tell us about the building, programme, systems, and any deadlines."
          />
        </Field>

        <Button type="submit" size="lg" isLoading={isSubmitting}>
          Send Message
        </Button>
      </form>
    </div>
  )
}

function Field({
  label,
  children,
}: {
  label: string
  children: React.ReactNode
}) {
  return (
    <label className="block">
      <span className="mb-3 block font-mono text-[11px] uppercase tracking-[0.2em] text-text-muted">
        {label}
      </span>
      <div className="field-shell px-5 py-4">{children}</div>
    </label>
  )
}
