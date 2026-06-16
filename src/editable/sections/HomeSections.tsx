import Link from 'next/link'
import { ArrowRight, BarChart3, Building2, CheckCircle2, Globe2, Megaphone, RadioTower, Search, ShieldCheck, Sparkles, TrendingUp } from 'lucide-react'
import type { SitePost } from '@/lib/site-connector'
import type { HomeTimeSection } from '@/lib/task-data'
import type { TaskKey } from '@/lib/site-config'
import { SITE_CONFIG } from '@/lib/site-config'
import { pagesContent } from '@/editable/content/pages.content'
import { editableDesignContract as dc } from '@/editable/layouts/design-contract'
import { CompactIndexCard, getEditableCategory, getEditableExcerpt, getEditablePostImage, postHref, RailPostCard } from '@/editable/cards/PostCards'

type HomeSectionProps = {
  primaryTask: TaskKey
  primaryRoute: string
  posts: SitePost[]
  timeSections: HomeTimeSection[]
}

const metrics = [
  { value: '180+', label: 'publisher relationships', icon: Globe2 },
  { value: '42', label: 'industries distributed weekly', icon: Building2 },
  { value: '24h', label: 'average launch turnaround', icon: RadioTower },
  { value: '91%', label: 'campaign completion rate', icon: ShieldCheck },
] as const

const industries = [
  'Technology and SaaS',
  'Healthcare and pharma',
  'Finance and fintech',
  'Consumer brands',
  'Logistics and infrastructure',
  'Entertainment and culture',
] as const

const processSteps = [
  {
    title: 'Shape the campaign brief',
    body: 'Frame the headline, message angle, supporting facts, and launch timing before the release enters distribution.',
  },
  {
    title: 'Target channels and journalists',
    body: 'Map the right publishers, beats, industries, and newsroom partners so reach grows in the places that matter.',
  },
  {
    title: 'Publish, track, and extend',
    body: 'Launch the release, monitor visibility, and keep related stories, assets, and follow-up campaigns connected.',
  },
] as const

const faqs = [
  {
    question: 'What makes a strong media distribution page?',
    answer: 'A strong page combines campaign clarity, trust signals, supporting visuals, and obvious next steps for publishers and brand teams.',
  },
  {
    question: 'Can releases be grouped by industry or campaign type?',
    answer: 'Yes. The front-end layout is designed so categories, industries, and related releases remain easy to browse and filter.',
  },
  {
    question: 'How should brands use this platform day to day?',
    answer: 'Use it as a live newsroom archive for launches, brand updates, partnerships, and campaign reporting instead of a static post feed.',
  },
] as const

const brandMarks = ['Northwire PR', 'Vista Launch', 'Signal Desk', 'Atlas Media', 'Public Reach', 'Wireframe News'] as const

function safePosts(posts: SitePost[]) {
  return posts.filter((post): post is SitePost => Boolean(post?.slug && post?.title))
}

export function EditableHomeHero({ primaryTask, primaryRoute, posts }: HomeSectionProps) {
  const source = safePosts(posts)
  const lead = source[0]
  const side = source.slice(1, 3)
  const trending = source.slice(3, 8)
  const heroTitle = pagesContent.home.hero.title.join(' ')

  return (
    <section className="border-b border-black/10 bg-[var(--slot4-surface-bg)]">
      <div className={`${dc.shell.section} py-8 sm:py-10 lg:py-12`}>
        <div className="editable-panel grid overflow-hidden lg:grid-cols-[0.9fr_1.1fr]">
          <div className="border-b border-black/10 bg-[var(--slot4-dark-bg)] p-7 text-white sm:p-10 lg:border-b-0 lg:border-r lg:p-12">
            <div className="editable-chip border-white/15 bg-white/8 text-white">{pagesContent.home.hero.badge}</div>
            <h1 className="mt-6 text-5xl font-black leading-[0.9] tracking-[-0.07em] sm:text-7xl lg:text-[5.8rem]">{heroTitle}</h1>
            <p className="mt-6 max-w-xl text-base font-semibold leading-8 text-white/72">{pagesContent.home.hero.description}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href={pagesContent.home.hero.primaryCta.href} className={dc.button.accent}>{pagesContent.home.hero.primaryCta.label}</Link>
              <Link href={pagesContent.home.hero.secondaryCta.href} className="inline-flex items-center gap-2 border border-white/20 px-7 py-3.5 text-xs font-black uppercase tracking-[0.12em] transition duration-300 hover:bg-white hover:text-[var(--slot4-dark-bg)]">{pagesContent.home.hero.secondaryCta.label}</Link>
            </div>
            <div className="mt-10 grid gap-3 sm:grid-cols-2">
              {metrics.map((item) => (
                <div key={item.label} className="border border-white/12 bg-white/6 p-4">
                  <div className="flex items-center justify-between gap-3 text-white/65">
                    <span className="text-[10px] font-black uppercase tracking-[0.16em]">{item.label}</span>
                    <item.icon className="h-4 w-4" />
                  </div>
                  <p className="mt-4 text-3xl font-black tracking-[-0.05em] text-white">{item.value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-px bg-black/12">
            {lead ? (
              <Link href={postHref(primaryTask, lead, primaryRoute)} className="group relative min-h-[440px] overflow-hidden bg-black lg:min-h-[520px]">
                <img src={getEditablePostImage(lead)} alt={lead.title} className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]" />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(16,33,47,0.14),rgba(16,33,47,0.88))]" />
                <div className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-8">
                  <span className="bg-[var(--slot4-accent)] px-3 py-2 text-[10px] font-black uppercase tracking-[0.18em]">Featured press release</span>
                  <h2 className="mt-5 max-w-3xl text-4xl font-black leading-[0.94] tracking-[-0.05em] sm:text-5xl">{lead.title}</h2>
                  <p className="mt-4 max-w-2xl text-sm leading-7 text-white/78">{getEditableExcerpt(lead, 190)}</p>
                </div>
              </Link>
            ) : (
              <div className="min-h-[440px] bg-[var(--slot4-dark-bg)] p-8 text-white">
                <div className="editable-chip border-white/15 bg-white/8 text-white">Campaign spotlight</div>
                <h2 className="mt-6 text-4xl font-black leading-[0.94] tracking-[-0.06em]">A stronger launch surface for every release, announcement, and newsroom update.</h2>
              </div>
            )}

            <div className="grid gap-px md:grid-cols-[1fr_0.92fr]">
              <div className="bg-[var(--slot4-surface-bg)] p-6 sm:p-7">
                <div className="flex items-end justify-between border-b border-black/12 pb-4">
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[var(--slot4-accent)]">Trending campaigns</p>
                    <h3 className="mt-2 text-2xl font-black tracking-[-0.04em]">What teams are amplifying now</h3>
                  </div>
                  <TrendingUp className="h-5 w-5 text-[var(--slot4-accent)]" />
                </div>
                <div className="mt-3">
                  {trending.map((post, index) => (
                    <CompactIndexCard key={post.id || post.slug} post={post} href={postHref(primaryTask, post, primaryRoute)} index={index} />
                  ))}
                </div>
              </div>
              <div className="grid gap-px bg-black/10">
                {side.map((post, index) => (
                  <Link key={post.id || post.slug} href={postHref(primaryTask, post, primaryRoute)} className="group relative min-h-[220px] overflow-hidden bg-[var(--slot4-page-bg)]">
                    <img src={getEditablePostImage(post)} alt={post.title} className="absolute inset-0 h-full w-full object-cover opacity-70 transition duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(16,33,47,0.08),rgba(16,33,47,0.82))]" />
                    <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                      <p className="text-[10px] font-black uppercase tracking-[0.18em] text-white/70">{index === 0 ? 'Latest distribution' : 'Newsroom brief'}</p>
                      <h3 className="mt-2 text-2xl font-black leading-tight tracking-[-0.04em]">{post.title}</h3>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function EditableStoryRail({ primaryTask, primaryRoute, posts }: HomeSectionProps) {
  const railPosts = safePosts(posts).slice(0, 8)
  if (!railPosts.length) return null

  return (
    <section className="bg-[var(--slot4-page-bg)]">
      <div className={`${dc.shell.section} ${dc.shell.sectionY}`}>
        <div className="mb-6 flex flex-wrap items-end justify-between gap-4 border-b-4 border-[var(--slot4-dark-bg)] pb-4">
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[var(--slot4-accent)]">Featured press releases</p>
            <h2 className="mt-2 text-4xl font-black tracking-[-0.05em]">Latest distributions</h2>
          </div>
          <Link href={primaryRoute} className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.14em] hover:text-[var(--slot4-accent)]">View archive <ArrowRight className="h-4 w-4" /></Link>
        </div>
        <div className={`${dc.layout.rail} mt-6`}>
          {railPosts.map((post, index) => <RailPostCard key={post.id || post.slug} post={post} href={postHref(primaryTask, post, primaryRoute)} index={index} />)}
        </div>
      </div>
    </section>
  )
}

export function EditableMagazineSplit({ primaryTask, primaryRoute, posts }: HomeSectionProps) {
  const source = safePosts(posts)
  const feature = source[4] || source[0]
  const support = source.slice(5, 9)
  if (!feature) return null

  return (
    <section className="bg-[var(--slot4-dark-bg)] text-white">
      <div className={`${dc.shell.section} py-14 sm:py-20`}>
        <div className="grid gap-8 lg:grid-cols-[1.08fr_0.92fr]">
          <div>
            <div className="flex flex-wrap items-end justify-between gap-4 border-b border-white/18 pb-5">
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[var(--slot4-accent)]">Distribution network overview</p>
                <h2 className="mt-2 text-4xl font-black tracking-[-0.05em] sm:text-5xl">Campaign visibility that feels structured, not scattered.</h2>
              </div>
              <span className="text-sm font-semibold text-white/55">Reach signals, supporting content, and release context in one flow.</span>
            </div>
            <Link href={postHref(primaryTask, feature, primaryRoute)} className="group mt-7 grid gap-0 overflow-hidden border border-white/12 md:grid-cols-[1.08fr_0.92fr]">
              <div className="relative min-h-[360px] overflow-hidden">
                <img src={getEditablePostImage(feature)} alt={feature.title} className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]" />
              </div>
              <div className="flex flex-col justify-between bg-[rgba(255,255,255,0.06)] p-7 sm:p-9">
                <div>
                  <div className="editable-chip border-white/12 bg-white/8 text-white">{getEditableCategory(feature)}</div>
                  <h3 className="mt-5 text-4xl font-black leading-[0.96] tracking-[-0.05em]">{feature.title}</h3>
                  <p className="mt-5 text-sm leading-7 text-white/72">{getEditableExcerpt(feature, 180)}</p>
                </div>
                <span className="mt-8 inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.16em] text-[var(--slot4-accent)]">Open campaign <ArrowRight className="h-4 w-4" /></span>
              </div>
            </Link>
          </div>

          <div className="space-y-6">
            <div className="editable-panel bg-white/8 p-6 text-white">
              <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[var(--slot4-accent)]">Popular industries</p>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {industries.map((industry) => (
                  <div key={industry} className="border border-white/12 bg-white/5 px-4 py-4 text-sm font-black uppercase tracking-[0.08em] text-white/78">
                    {industry}
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-4">
              {support.map((post, index) => (
                <Link key={post.id || post.slug} href={postHref(primaryTask, post, primaryRoute)} className="group grid gap-4 border border-white/12 bg-white/5 p-4 sm:grid-cols-[120px_1fr]">
                  <div className="relative aspect-[4/3] overflow-hidden bg-white/8">
                    <img src={getEditablePostImage(post)} alt={post.title} className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[var(--slot4-accent)]">Campaign 0{index + 1}</p>
                    <h3 className="mt-2 line-clamp-2 text-2xl font-black leading-tight tracking-[-0.04em]">{post.title}</h3>
                    <p className="mt-3 line-clamp-2 text-sm leading-6 text-white/68">{getEditableExcerpt(post, 118)}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function EditableTimeCollections({ primaryTask, primaryRoute, posts, timeSections }: HomeSectionProps) {
  const source = safePosts(timeSections.flatMap((section) => section.posts).length ? timeSections.flatMap((section) => section.posts) : posts)
  const featured = source.slice(0, 3)
  const stories = source.slice(3, 6)

  return (
    <section className="bg-[var(--slot4-surface-bg)]">
      <div className={`${dc.shell.section} ${dc.shell.sectionY}`}>
        <div className="grid gap-8 lg:grid-cols-[1.04fr_0.96fr]">
          <div className="editable-panel p-6 sm:p-8">
            <div className="flex items-end justify-between gap-4 border-b border-black/12 pb-4">
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[var(--slot4-accent)]">Why choose us</p>
                <h2 className="mt-2 text-4xl font-black tracking-[-0.05em]">Media reach statistics with an enterprise signal.</h2>
              </div>
              <BarChart3 className="h-5 w-5 text-[var(--slot4-accent)]" />
            </div>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {metrics.map((item) => (
                <div key={item.label} className="border border-black/10 bg-white p-5">
                  <div className="flex items-center justify-between gap-3">
                    <item.icon className="h-4 w-4 text-[var(--slot4-lavender)]" />
                    <span className="text-[10px] font-black uppercase tracking-[0.16em] text-black/45">{item.label}</span>
                  </div>
                  <p className="mt-5 text-4xl font-black tracking-[-0.06em]">{item.value}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 grid gap-4 border-t border-black/10 pt-6 md:grid-cols-3">
              {processSteps.map((step, index) => (
                <div key={step.title}>
                  <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[var(--slot4-accent)]">Step 0{index + 1}</p>
                  <h3 className="mt-2 text-xl font-black tracking-[-0.04em]">{step.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-black/65">{step.body}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <div className="editable-panel p-6 sm:p-8">
              <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[var(--slot4-accent)]">How media distribution works</p>
              <h2 className="mt-2 text-4xl font-black tracking-[-0.05em]">A cleaner workflow from headline to visibility.</h2>
              <div className="mt-6 grid gap-4">
                {featured.map((post, index) => (
                  <Link key={post.id || post.slug} href={postHref(primaryTask, post, primaryRoute)} className="group grid gap-4 border border-black/10 bg-white p-4 sm:grid-cols-[132px_1fr]">
                    <div className="relative aspect-[4/3] overflow-hidden bg-[var(--slot4-media-bg)]">
                      <img src={getEditablePostImage(post)} alt={post.title} className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[10px] font-black uppercase tracking-[0.16em] text-[var(--slot4-accent)]">Recent campaign 0{index + 1}</p>
                      <h3 className="mt-2 line-clamp-2 text-2xl font-black leading-tight tracking-[-0.04em]">{post.title}</h3>
                      <p className="mt-3 line-clamp-2 text-sm leading-6 text-black/62">{getEditableExcerpt(post, 120)}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <div className="grid gap-6 lg:grid-cols-[1.02fr_0.98fr]">
              <div className="editable-panel p-6">
                <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[var(--slot4-accent)]">Trusted brands</p>
                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {brandMarks.map((brand) => (
                    <div key={brand} className="border border-black/10 bg-white px-4 py-4 text-sm font-black uppercase tracking-[0.08em] text-black/76">
                      {brand}
                    </div>
                  ))}
                </div>
              </div>
              <div className="editable-panel p-6">
                <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[var(--slot4-accent)]">Success stories</p>
                <div className="mt-4 space-y-4">
                  {stories.map((post) => (
                    <Link key={post.id || post.slug} href={postHref(primaryTask, post, primaryRoute)} className="group block border-b border-black/10 pb-4 last:border-b-0 last:pb-0">
                      <h3 className="text-xl font-black leading-tight tracking-[-0.04em] group-hover:text-[var(--slot4-accent)]">{post.title}</h3>
                      <p className="mt-2 line-clamp-2 text-sm leading-6 text-black/62">{getEditableExcerpt(post, 104)}</p>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <div className="editable-panel p-6">
              <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[var(--slot4-accent)]">Frequently asked questions</p>
              <div className="mt-5 grid gap-4">
                {faqs.map((item) => (
                  <div key={item.question} className="border border-black/10 bg-white p-5">
                    <h3 className="text-xl font-black tracking-[-0.04em]">{item.question}</h3>
                    <p className="mt-3 text-sm leading-7 text-black/65">{item.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <form action="/search" className="mt-12 grid gap-6 border-y-4 border-[var(--slot4-dark-bg)] bg-[var(--slot4-page-bg)] p-6 sm:p-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[var(--slot4-accent)]">Search the archive</p>
            <h3 className="mt-2 text-4xl font-black tracking-[-0.05em]">Find releases, industries, publishers, and campaign updates.</h3>
            <p className="mt-3 text-sm leading-7 text-black/62">Search the full archive for every active media distribution post published by {SITE_CONFIG.name}.</p>
          </div>
          <label className="flex border border-black/15 bg-white lg:min-w-[430px]">
            <Search className="ml-4 mt-4 h-4 w-4 text-black/45" />
            <input name="q" placeholder={pagesContent.home.hero.searchPlaceholder} className="min-w-0 flex-1 bg-transparent px-3 py-4 text-sm font-bold outline-none placeholder:text-black/32" />
            <button className="bg-[var(--slot4-accent)] px-5 text-xs font-black uppercase tracking-[0.14em] text-white">Search</button>
          </label>
        </form>
      </div>
    </section>
  )
}

export function EditableHomeCta() {
  return (
    <section className="bg-[var(--slot4-dark-bg)] text-white">
      <div className={`${dc.shell.section} py-14 sm:py-20`}>
        <div className="grid gap-px overflow-hidden border border-white/12 bg-white/12 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="bg-[var(--slot4-dark-bg)] px-6 py-12 sm:px-10 lg:py-16">
            <div className="editable-chip border-white/15 bg-white/8 text-white">Final call to action</div>
            <h2 className="mt-5 max-w-xl text-5xl font-black leading-[0.92] tracking-[-0.06em]">Launch releases that feel premium from the first headline to the final archive view.</h2>
            <div className="mt-8 grid gap-3 text-sm text-white/68 sm:grid-cols-2">
              <div className="inline-flex items-start gap-3"><CheckCircle2 className="mt-0.5 h-4 w-4 text-[var(--slot4-accent)]" /> Press release publishing with stronger visual hierarchy</div>
              <div className="inline-flex items-start gap-3"><CheckCircle2 className="mt-0.5 h-4 w-4 text-[var(--slot4-accent)]" /> Searchable campaign archives and industry navigation</div>
              <div className="inline-flex items-start gap-3"><CheckCircle2 className="mt-0.5 h-4 w-4 text-[var(--slot4-accent)]" /> Publisher-ready detail pages with clearer CTA areas</div>
              <div className="inline-flex items-start gap-3"><CheckCircle2 className="mt-0.5 h-4 w-4 text-[var(--slot4-accent)]" /> Better experience for PR teams, brands, and partners</div>
            </div>
          </div>
          <div className="flex flex-col justify-center bg-[rgba(255,255,255,0.05)] px-6 py-12 sm:px-10 lg:py-16">
            <p className="text-lg leading-8 text-white/68">Create a campaign workspace, prepare your next announcement, or connect with the strategy team for distribution support and newsroom planning.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/create" className={dc.button.accent}><Megaphone className="h-4 w-4" /> Launch campaign</Link>
              <Link href="/contact" className="inline-flex items-center gap-2 border border-white/20 px-7 py-3.5 text-xs font-black uppercase tracking-[0.12em] transition duration-300 hover:bg-white hover:text-[var(--slot4-dark-bg)]"><Sparkles className="h-4 w-4" /> Talk to strategy</Link>
            </div>
            <div className="mt-10 grid gap-3 sm:grid-cols-3">
              <div className="border border-white/12 bg-white/5 p-4">
                <p className="text-[10px] font-black uppercase tracking-[0.16em] text-white/55">Publisher trust</p>
                <p className="mt-2 text-2xl font-black">High</p>
              </div>
              <div className="border border-white/12 bg-white/5 p-4">
                <p className="text-[10px] font-black uppercase tracking-[0.16em] text-white/55">Workflow</p>
                <p className="mt-2 text-2xl font-black">Clear</p>
              </div>
              <div className="border border-white/12 bg-white/5 p-4">
                <p className="text-[10px] font-black uppercase tracking-[0.16em] text-white/55">Visibility</p>
                <p className="mt-2 text-2xl font-black">Measurable</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
