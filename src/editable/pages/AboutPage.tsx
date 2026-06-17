import Link from 'next/link'
import { BarChart3, Globe2, RadioTower } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/site-config'
import { pagesContent } from '@/editable/content/pages.content'
import { EditableSiteShell } from '@/editable/shell/EditableSiteShell'

const signals = [
  { label: 'Publisher reach', value: '180+', icon: Globe2 },
  { label: 'Campaign launches', value: '1.2K', icon: RadioTower },
  { label: 'Visibility reports', value: 'Weekly', icon: BarChart3 },
] as const

export default function AboutPage() {
  return (
    <EditableSiteShell>
      <main className="bg-[var(--slot4-page-bg)] text-[var(--slot4-page-text)]">
        <section className="border-b border-black/10">
          <div className="mx-auto grid max-w-[var(--editable-container)] gap-8 px-4 py-14 sm:px-6 lg:grid-cols-[1.02fr_0.98fr] lg:px-8 lg:py-20">
            <div className="border border-[rgba(16,33,47,0.12)] bg-[var(--slot4-dark-bg)] p-7 text-white shadow-[0_24px_70px_rgba(16,33,47,0.18)] sm:p-10">
              <p className="text-xs font-black uppercase tracking-[0.28em] text-[var(--slot4-accent)]">{pagesContent.about.badge}</p>
              <h1 className="mt-5 text-5xl font-black leading-[0.9] tracking-[-0.07em] sm:text-7xl">{pagesContent.about.title}</h1>
              <p className="mt-6 max-w-2xl text-base font-semibold leading-8 text-white/74">{pagesContent.about.description}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/media-distribution" className="inline-flex items-center gap-2 bg-[var(--slot4-accent)] px-6 py-3 text-xs font-black uppercase tracking-[0.16em] text-white">View distribution archive</Link>
                <Link href="/contact" className="inline-flex items-center gap-2 border border-white/20 px-6 py-3 text-xs font-black uppercase tracking-[0.16em] text-white">Talk to the team</Link>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
              {signals.map((signal) => (
                <div key={signal.label} className="editable-panel p-6">
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-[10px] font-black uppercase tracking-[0.18em] text-[var(--slot4-accent)]">{signal.label}</span>
                    <signal.icon className="h-5 w-5 text-[var(--slot4-lavender)]" />
                  </div>
                  <p className="mt-5 text-4xl font-black tracking-[-0.06em]">{signal.value}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[var(--editable-container)] px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="grid gap-8 lg:grid-cols-[1.08fr_0.92fr]">
            <article className="editable-panel p-7 sm:p-10">
              <p className="text-xs font-black uppercase tracking-[0.22em] text-[var(--slot4-accent)]">How we work</p>
              <div className="article-content mt-8 space-y-6">
                {pagesContent.about.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </div>
            </article>
            <aside className="grid gap-4">
              {pagesContent.about.values.map((value, index) => (
                <div key={value.title} className="editable-panel p-6 sm:p-7">
                  <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[var(--slot4-accent)]">0{index + 1}</p>
                  <h2 className="mt-3 text-3xl font-black tracking-[-0.05em]">{value.title}</h2>
                  <p className="mt-4 text-sm leading-7 text-black/65">{value.description}</p>
                </div>
              ))}
            </aside>
          </div>
        </section>

        <section className="border-y border-black/10 bg-white">
          <div className="mx-auto flex max-w-[var(--editable-container)] flex-col gap-6 px-4 py-12 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[var(--slot4-accent)]">Next step</p>
              <h2 className="mt-2 max-w-3xl text-4xl font-black tracking-[-0.05em]">Build a release experience that feels credible to journalists, partners, and buyers.</h2>
            </div>
            <Link href="/create" className="inline-flex w-fit items-center gap-2 bg-[var(--slot4-dark-bg)] px-6 py-4 text-xs font-black uppercase tracking-[0.16em] text-white">
              Launch campaign for {SITE_CONFIG.name}
            </Link>
          </div>
        </section>
      </main>
    </EditableSiteShell>
  )
}
