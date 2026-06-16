'use client'

import Link from 'next/link'
import { ArrowRight, RadioTower, Send } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/site-config'
import { globalContent } from '@/editable/content/global.content'
import { useEditableLocalAuthSession } from '@/editable/components/EditableLocalAuthForms'

export function EditableFooter() {
  const year = new Date().getFullYear()
  const { session, logout } = useEditableLocalAuthSession()
  const columns = globalContent.footer.columns

  return (
    <footer className="border-t-8 border-[var(--slot4-accent)] bg-[var(--slot4-dark-bg)] text-white">
      <div className="mx-auto max-w-[var(--editable-container)] px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_.8fr_.8fr]">
          <div>
            <div className="inline-flex items-center gap-3 editable-chip border-white/15 bg-white/8 text-white">
              <RadioTower className="h-4 w-4" /> {globalContent.footer.tagline}
            </div>
            <Link href="/" className="editorial-brand mt-6 block text-5xl font-black text-[var(--slot4-accent)] sm:text-6xl">
              {SITE_CONFIG.name}
            </Link>
            <p className="mt-6 max-w-xl text-sm leading-7 text-white/62">
              {globalContent.footer.description || SITE_CONFIG.description}
            </p>
            <form action="/signup" className="mt-8 flex max-w-xl border border-white/20 bg-white/8">
              <input
                name="email"
                type="email"
                placeholder="Email for distribution updates"
                className="min-w-0 flex-1 bg-transparent px-4 py-4 text-sm outline-none placeholder:text-white/40"
              />
              <button className="inline-flex items-center gap-2 bg-[var(--slot4-accent)] px-5 text-xs font-black uppercase tracking-[.14em]">
                <Send className="h-4 w-4" /> Subscribe
              </button>
            </form>
          </div>

          {columns.map((column) => (
            <div key={column.title}>
              <h3 className="border-b border-white/25 pb-3 text-[10px] font-black uppercase tracking-[.22em] text-white/55">
                {column.title}
              </h3>
              <div className="mt-4 grid gap-3">
                {column.links.map((link) => (
                  <Link
                    key={`${column.title}-${link.label}`}
                    href={link.href}
                    className="group inline-flex items-center justify-between text-sm font-black uppercase tracking-[.08em] hover:text-[var(--slot4-accent)]"
                  >
                    {link.label} <ArrowRight className="h-4 w-4 opacity-45 transition group-hover:opacity-100" />
                  </Link>
                ))}
                {column.title === 'Platform' && session ? (
                  <button onClick={logout} className="text-left text-sm font-black uppercase tracking-[.08em] hover:text-[var(--slot4-accent)]">
                    Logout
                  </button>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="border-t border-white/20 px-4 py-5 text-center text-[10px] font-black uppercase tracking-[.18em] text-white/45">
        Copyright {year} {SITE_CONFIG.name}. {globalContent.footer.bottomNote}
      </div>
    </footer>
  )
}
