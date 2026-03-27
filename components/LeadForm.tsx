'use client'

import { useState } from 'react'

export default function LeadForm() {
  const [form, setForm] = useState({
    name: '',
    company: '',
    dates: '',
    pax: '',
    halal: 'yes',
    notes: '',
  })
  const [submitted, setSubmitted] = useState(false)

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const msg = [
      `Hello, I'd like to request a Japan travel proposal.`,
      ``,
      `Name: ${form.name}`,
      `Agency: ${form.company}`,
      `Travel Dates: ${form.dates}`,
      `Pax: ${form.pax}`,
      `Halal Required: ${form.halal === 'yes' ? 'Yes' : 'No'}`,
      form.notes ? `Notes: ${form.notes}` : '',
    ].filter(Boolean).join('\n')

    const url = `https://wa.me/971509509781?text=${encodeURIComponent(msg)}`
    window.open(url, '_blank', 'noopener')
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="text-center py-10">
        <div className="w-12 h-12 border border-gold/40 flex items-center justify-center mx-auto mb-4">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="#C09240" strokeWidth="2">
            <path d="M4 10.5l4 4 8-8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <p className="text-[14px] font-semibold text-navy mb-1">WhatsApp is opening.</p>
        <p className="text-[13px] text-muted">We'll respond within the same business day (UAE time).</p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-5 text-[11px] tracking-[0.12em] uppercase text-gold border-b border-gold/30 hover:border-gold transition-colors duration-200"
        >
          Send another enquiry
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-4">
      <div className="flex flex-col gap-1.5">
        <label className="text-[10px] tracking-[0.14em] uppercase text-muted">Your Name *</label>
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          required
          placeholder="Ahmad Al-Rashidi"
          className="border border-black/10 focus:border-gold/50 outline-none px-4 py-3 text-[13px] text-navy placeholder:text-black/20 bg-white transition-colors duration-200"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="text-[10px] tracking-[0.14em] uppercase text-muted">Agency / Company *</label>
        <input
          name="company"
          value={form.company}
          onChange={handleChange}
          required
          placeholder="Arabian Horizons Travel"
          className="border border-black/10 focus:border-gold/50 outline-none px-4 py-3 text-[13px] text-navy placeholder:text-black/20 bg-white transition-colors duration-200"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="text-[10px] tracking-[0.14em] uppercase text-muted">Travel Dates *</label>
        <input
          name="dates"
          value={form.dates}
          onChange={handleChange}
          required
          placeholder="e.g. April 10–20, 2025"
          className="border border-black/10 focus:border-gold/50 outline-none px-4 py-3 text-[13px] text-navy placeholder:text-black/20 bg-white transition-colors duration-200"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="text-[10px] tracking-[0.14em] uppercase text-muted">Number of Pax *</label>
        <input
          name="pax"
          value={form.pax}
          onChange={handleChange}
          required
          placeholder="e.g. 4 adults, 2 children"
          className="border border-black/10 focus:border-gold/50 outline-none px-4 py-3 text-[13px] text-navy placeholder:text-black/20 bg-white transition-colors duration-200"
        />
      </div>

      <div className="flex flex-col gap-1.5 md:col-span-2">
        <label className="text-[10px] tracking-[0.14em] uppercase text-muted">Halal Dining Required?</label>
        <div className="flex gap-3">
          {[
            { value: 'yes', label: 'Yes — halal certified' },
            { value: 'no', label: 'No strict requirement' },
          ].map((opt) => (
            <label
              key={opt.value}
              className={`flex-1 flex items-center gap-3 border px-4 py-3 cursor-pointer transition-colors duration-200 ${
                form.halal === opt.value
                  ? 'border-gold/50 bg-gold/5 text-navy'
                  : 'border-black/10 text-muted hover:border-gold/25'
              }`}
            >
              <input
                type="radio"
                name="halal"
                value={opt.value}
                checked={form.halal === opt.value}
                onChange={handleChange}
                className="accent-[#C09240]"
              />
              <span className="text-[12px] tracking-wide">{opt.label}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-1.5 md:col-span-2">
        <label className="text-[10px] tracking-[0.14em] uppercase text-muted">Additional Notes</label>
        <textarea
          name="notes"
          value={form.notes}
          onChange={handleChange}
          rows={3}
          placeholder="Budget range, destinations, special requirements..."
          className="border border-black/10 focus:border-gold/50 outline-none px-4 py-3 text-[13px] text-navy placeholder:text-black/20 bg-white resize-none transition-colors duration-200"
        />
      </div>

      <div className="md:col-span-2 flex flex-col sm:flex-row gap-3 items-start sm:items-center">
        <button
          type="submit"
          className="inline-flex items-center gap-2.5 bg-[#25D366] hover:bg-[#1cb956] text-white text-[12px] font-medium tracking-[0.08em] uppercase px-7 py-4 transition-colors duration-200"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          Request Proposal via WhatsApp
        </button>
        <p className="text-[11px] text-muted leading-5">
          We respond within 24 hours.<br />UAE business days only.
        </p>
      </div>
    </form>
  )
}
