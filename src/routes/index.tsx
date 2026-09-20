import { createFileRoute } from "@tanstack/react-router";
import { Clapperboard, Globe, Palette } from "lucide-react";
import heroGlassCards from "@/assets/hero-glass-cards.png.asset.json";
import sampleBrand from "@/assets/sample-brand.webp";
import sampleWebsite from "@/assets/sample-website.webp";
import sampleSocial from "@/assets/sample-social.webp";
import samplePrint from "@/assets/sample-print.webp";
import sampleGoogleBusiness from "@/assets/sample-google-business.png";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      {
        title: "Haven Solutions | Branding, Website Design & Digital Services for Small Businesses",
      },
      {
        name: "description",
        content:
          "We help local businesses grow with professional branding, website design, social media management, and smart automation. Book a free call with Haven Solutions today.",
      },
      {
        property: "og:title",
        content: "Haven Solutions | Branding, Website Design & Digital Services",
      },
      {
        property: "og:description",
        content:
          "Branding, websites and digital systems built for salons, clinics, restaurants and local service businesses.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: "Haven Solutions",
          description:
            "Branding, website design, social media management and automation for local and small businesses.",
          areaServed: "United Kingdom",
          serviceType: [
            "Branding",
            "Website Design",
            "Social Media Management",
            "Google Business Profile Management",
            "Marketing Automation",
          ],
        }),
      },
    ],
  }),
});

function Star({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
      <path d="M12 0l2.2 6.3L20 3.1l-2.5 5.7 6.5.9-5.9 2.8 4.4 4.6-6.3-1.6.9 6.5-3.1-5.4-3.1 5.4.9-6.5-6.3 1.6 4.4-4.6L0 9.7l6.5-.9L4 3.1l5.8 3.2z" />
    </svg>
  );
}

const painCards = [
  {
    quote: "My customers keep forgetting their appointments and I lose money every week.",
    fix: "Automated WhatsApp & SMS Reminder System",
  },
  {
    quote: "We have 6 Google reviews. The business down the road has 300.",
    fix: "Review Generation System",
  },
  {
    quote: "Our website looks outdated. I'm embarrassed to send people to it.",
    fix: "Professional Website Design & Branding",
  },
  {
    quote: "I post on Instagram sometimes, but it doesn't look consistent or professional.",
    fix: "Social Media Content & Management",
  },
  {
    quote: "I have no idea how to get new customers. I rely on word of mouth and hope.",
    fix: "Client Outreach Pipeline & AI Chatbot",
  },
];

const serviceGroups = [
  {
    tag: "01",
    heading: "Build Your Brand",
    description:
      "Your brand is the first impression every customer gets. We make sure it's a good one.",
    icon: Palette,
    services: [
      {
        name: "Logo & Brand Identity",
        copy: "A professional logo, colour palette, and brand guidelines that make you look established and trustworthy.",
      },
      {
        name: "Print & Marketing Materials",
        copy: "Business cards, flyers, menus, and banners that match your brand and are print-ready.",
      },
      {
        name: "Email Newsletter Design",
        copy: "Branded email templates your customers actually want to open.",
      },
    ],
  },
  {
    tag: "02",
    heading: "Own Your Online Presence",
    description: "Be easy to find, easy to trust, and easy to book — on every screen.",
    icon: Globe,
    services: [
      {
        name: "Website Design & Build",
        copy: "A fast, mobile-friendly, professionally designed website that converts visitors into bookings.",
      },
      {
        name: "Google Business Profile Management",
        copy: "Get found on Google Maps. We optimise and manage your profile so local customers choose you.",
      },
      {
        name: "Online Booking System",
        copy: "Let customers book appointments directly from your website, 24/7, with automatic confirmations.",
      },
    ],
  },
  {
    tag: "03",
    heading: "Create Your Content",
    description:
      "Consistent, on-brand content that keeps your audience engaged and your business top of mind.",
    icon: Clapperboard,
    services: [
      {
        name: "Social Media Content & Management",
        copy: "Regular posts, graphics, and captions designed for your brand and scheduled for you.",
      },
      {
        name: "Video Editing",
        copy: "Short-form videos and reels for Instagram, TikTok, and YouTube Shorts — produced fast, at a fraction of traditional cost.",
      },
    ],
  },
];

const steps = [
  {
    n: "01",
    title: "We Talk",
    copy: "Book a free 30-minute call. No pitch, no pressure — we listen to what your business needs and tell you exactly what we'd do.",
  },
  {
    n: "02",
    title: "We Build",
    copy: "We handle everything. Design, development, content, setup. You don't touch a thing. We keep you updated without overwhelming you.",
  },
  {
    n: "03",
    title: "You Grow",
    copy: "Your brand looks sharp, your systems run automatically, and new customers can find you easily. You focus on what you do best.",
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-background">
      {/* NAV */}
      <header className="sticky top-0 z-50 px-4 pt-3 pb-2 sm:px-6">
        <nav className="mx-auto flex max-w-[1240px] items-center justify-between gap-4 rounded-full border border-border bg-background/70 py-2.5 pr-2.5 pl-4 shadow-[0_10px_30px_-24px_oklch(0.19_0.006_60/0.6)] backdrop-blur-xl">
          <a href="#top" className="flex items-center gap-2.5">
            <span className="pill-ember flex h-8 w-8 items-center justify-center rounded-xl">
              <Star className="h-4 w-4" />
            </span>
            <span className="font-display text-lg font-bold tracking-tight">Haven</span>
          </a>
          <div className="hidden items-center gap-1 text-sm text-muted-foreground md:flex">
            {[
              { href: "#services", label: "Services" },
              { href: "#process", label: "How It Works" },
              { href: "#work", label: "Work" },
              { href: "#contact", label: "Contact" },
            ].map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="rounded-full px-3.5 py-2 font-medium transition-colors hover:bg-secondary hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <a
              href="#services"
              className="hidden rounded-full px-4 py-2 text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground sm:inline-flex md:hidden"
            >
              Services
            </a>
            <a
              href="#contact"
              className="pill-ember px-5 py-2.5 text-sm font-semibold whitespace-nowrap"
            >
              Book a Free Call
            </a>
          </div>
        </nav>
      </header>


      {/* HERO */}
      <section id="top" className="relative overflow-hidden border-b border-border">
        <div className="mx-auto grid max-w-[1240px] gap-10 px-6 pt-8 pb-0 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:pt-12">
          <div>
            <div className="flex items-center gap-2">
              <Star className="h-3 w-3 text-ember" />
              <span className="eyebrow text-muted-foreground">Haven Solutions</span>
            </div>
            <h1 className="mt-6 text-[clamp(2.5rem,6.2vw,4.75rem)]">
              Your Business Deserves to Look as Good as It Is.
            </h1>
            <p className="mt-7 max-w-xl text-[1.0625rem] leading-relaxed text-muted-foreground">
              We help businesses attract more customers, build a brand people trust, and run systems
              that save time — without the complexity.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a
                href="#contact"
                className="pill-ember px-7 py-3.5 text-sm font-semibold shadow-[var(--shadow-lift)]"
              >
                Book a Free Call
              </a>
              <a
                href="#services"
                className="rounded-full border border-foreground/15 px-7 py-3.5 text-sm font-semibold transition-colors hover:bg-secondary"
              >
                See What We Do
              </a>
            </div>
            <ul className="mt-10 space-y-2.5 pb-14 text-sm text-muted-foreground">
              {[
                "Website · Branding · Social Media · Automation",
                "Built for businesses ready to grow",
                "No long contracts. Book a free 30-min call.",
              ].map((line) => (
                <li key={line} className="flex items-center gap-3">
                  <span className="h-px w-6 bg-ember" />
                  {line}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative pb-14 lg:pb-20">
            {/* soft ember glow behind the frame */}
            <div
              aria-hidden
              className="pointer-events-none absolute -top-10 -right-6 h-56 w-56 rounded-full blur-3xl"
              style={{ background: "var(--gradient-ember)", opacity: 0.16 }}
            />
            <figure className="relative rounded-[1.75rem] border border-border bg-card p-2.5 shadow-[var(--shadow-lift)]">
              <img
                src={heroGlassCards.url}
                alt="Strategy, systems, growth and impact cards showing how Haven Solutions builds stronger business foundations"
                width={1600}
                height={1008}
                className="aspect-[5/4] w-full rounded-[1.35rem] object-cover"
              />
              <figcaption className="absolute top-5 left-5 inline-flex items-center gap-2 rounded-full bg-background/85 px-3 py-1.5 text-[11px] font-semibold backdrop-blur-md">
                <span className="h-1.5 w-1.5 rounded-full bg-ember" />
                Fully managed
              </figcaption>

              {/* editorial stat strip */}
              <div className="grid grid-cols-3 divide-x divide-border px-1 pt-4 pb-2">
                {[
                  { k: "One team", v: "Brand · Site · Systems" },
                  { k: "No middlemen", v: "Direct with the team" },
                  { k: "30 min", v: "Free strategy call" },
                ].map((s) => (
                  <div key={s.k} className="px-3 first:pl-2 last:pr-2">
                    <p className="font-display text-base leading-tight font-semibold">{s.k}</p>
                    <p className="mt-1 text-[11px] leading-snug text-muted-foreground">{s.v}</p>
                  </div>
                ))}
              </div>
            </figure>
          </div>

        </div>

        <div className="select-none overflow-hidden px-2">
          <p className="translate-y-[16%] font-display text-[clamp(4rem,17vw,15rem)] leading-[0.8] font-bold tracking-[-0.05em] text-foreground/[0.07]">
            haven
          </p>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-[1240px] px-6 py-24">
          <span className="eyebrow text-ember">Sound familiar?</span>
          <h2 className="mt-5 max-w-4xl text-[clamp(1.85rem,4.2vw,3.15rem)]">
            Good businesses lose customers every day — not because of bad service,{" "}
            <span className="text-muted-foreground">but because of how they look online.</span>
          </h2>

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {painCards.map((card, i) => (
              <article
                key={card.fix}
                className={`lift flex flex-col justify-between rounded-3xl border p-7 ${
                  i === 0
                    ? "surface-ink border-transparent lg:col-span-2"
                    : "border-border bg-card"
                }`}
              >
                <p
                  className={`font-display text-xl leading-tight ${i === 0 ? "text-bone-foreground" : ""}`}
                >
                  <span className="text-ember">❝ </span>
                  {card.quote}
                  <span className="text-ember"> ❞</span>
                </p>
                <p
                  className={`mt-10 flex items-start gap-2 text-sm font-semibold ${
                    i === 0 ? "text-bone-muted" : "text-muted-foreground"
                  }`}
                >
                  <Star className="mt-0.5 h-3 w-3 shrink-0 text-ember" />
                  {card.fix}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="relative overflow-hidden border-y border-border bg-secondary/40">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1.5px 1.5px, var(--foreground) 1.5px, transparent 0)",
            backgroundSize: "36px 36px",
          }}
        />
        <div className="relative mx-auto max-w-[1240px] px-6 py-28">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.3fr] lg:items-end">
            <div>
              <span className="eyebrow text-ember">What we do</span>
              <h2 className="mt-6 text-[clamp(2.6rem,6.2vw,4.75rem)]">
                Everything your business needs to{" "}
                <span className="text-ember-gradient">stand out.</span>
              </h2>
            </div>
            <p className="max-w-lg text-lg leading-relaxed text-muted-foreground lg:ml-auto">
              No overwhelming menus. Just three focused service pillars that help local businesses
              look professional, get found, and stay booked.
            </p>
          </div>

          <div className="mt-20 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {serviceGroups.map((group) => {
              const Icon = group.icon;
              return (
                <article
                  key={group.heading}
                  className="lift group relative flex flex-col overflow-hidden rounded-3xl border border-border bg-card"
                >
                  <div className="h-1.5 w-full bg-gradient-to-r from-ember to-ember-soft" />
                  <div className="flex flex-1 flex-col p-8">
                    <div className="flex items-start justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary text-ember">
                        <Icon className="h-5 w-5" strokeWidth={1.8} />
                      </div>
                      <span className="font-display text-5xl font-bold text-foreground/[0.07]">
                        {group.tag}
                      </span>
                    </div>
                    <h3 className="mt-7 text-2xl">{group.heading}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {group.description}
                    </p>
                    <ul className="mt-8 space-y-4 border-t border-border pt-6">
                      {group.services.map((s) => (
                        <li key={s.name} className="flex gap-3 text-sm">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-ember" />
                          <div>
                            <span className="font-semibold text-foreground">{s.name}</span>
                            <p className="mt-0.5 leading-relaxed text-muted-foreground">{s.copy}</p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* TECH STRIP */}
      <section className="surface-ink">
        <div className="mx-auto grid max-w-[1240px] gap-8 px-6 py-20 lg:grid-cols-[1fr_1.2fr] lg:items-end">
          <h2 className="text-[clamp(1.6rem,3.2vw,2.4rem)] text-bone-foreground">
            We also build the systems that run your business in the background.
          </h2>
          <div>
            <p className="text-bone-muted leading-relaxed">
              Automated appointment reminders via WhatsApp and SMS. AI chatbots that answer
              questions and capture leads 24/7. Review generation that turns every customer visit
              into a 5-star rating. Client outreach pipelines that find and email new prospects for
              you.
            </p>
            <a
              href="#contact"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-ember-soft"
            >
              Explore our tech services →
            </a>
          </div>
        </div>
        <div className="overflow-hidden border-t border-bone-border py-4">
          <div className="marquee-track flex w-max items-center gap-8 whitespace-nowrap">
            {Array.from({ length: 2 }).map((_, r) => (
              <div key={r} className="flex items-center gap-8">
                {[
                  "WhatsApp reminders",
                  "Review generation",
                  "AI chatbots",
                  "Outreach pipelines",
                  "Booking systems",
                  "Google Business Profile",
                ].map((t) => (
                  <span
                    key={t}
                    className="flex items-center gap-8 eyebrow text-bone-muted"
                  >
                    {t}
                    <Star className="h-3 w-3 text-ember" />
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="process" className="border-b border-border">
        <div className="mx-auto max-w-[1240px] px-6 py-24">
          <span className="eyebrow text-ember">The process</span>
          <h2 className="mt-5 max-w-3xl text-[clamp(1.85rem,4.2vw,3.15rem)]">
            Three steps. No technical headaches.{" "}
            <span className="text-muted-foreground">No confusing jargon.</span>
          </h2>
          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {steps.map((s) => (
              <article key={s.n} className="lift rounded-3xl border border-border bg-card p-8">
                <div className="flex items-baseline justify-between">
                  <span className="font-display text-5xl font-bold text-foreground/10">{s.n}</span>
                  <Star className="h-3.5 w-3.5 text-ember" />
                </div>
                <h3 className="mt-8 text-2xl">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PROOF */}
      <section id="work" className="border-b border-border">

        <div className="mx-auto max-w-[1240px] px-6 py-24">
          <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-end">
            <div>
              <span className="eyebrow text-ember">Our work</span>
              <h2 className="mt-5 text-[clamp(1.85rem,4.2vw,3.15rem)]">Real work. Real results.</h2>
            </div>
            <p className="max-w-lg text-muted-foreground">
              We're a new agency — so instead of showing you half-finished client work, we've built
              fully polished samples across every service we offer. What you see below is exactly
              what your business would get.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            <figure className="lift group overflow-hidden rounded-3xl border border-border bg-card md:col-span-2">
              <div className="relative">
                <img
                  src={sampleBrand}
                  alt="Sample logo and brand identity design — Haven Solutions"
                  loading="lazy"
                  width={1200}
                  height={912}
                  className="aspect-[16/10] w-full object-cover"
                />
                <span className="absolute left-6 top-6 rounded-full border border-white/30 bg-black/40 px-3 py-1 text-[11px] font-semibold text-white backdrop-blur-sm">
                  Demo
                </span>
              </div>
              <figcaption className="flex items-center justify-between p-6">
                <span className="font-display text-lg">Brand identity design</span>
                <span className="eyebrow text-muted-foreground">Sample</span>
              </figcaption>
            </figure>
            <figure className="lift overflow-hidden rounded-3xl border border-border bg-card">
              <img
                src={sampleWebsite}
                alt="Sample website design — Haven Solutions"
                loading="lazy"
                width={1200}
                height={912}
                className="aspect-[4/3] w-full object-cover object-top"
              />
              <figcaption className="flex items-center justify-between p-6">
                <span className="font-display text-lg">Website design</span>
                <span className="eyebrow text-muted-foreground">Sample</span>
              </figcaption>
            </figure>
            <figure className="lift overflow-hidden rounded-3xl border border-border bg-card">
              <div className="relative">
                <img
                  src={sampleSocial}
                  alt="Sample social media content design — Haven Solutions"
                  loading="lazy"
                  width={1200}
                  height={912}
                  className="aspect-[4/3] w-full object-cover"
                />
                <span className="absolute left-6 top-6 rounded-full border border-white/30 bg-black/40 px-3 py-1 text-[11px] font-semibold text-white backdrop-blur-sm">
                  Demo
                </span>
              </div>
              <figcaption className="flex items-center justify-between p-6">
                <span className="font-display text-lg">Social media post set</span>
                <span className="eyebrow text-muted-foreground">Sample</span>
              </figcaption>
            </figure>
            <figure className="lift overflow-hidden rounded-3xl border border-border bg-card">
              <div className="relative">
                <img
                  src={samplePrint}
                  alt="Sample print and marketing collateral design — Haven Solutions"
                  loading="lazy"
                  width={1200}
                  height={912}
                  className="aspect-[4/3] w-full object-cover"
                />
                <span className="absolute left-6 top-6 rounded-full border border-white/30 bg-black/40 px-3 py-1 text-[11px] font-semibold text-white backdrop-blur-sm">
                  Demo
                </span>
              </div>
              <figcaption className="p-6">
                <div className="flex items-center justify-between">
                  <span className="font-display text-lg">Print &amp; marketing collateral</span>
                  <span className="eyebrow text-muted-foreground">Sample</span>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  Flyers, brochures and signage that look as sharp offline as your brand does
                  online.
                </p>
              </figcaption>
            </figure>
            <figure className="lift overflow-hidden rounded-3xl border border-border bg-card">
              <div className="relative">
                <img
                  src={sampleGoogleBusiness}
                  alt="Sample Google Business Profile optimization — Haven Solutions"
                  loading="lazy"
                  width={1200}
                  height={912}
                  className="aspect-[4/3] w-full object-cover"
                />
                <span className="absolute left-6 top-6 rounded-full border border-white/30 bg-black/40 px-3 py-1 text-[11px] font-semibold text-white backdrop-blur-sm">
                  Demo
                </span>
              </div>
              <figcaption className="p-6">
                <div className="flex items-center justify-between">
                  <span className="font-display text-lg">Google Business Profile</span>
                  <span className="eyebrow text-muted-foreground">Sample</span>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  A fully optimized profile that helps customers find, trust and choose you first.
                </p>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section id="contact" className="surface-ink">
        <div className="mx-auto max-w-[900px] px-6 py-28 text-center">
          <Star className="mx-auto h-5 w-5 text-ember" />
          <h2 className="mt-8 text-[clamp(1.9rem,4.6vw,3.4rem)] text-bone-foreground">
            Ready to stop losing customers to businesses that just look better?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-bone-muted">
            Book a free 30-minute call with our team. We'll take an honest look at your online
            presence and tell you exactly what's holding your business back — with no obligation and
            no sales pressure.
          </p>
          <a
            href="mailto:hello@havensolutions.co"
            className="pill-ember mt-9 inline-block px-8 py-4 text-sm font-semibold"
          >
            Book Your Free Call
          </a>
          <p className="mx-auto mt-6 max-w-lg text-xs text-bone-muted">
            Branding, websites and digital systems for businesses that want to grow.
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-[1240px] flex-col gap-6 px-6 py-10 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-2">
            <Star className="h-3.5 w-3.5 text-ember" />
            <span className="font-display font-bold">Haven Solutions</span>
          </div>
          <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
            <a href="#services" className="hover:text-foreground">
              Services
            </a>
            <a href="#contact" className="hover:text-foreground">
              Contact
            </a>
            <a href="https://www.linkedin.com" className="hover:text-foreground">
              LinkedIn
            </a>
          </div>
          <p className="max-w-md text-xs text-muted-foreground">
            © 2025 Haven Solutions. Professional branding, website design and digital services for
            growing businesses.
          </p>
        </div>
      </footer>
    </div>
  );
}
