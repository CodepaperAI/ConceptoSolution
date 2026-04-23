'use client'

import { useRef, useState } from 'react'
import Button from '@/components/ui/Button'

type FormStatus = 'idle' | 'submitting' | 'success' | 'error'

export default function ContactFormCard() {
  const [status, setStatus] = useState<FormStatus>('idle')
  const [errors, setErrors] = useState<Record<string, string>>({})
  const formRef = useRef<HTMLFormElement>(null)

  function validate(form: HTMLFormElement): Record<string, string> {
    const data = new FormData(form)
    const errs: Record<string, string> = {}
    if (!data.get('name')?.toString().trim()) errs.name = 'Name is required.'
    const email = data.get('email')?.toString().trim() ?? ''
    if (!email) errs.email = 'Email is required.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errs.email = 'Enter a valid email address.'
    return errs
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    const form = formRef.current!
    const errs = validate(form)
    setErrors(errs)
    if (Object.keys(errs).length > 0) return

    setStatus('submitting')
    try {
      const data = new FormData(form)
      const body = Object.fromEntries(data.entries())
      const mailtoSubject = encodeURIComponent(`Website Enquiry from ${body.name}`)
      const mailtoBody = encodeURIComponent(
        `Name: ${body.name}\nEmail: ${body.email}\nPhone: ${body.phone || 'Not provided'}\nService: ${body.service || 'Not specified'}\n\nDetails:\n${body.details || 'None'}`
      )
      window.location.href = `mailto:info@conceptosolutions.co.uk?subject=${mailtoSubject}&body=${mailtoBody}`
      setStatus('success')
      form.reset()
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="lux-panel p-8 md:p-10">
        <span className="lux-eyebrow text-primary">Thank You</span>
        <h2 className="mt-6 font-sans font-semibold text-[2.3rem] leading-[0.95] tracking-[-0.05em] text-text-primary md:text-[3rem]">
          Enquiry Sent
        </h2>
        <p className="mt-5 max-w-xl text-base leading-8 text-text-secondary">
          Your email client should have opened with the enquiry details. If it didn&apos;t, you can email us directly at{' '}
          <a href="mailto:info@conceptosolutions.co.uk" className="font-semibold text-primary underline underline-offset-4">
            info@conceptosolutions.co.uk
          </a>.
        </p>
        <button
          type="button"
          onClick={() => setStatus('idle')}
          className="mt-8 text-sm font-semibold uppercase tracking-[0.16em] text-primary underline underline-offset-4"
        >
          Send another enquiry
        </button>
      </div>
    )
  }

  return (
    <div className="lux-panel p-8 md:p-10">
      <span className="lux-eyebrow text-primary">Get a Free Quote</span>
      <h2 className="mt-6 font-sans font-semibold text-[2.3rem] leading-[0.95] tracking-[-0.05em] text-text-primary md:text-[3rem]">
        Book a Survey
      </h2>
      <p className="mt-5 max-w-xl text-base leading-8 text-text-secondary">
        Tell us whether you need electrical work, smart home automation or IT support. We will review your enquiry and come back with the right next step.
      </p>

      {status === 'error' && (
        <div role="alert" className="mt-6 rounded-2xl border border-red-200 bg-red-50 px-5 py-4 text-sm text-red-700">
          Something went wrong. Please try again or email us directly at info@conceptosolutions.co.uk.
        </div>
      )}

      <form ref={formRef} onSubmit={handleSubmit} className="mt-10 space-y-6" noValidate>
        <div className="grid gap-5 md:grid-cols-2">
          <Field label="Name *" error={errors.name}>
            <input type="text" name="name" required className="field-input" placeholder="Your name" aria-invalid={!!errors.name} />
          </Field>
          <Field label="Email *" error={errors.email}>
            <input type="email" name="email" required className="field-input" placeholder="name@company.com" aria-invalid={!!errors.email} />
          </Field>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          <Field label="Phone">
            <input type="tel" name="phone" className="field-input" placeholder="0845 388 8348" />
          </Field>
          <Field label="Service Needed">
            <select name="service" className="field-input default:text-text-muted">
              <option value="">Choose a service</option>
              <option value="electrical">Electrical</option>
              <option value="smart-home">Smart Home Solutions</option>
              <option value="security">Security &amp; Entry</option>
              <option value="data-fibre">Data &amp; Networking</option>
              <option value="it-support">IT Support</option>
            </select>
          </Field>
        </div>
        <Field label="Project Details">
          <textarea
            name="details"
            rows={7}
            className="field-input resize-none"
            placeholder="Share your address, project stage and the services you need."
          />
        </Field>

        <Button type="submit" size="lg" isLoading={status === 'submitting'} aria-busy={status === 'submitting'}>
          Send Enquiry
        </Button>
      </form>
    </div>
  )
}

function Field({
  label,
  error,
  children,
}: {
  label: string
  error?: string
  children: React.ReactNode
}) {
  return (
    <label className="block">
      <span className="mb-3 block font-mono text-xs uppercase tracking-[0.2em] text-text-secondary">
        {label}
      </span>
      <div className={`field-shell px-5 py-4 ${error ? 'border-red-400' : ''}`}>{children}</div>
      {error && (
        <p role="alert" className="mt-2 text-sm text-red-600">{error}</p>
      )}
    </label>
  )
}
