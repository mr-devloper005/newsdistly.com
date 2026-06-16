'use client'

import { CalendarClock, FileText, Mail, Megaphone, RadioTower } from 'lucide-react'
import { pagesContent } from '@/editable/content/pages.content'
import { EditableContactLeadForm } from '@/editable/components/EditableContactLeadForm'
import { EditableSiteShell } from '@/editable/shell/EditableSiteShell'

const desks = [
  { icon: FileText, title: 'Press release planning', body: 'Align messaging, headlines, supporting assets, and newsroom timing before a campaign goes live.' },
  { icon: RadioTower, title: 'Media distribution support', body: 'Discuss syndication goals, publisher fit, outreach pacing, and visibility targets for active campaigns.' },
  { icon: Megaphone, title: 'Brand amplification', body: 'Coordinate launches, announcements, and partner stories with a stronger public-facing presentation.' },
  { icon: CalendarClock, title: 'Launch scheduling', body: 'Map campaign windows, approvals, and follow-up distribution so releases land at the right moment.' },
] as const

export default function ContactPage() {
  return (
    <EditableSiteShell>
      <main className="bg-[var(--slot4-page-bg)] text-[var(--slot4-page-text)]">
        <section className="border-b border-black/10">
          <div className="mx-auto max-w-[var(--editable-container)] px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
            <div className="editable-panel grid overflow-hidden lg:grid-cols-[0.92fr_1.08fr]">
              <div className="bg-[var(--slot4-dark-bg)] p-7 text-white sm:p-10">
                <p className="text-xs font-black uppercase tracking-[0.28em] text-[var(--slot4-accent)]">{pagesContent.contact.eyebrow}</p>
                <h1 className="mt-5 max-w-4xl text-5xl font-black leading-[0.9] tracking-[-0.07em] sm:text-7xl">{pagesContent.contact.title}</h1>
                <p className="mt-6 max-w-2xl text-base font-semibold leading-8 text-white/72">{pagesContent.contact.description}</p>
                <div className="mt-8 inline-flex items-center gap-2 editable-chip border-white/15 bg-white/8 text-white">
                  <Mail className="h-4 w-4" /> Strategy, distribution, and campaign support
                </div>
              </div>
              <div className="grid gap-px bg-black/10 md:grid-cols-2">
                {desks.map((desk, index) => (
                  <div key={desk.title} className="bg-white p-6 sm:p-7">
                    <div className="flex items-center justify-between gap-3">
                      <desk.icon className="h-5 w-5 text-[var(--slot4-accent)]" />
                      <span className="text-xs font-black text-black/35">0{index + 1}</span>
                    </div>
                    <h2 className="mt-5 text-2xl font-black tracking-[-0.04em]">{desk.title}</h2>
                    <p className="mt-3 text-sm leading-7 text-black/65">{desk.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[var(--editable-container)] px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="grid gap-8 lg:grid-cols-[0.84fr_1.16fr]">
            <aside className="editable-panel p-7 sm:p-9">
              <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[var(--slot4-accent)]">What to include</p>
              <div className="mt-6 grid gap-4">
                {[
                  'Campaign objective and launch date',
                  'Target publishers or industry audience',
                  'Press release or newsroom asset status',
                  'Reach goals, approvals, or turnaround needs',
                ].map((item) => (
                  <div key={item} className="border border-black/10 bg-white px-4 py-4 text-sm font-bold text-black/72">{item}</div>
                ))}
              </div>
            </aside>
            <div className="editable-panel p-6 sm:p-10">
              <p className="text-xs font-black uppercase tracking-[0.22em] text-[var(--slot4-accent)]">Request media support</p>
              <h2 className="mt-3 text-4xl font-black tracking-[-0.05em]">{pagesContent.contact.formTitle}</h2>
              <EditableContactLeadForm />
            </div>
          </div>
        </section>
      </main>
    </EditableSiteShell>
  )
}
