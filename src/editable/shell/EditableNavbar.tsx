'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ChevronRight, Menu, Search, UserRound, X } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/site-config'
import { useEditableLocalAuthSession } from '@/editable/components/EditableLocalAuthForms'
import { globalContent } from '@/editable/content/global.content'

export function EditableNavbar() {
  const [open, setOpen] = useState(false)
  const { session, logout } = useEditableLocalAuthSession()
  const links = globalContent.nav.primaryLinks

  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-[rgba(255,253,249,0.9)] text-black backdrop-blur-xl">
      <div className="border-b border-black/10 bg-[var(--slot4-dark-bg)] text-white">
        <div className="mx-auto flex min-h-[42px] max-w-[var(--editable-container)] items-center justify-between gap-4 px-4 text-[10px] font-black uppercase tracking-[0.18em] sm:px-6 lg:px-8">
          <p className="truncate text-white/70">{globalContent.nav.tagline}</p>
          <div className="hidden items-center gap-4 text-white/65 md:flex">
            <span>Publisher-ready</span>
            <span>Campaign-led</span>
            <span>Searchable archive</span>
          </div>
        </div>
      </div>

      <div className="mx-auto grid min-h-[92px] max-w-[var(--editable-container)] grid-cols-[auto_1fr_auto] items-center gap-4 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4">
          <button type="button" onClick={() => setOpen((value) => !value)} className="inline-flex h-11 w-11 items-center justify-center border border-black/20 bg-white/80 lg:hidden" aria-label="Toggle navigation">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
          <Link href="/" className="editorial-brand max-w-[52vw] truncate text-3xl font-black text-[var(--slot4-accent)] sm:text-[2.7rem]">
            {SITE_CONFIG.name}
          </Link>
        </div>

        <nav className="hidden items-center justify-center gap-6 lg:flex">
          {links.map((item) => (
            <Link key={`${item.label}-${item.href}`} href={item.href} className="text-sm font-black uppercase tracking-[.12em] text-black/75">{item.label}</Link>
          ))}
        </nav>

        <div className="flex items-center justify-end gap-3">
          {session ? (
            <div className="hidden items-center gap-3 rounded-full border border-black/15 bg-white/80 px-4 py-2 sm:flex">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--slot4-dark-bg)] text-white"><UserRound className="h-4 w-4" /></span>
              <div className="min-w-0">
                <p className="truncate text-sm font-black leading-none">{session.name}</p>
                <p className="mt-1 truncate text-[10px] font-black uppercase tracking-[0.14em] text-black/45">Active session</p>
              </div>
              <button type="button" onClick={logout} className="text-[10px] font-black uppercase tracking-[0.14em] text-[var(--slot4-accent)]">Logout</button>
            </div>
          ) : <Link href="/login" className="hidden text-xs font-black uppercase tracking-[.12em] sm:block">Log in</Link>}
          <Link href={session ? '/create' : '/signup'} className="inline-flex items-center gap-2 bg-[var(--slot4-accent)] px-4 py-3 text-[10px] font-black uppercase tracking-[.14em] text-white transition duration-300 hover:bg-[var(--slot4-dark-bg)] sm:px-6">
            {session ? 'Launch Campaign' : 'Create Workspace'} <ChevronRight className="h-4 w-4" />
          </Link>
        </div>
      </div>

      <div className="border-t border-black/10 bg-white/65">
        <div className="mx-auto flex min-h-[58px] max-w-[var(--editable-container)] items-center gap-5 px-4 sm:px-6 lg:px-8">
          <p className="hidden text-[10px] font-black uppercase tracking-[0.18em] text-black/45 lg:block">Campaign intelligence</p>
          <form action="/search" className="ml-auto flex min-w-0 flex-1 items-center border border-black/12 bg-white/90 lg:max-w-[420px] lg:flex-none">
            <Search className="ml-4 h-4 w-4 text-black/45" />
            <input name="q" type="search" placeholder="Search releases, industries, publishers" className="min-w-0 flex-1 bg-transparent px-3 py-4 text-xs font-bold outline-none placeholder:text-black/35" />
          </form>
        </div>
      </div>

      {open ? (
        <div className="border-t border-black/15 bg-[var(--slot4-surface-bg)] px-4 py-4 lg:hidden">
          <div className="grid gap-px bg-black/15">
            {[...links, ...(session ? [{ label: 'Launch Campaign', href: '/create' }] : [{ label: 'Login', href: '/login' }, { label: 'Sign up', href: '/signup' }])].map((item) => (
              <Link key={`${item.label}-${item.href}`} href={item.href} onClick={() => setOpen(false)} className="bg-white px-4 py-3 text-sm font-black uppercase tracking-[.1em]">{item.label}</Link>
            ))}
            {session ? <button type="button" onClick={() => { logout(); setOpen(false) }} className="bg-white px-4 py-3 text-left text-sm font-black uppercase tracking-[.1em] text-[var(--slot4-accent)]">Logout</button> : null}
          </div>
        </div>
      ) : null}
    </header>
  )
}
