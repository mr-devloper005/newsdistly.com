import type { Metadata } from 'next'
import Link from 'next/link'
import { LockKeyhole, RadioTower, TrendingUp } from 'lucide-react'
import { buildPageMetadata } from '@/lib/seo'
import { EditableSiteShell } from '@/editable/shell/EditableSiteShell'
import { EditableLocalLoginForm } from '@/editable/components/EditableLocalAuthForms'
import { pagesContent } from '@/editable/content/pages.content'

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata({ path: '/login', title: 'Login', description: pagesContent.auth.login.metadataDescription })
}

export default function LoginPage() {
  return (
    <EditableSiteShell>
      <main className="bg-[var(--slot4-page-bg)] text-[var(--slot4-page-text)]">
        <section className="mx-auto max-w-[var(--editable-container)] px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="editable-panel grid overflow-hidden lg:grid-cols-[0.94fr_1.06fr]">
            <div className="bg-[var(--slot4-dark-bg)] p-8 text-white sm:p-12">
              <div className="editable-chip border-white/15 bg-white/8 text-white">{pagesContent.auth.login.badge}</div>
              <h1 className="mt-6 max-w-xl text-5xl font-black leading-[0.9] tracking-[-0.07em] sm:text-7xl">{pagesContent.auth.login.title}</h1>
              <p className="mt-6 max-w-lg text-base font-semibold leading-8 text-white/72">{pagesContent.auth.login.description}</p>
              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                <SignalCard icon={LockKeyhole} label="Secure access" />
                <SignalCard icon={RadioTower} label="Campaign desk" />
                <SignalCard icon={TrendingUp} label="Reach tracking" />
              </div>
            </div>
            <div className="bg-white p-7 sm:p-12">
              <p className="text-xs font-black uppercase tracking-[0.22em] text-[var(--slot4-accent)]">Workspace login</p>
              <h2 className="mt-3 text-4xl font-black tracking-[-0.05em]">{pagesContent.auth.login.formTitle}</h2>
              <EditableLocalLoginForm />
              <p className="mt-5 border-t border-black/10 pt-5 text-sm text-black/65">New here? <Link href="/signup" className="font-black text-[var(--slot4-accent)] underline-offset-4 hover:underline">{pagesContent.auth.login.createCta}</Link></p>
            </div>
          </div>
        </section>
      </main>
    </EditableSiteShell>
  )
}

function SignalCard({ icon: Icon, label }: { icon: typeof LockKeyhole; label: string }) {
  return (
    <div className="border border-white/12 bg-white/5 p-4">
      <Icon className="h-5 w-5 text-[var(--slot4-accent)]" />
      <p className="mt-4 text-sm font-black uppercase tracking-[0.14em] text-white/78">{label}</p>
    </div>
  )
}
