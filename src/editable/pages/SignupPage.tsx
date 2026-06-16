import type { Metadata } from 'next'
import Link from 'next/link'
import { Globe2, Megaphone, Newspaper } from 'lucide-react'
import { buildPageMetadata } from '@/lib/seo'
import { EditableSiteShell } from '@/editable/shell/EditableSiteShell'
import { EditableLocalSignupForm } from '@/editable/components/EditableLocalAuthForms'
import { pagesContent } from '@/editable/content/pages.content'

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata({ path: '/signup', title: 'Sign up', description: pagesContent.auth.signup.metadataDescription })
}

export default function SignupPage() {
  return (
    <EditableSiteShell>
      <main className="bg-[var(--slot4-page-bg)] text-[var(--slot4-page-text)]">
        <section className="mx-auto max-w-[var(--editable-container)] px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="editable-panel grid overflow-hidden lg:grid-cols-[1.02fr_0.98fr]">
            <div className="bg-white p-7 sm:p-12">
              <p className="text-xs font-black uppercase tracking-[0.22em] text-[var(--slot4-accent)]">Create your workspace</p>
              <h1 className="mt-3 text-4xl font-black tracking-[-0.05em]">{pagesContent.auth.signup.formTitle}</h1>
              <EditableLocalSignupForm />
              <p className="mt-5 border-t border-black/10 pt-5 text-sm text-black/65">Already have an account? <Link href="/login" className="font-black text-[var(--slot4-accent)] underline-offset-4 hover:underline">{pagesContent.auth.signup.loginCta}</Link></p>
            </div>
            <div className="bg-[var(--slot4-dark-bg)] p-8 text-white sm:p-12">
              <div className="editable-chip border-white/15 bg-white/8 text-white">{pagesContent.auth.signup.badge}</div>
              <h2 className="mt-6 max-w-xl text-5xl font-black leading-[0.9] tracking-[-0.07em] sm:text-7xl">{pagesContent.auth.signup.title}</h2>
              <p className="mt-6 max-w-lg text-base font-semibold leading-8 text-white/72">{pagesContent.auth.signup.description}</p>
              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                <SignupFeature icon={Megaphone} label="Create campaigns" />
                <SignupFeature icon={Newspaper} label="Publish releases" />
                <SignupFeature icon={Globe2} label="Track visibility" />
              </div>
            </div>
          </div>
        </section>
      </main>
    </EditableSiteShell>
  )
}

function SignupFeature({ icon: Icon, label }: { icon: typeof Megaphone; label: string }) {
  return (
    <div className="border border-white/12 bg-white/5 p-4">
      <Icon className="h-5 w-5 text-[var(--slot4-accent)]" />
      <p className="mt-4 text-sm font-black uppercase tracking-[0.14em] text-white/78">{label}</p>
    </div>
  )
}
