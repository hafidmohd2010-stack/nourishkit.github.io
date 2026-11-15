import React, { useState } from 'react';
import {
  ArrowRight,
  Check,
  Heart,
  Minus,
  Plus,
  Smile,
  X,
  ExternalLink,
  FileText,
} from 'lucide-react';

/**
 * Replace this constant with your live Gumroad, Whop, or Stripe checkout link.
 */
const CHECKOUT_URL: string = 'INSERT_MY_GUMROAD_OR_WHOP_PAYMENT_LINK';

interface BenefitItem {
  title: string;
  description: string;
}

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

const BENEFITS: BenefitItem[] = [
  {
    title: 'A 7-Chapter System:',
    description:
      'Map your kitchen, claim your zone, rewrite the grocery trip, ask for one small thing, build 10 default meals, plan for difficult moments, and run the weekly check.',
  },
  {
    title: '9 Printable Templates:',
    description:
      'Kitchen Trigger Map, My Zone card, grocery list, pre-shop checklist, One Small Ask card, 10 Default Meals planner, craving decision card, weekly check-in sheet, and 30-day habit calendar.',
  },
  {
    title: 'Word-for-Word Scripts:',
    description:
      'Conversations with partners, kids, parents, and household cooks, including responses when someone pushes food on you.',
  },
  {
    title: 'Fridge-Door Cheat Sheet + Troubleshooting Guide:',
    description:
      'A one-page summary and practical solutions to common shared-kitchen problems.',
  },
  {
    title: 'Evidence Page:',
    description:
      'Explains what each claim is based on, its limitations, and excludes retracted Wansink studies.',
  },
];

const FAQS: FaqItem[] = [
  {
    id: 'faq-free-advice',
    question: 'I can get healthy eating advice free on YouTube or Reddit. Why pay?',
    answer:
      'Free advice is everywhere. This ebook brings the steps, printable tools, and household communication scripts together into one organized 7-day system, saving you from piecing everything together yourself.',
  },
  {
    id: 'faq-my-house',
    question: 'Will this work in my house?',
    answer:
      "Every household is different. That's why the guide focuses on small, adaptable changes rather than expecting everyone to follow the same rules. You work with the kitchen and household you already have.",
  },
  {
    id: 'faq-failed-diets',
    question: "I've failed at diets before. How is this different?",
    answer:
      "This isn't another strict diet. There are no rigid food rules, calorie targets, or demands for perfection. The focus is on practical routines, flexible choices, and handling everyday challenges.",
  },
];

function HouseUtensilsIcon({ className = 'w-8 h-8' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* House outline */}
      <path
        d="M8 21L24 8L40 21V39C40 40.1046 39.1046 41 38 41H10C8.89543 41 8 40.1046 8 39V21Z"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Fork */}
      <path
        d="M19 19V25C19 26.6569 20.3431 28 22 28V36"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22 19V25M25 19V25C25 26.6569 23.6569 28 22 28"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Spoon */}
      <ellipse
        cx="30.5"
        cy="22.5"
        rx="2.6"
        ry="3.6"
        stroke="currentColor"
        strokeWidth="2.4"
      />
      <path
        d="M30.5 26.5V36"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

function BrandBadgeIcon({ className = 'w-9 h-9' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M7 20.5L24 7L41 20.5V39.5C41 40.6046 40.1046 41.5 39 41.5H9C7.89543 41.5 7 40.6046 7 39.5V20.5Z"
        fill="#F4C430"
      />
      {/* Fork silhouette */}
      <path
        d="M17.5 18.5V24.5C17.5 26.1569 18.8431 27.5 20.5 27.5V35.5M20.5 18.5V24.5M23.5 18.5V24.5C23.5 26.1569 22.1569 27.5 20.5 27.5"
        stroke="#0D213F"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Spoon silhouette */}
      <ellipse cx="29.5" cy="22" rx="2.5" ry="3.5" fill="#0D213F" />
      <path
        d="M29.5 25V35.5"
        stroke="#0D213F"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

function BrushUnderline({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 260 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
      preserveAspectRatio="none"
    >
      <path
        d="M3 11.5C68 4.5 162 2.5 257 8.5"
        stroke="#F4C430"
        strokeWidth="4.2"
        strokeLinecap="round"
      />
      <path
        d="M18 15.5C90 10.5 170 9.5 242 12.5"
        stroke="#F4C430"
        strokeWidth="2.2"
        strokeLinecap="round"
        opacity="0.85"
      />
    </svg>
  );
}

function EbookMockup() {
  return (
    <div className="relative flex items-center justify-center py-6 sm:py-10">
      {/* Warm golden backdrop circle */}
      <div
        className="absolute right-0 sm:right-2 bottom-2 w-64 h-64 sm:w-80 sm:h-80 lg:w-[360px] lg:h-[360px] rounded-full bg-[#F4C430]"
        aria-hidden="true"
      />

      {/* Editorial spark marks */}
      <svg
        viewBox="0 0 40 44"
        fill="none"
        className="absolute top-3 right-2 sm:right-6 w-8 h-9 text-[#F4C430]"
        aria-hidden="true"
      >
        <path
          d="M6 16L18 4M12 24L32 16M14 34L30 33"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>

      {/* 3D Book Volume */}
      <div className="book-stage relative z-10 select-none">
        <div className="book-volume relative w-[238px] sm:w-[266px] lg:w-[288px] aspect-[3/4.15] rounded-r-md shadow-[0_28px_50px_-14px_rgba(4,12,26,0.75)]">
          {/* Left Book Spine */}
          <div
            className="book-spine absolute top-0 left-0 w-8 h-full bg-gradient-to-r from-[#071326] via-[#0B1C36] to-[#12294A] rounded-l-sm border-r border-white/10"
            aria-hidden="true"
          />

          {/* Right Paper Block Edge */}
          <div
            className="book-pages absolute top-[3px] right-0 w-7 h-[calc(100%-6px)] rounded-r-xs bg-gradient-to-r from-[#E5E0D5] via-[#F7F4EC] to-[#DDD7C8] border-y border-r border-slate-300/60"
            style={{
              backgroundImage:
                'repeating-linear-gradient(to right, #EFECE3 0px, #EFECE3 2px, #DCD6C8 2px, #DCD6C8 3px)',
            }}
            aria-hidden="true"
          />

          {/* Front Cover */}
          <div className="relative h-full w-full rounded-r-md overflow-hidden bg-gradient-to-br from-[#142D52] via-[#0E2240] to-[#09182F] border border-white/12 flex flex-col justify-between text-center">
            {/* Subtle spine crease lighting */}
            <div
              className="pointer-events-none absolute inset-y-0 left-0 w-5 bg-gradient-to-r from-black/35 via-white/8 to-transparent"
              aria-hidden="true"
            />

            {/* Cover Body */}
            <div className="relative px-6 pt-7 pb-4 flex flex-col items-center">
              <span className="text-[11px] font-medium tracking-[0.26em] text-slate-200/90 uppercase">
                The
              </span>

              <div className="mt-1 font-serif font-bold leading-[1.03] tracking-tight text-white text-[30px] sm:text-[34px]">
                Shared
                <br />
                Kitchen
              </div>

              <div className="relative mt-0.5 font-serif font-bold leading-none tracking-tight text-[#F4C430] text-[34px] sm:text-[38px]">
                Reset
                <BrushUnderline className="w-28 h-2.5 mx-auto mt-1" />
              </div>

              <p className="mt-4 text-[11px] sm:text-xs leading-relaxed text-slate-200/90 max-w-[185px]">
                A 7-Day Guide to Eating Healthy at Home — Without the Drama
              </p>

              <div className="mt-5 text-[#F4C430]">
                <HouseUtensilsIcon className="w-16 h-16 sm:w-[70px] sm:h-[70px]" />
              </div>
            </div>

            {/* Bottom Cover Band */}
            <div className="relative bg-[#F4C430] px-4 py-2.5 text-[#0D213F] font-semibold text-xs sm:text-[13px] tracking-tight">
              Small Changes. Big Difference.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [openFaqIds, setOpenFaqIds] = useState<string[]>(['faq-free-advice']);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  const toggleFaq = (id: string) => {
    setOpenFaqIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const isPlaceholderLink = CHECKOUT_URL === 'INSERT_MY_GUMROAD_OR_WHOP_PAYMENT_LINK';

  const handleBuyClick = () => {
    if (!isPlaceholderLink && CHECKOUT_URL.startsWith('http')) {
      window.location.assign(CHECKOUT_URL);
      return;
    }
    setIsCheckoutOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F6] text-[#0F1E36]">
      {/* SECTION 1: HEADLINE + ONE-LINE OFFER (HERO) */}
      <header className="relative bg-[#0D213F] text-white overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 pt-6 pb-16 sm:pb-20 lg:pb-24">
          {/* Clean 3-Zone Top Bar */}
          <div className="flex items-center justify-between gap-6 pb-10 sm:pb-12">
            <a
              href="#top"
              className="flex items-center gap-3 whitespace-nowrap shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F4C430] rounded-md"
            >
              <BrandBadgeIcon className="w-8 h-8 sm:w-9 sm:h-9 shrink-0" />
              <span className="font-serif font-bold text-base sm:text-lg tracking-tight text-white">
                The Shared Kitchen Reset
              </span>
            </a>

            <div className="hidden md:block flex-1 h-px bg-white/15" aria-hidden="true" />

            <nav className="flex items-center gap-5 sm:gap-7 text-sm font-medium text-slate-200">
              <a
                href="#whats-inside"
                className="hover:text-[#F4C430] transition-colors whitespace-nowrap shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F4C430] rounded px-1 py-0.5"
              >
                What’s Inside
              </a>
              <a
                href="#faq"
                className="hover:text-[#F4C430] transition-colors whitespace-nowrap shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F4C430] rounded px-1 py-0.5"
              >
                FAQ
              </a>
              <span className="hidden lg:inline text-slate-300/85 whitespace-nowrap shrink-0 pl-2 border-l border-white/15">
                Eat well. Keep the peace.
              </span>
            </nav>
          </div>

          {/* Hero Split Content */}
          <div id="top" className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            <div className="lg:col-span-7 text-left">
              <h1
                className="font-serif font-bold text-white tracking-tight leading-[1.08] text-balance"
                style={{ fontSize: 'clamp(2.25rem, 4.3vw, 3.65rem)' }}
              >
                Eat Healthier Without Turning Your Household{' '}
                <span className="relative inline-block text-[#F4C430]">
                  Upside Down.
                  <BrushUnderline className="w-full h-3.5 -mt-0.5" />
                </span>
              </h1>

              <p className="mt-6 text-base sm:text-lg text-slate-200 leading-relaxed max-w-xl">
                A practical 7-day guide to making healthier food choices, navigating shared
                kitchens, and handling cravings without demanding that everyone else change.
              </p>

              <div className="mt-8 flex flex-col items-start">
                <button
                  type="button"
                  onClick={handleBuyClick}
                  className="inline-flex items-center justify-center gap-2.5 bg-[#F4C430] hover:bg-[#E5B422] active:translate-y-px text-[#0D213F] font-bold text-base sm:text-[17px] px-7 py-4 rounded-full shadow-[0_8px_24px_rgba(244,196,48,0.28)] transition-all duration-150 cursor-pointer whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0D213F]"
                >
                  <span>Get The Shared Kitchen Reset — $5</span>
                  <ArrowRight className="w-4 h-4 shrink-0" aria-hidden="true" />
                </button>

                <p className="mt-3.5 text-sm text-slate-300 tracking-normal">
                  Instant Download <span aria-hidden="true">·</span> Downloadable PDF + Printable Templates
                </p>
              </div>
            </div>

            <div className="lg:col-span-5">
              <EbookMockup />
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* SECTION 3: WHAT'S INSIDE (Proof Section intentionally omitted per brief) */}
        <section id="whats-inside" className="py-16 sm:py-20 lg:py-24 bg-[#FAF9F6]">
          <div className="max-w-6xl mx-auto px-6 sm:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
              {/* Left Heading Column */}
              <div className="lg:col-span-4">
                <h2 className="font-serif font-bold text-3xl sm:text-4xl text-[#0D213F] tracking-tight leading-tight">
                  What’s Inside?
                </h2>
                <BrushUnderline className="w-36 h-3 mt-2" />
                <p className="mt-5 text-[15px] leading-relaxed text-[#475569] max-w-sm">
                  A downloadable PDF ebook with printable tools—no meal plans, calorie targets, or
                  rigid recipes.
                </p>
              </div>

              {/* Right 5 Concrete Benefits Grid */}
              <div className="lg:col-span-8 lg:border-l lg:border-slate-200/90 lg:pl-12">
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-7">
                  {BENEFITS.map((item) => (
                    <li key={item.title} className="flex items-start gap-3.5">
                      <span
                        className="mt-0.5 w-6 h-6 rounded-full bg-[#0D213F] text-white flex items-center justify-center shrink-0"
                        aria-hidden="true"
                      >
                        <Check className="w-3.5 h-3.5 stroke-[2.75]" />
                      </span>
                      <div className="text-[15px] leading-relaxed text-[#334155]">
                        <strong className="font-semibold text-[#0D213F]">{item.title}</strong>{' '}
                        <span>{item.description}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4: FAQ */}
        <section id="faq" className="py-14 sm:py-18 lg:py-20 border-t border-slate-200/70 bg-[#FAF9F6]">
          <div className="max-w-3xl mx-auto px-6 sm:px-8">
            <h2 className="font-serif font-bold text-3xl sm:text-4xl text-[#0D213F] text-center tracking-tight">
              Frequently Asked Questions
            </h2>

            <div className="mt-10 space-y-3.5">
              {FAQS.map((faq) => {
                const isOpen = openFaqIds.includes(faq.id);
                return (
                  <div
                    key={faq.id}
                    className="bg-white border border-slate-200/90 rounded-xl shadow-[0_1px_3px_rgba(13,33,63,0.04)] overflow-hidden transition-colors"
                  >
                    <button
                      type="button"
                      onClick={() => toggleFaq(faq.id)}
                      aria-expanded={isOpen}
                      aria-controls={`${faq.id}-panel`}
                      className="w-full min-h-[58px] px-6 py-4 flex items-center justify-between gap-4 text-left cursor-pointer hover:bg-slate-50/70 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#0D213F]"
                    >
                      <span className="font-semibold text-base sm:text-[17px] text-[#0D213F] leading-snug">
                        {faq.question}
                      </span>
                      <span
                        className="w-7 h-7 rounded-full flex items-center justify-center text-[#0D213F] shrink-0"
                        aria-hidden="true"
                      >
                        {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                      </span>
                    </button>

                    <div
                      id={`${faq.id}-panel`}
                      hidden={!isOpen}
                      className="px-6 pb-5 pt-0.5 text-[15px] leading-relaxed text-[#475569]"
                    >
                      {faq.answer}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* SECTION 5: BUY BUTTON */}
        <section id="buy" className="pt-8 pb-16 sm:pb-20 bg-[#FAF9F6]">
          <div className="max-w-6xl mx-auto px-6 sm:px-8">
            <div className="relative bg-[#0D213F] text-white rounded-3xl px-7 py-10 sm:px-12 sm:py-14 shadow-[0_20px_45px_-18px_rgba(13,33,63,0.35)] overflow-hidden">
              {/* Subtle golden accent rays (top-left) */}
              <svg
                viewBox="0 0 36 42"
                fill="none"
                className="hidden sm:block absolute top-7 left-5 w-7 h-8 text-[#F4C430]/90"
                aria-hidden="true"
              >
                <path
                  d="M28 14L14 4M24 23L6 17M22 33L8 34"
                  stroke="currentColor"
                  strokeWidth="2.8"
                  strokeLinecap="round"
                />
              </svg>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
                {/* Left Offer & Single CTA */}
                <div className="lg:col-span-7 sm:pl-4">
                  <p className="text-lg sm:text-xl font-bold text-[#F4C430] tracking-tight">
                    $5 — One-Time Payment
                  </p>

                  <h2 className="mt-2 font-serif font-bold text-3xl sm:text-4xl text-white leading-[1.15] tracking-tight text-balance">
                    Take the First Step Toward Healthier Choices.
                  </h2>

                  <p className="mt-3.5 text-base text-slate-200 max-w-lg leading-relaxed">
                    Get <strong className="font-semibold text-white">The Shared Kitchen Reset</strong>{' '}
                    as an instant downloadable PDF ebook with 9 printable templates.
                  </p>

                  <div className="mt-7 flex flex-col items-start">
                    <button
                      type="button"
                      onClick={handleBuyClick}
                      className="inline-flex items-center justify-center gap-2.5 bg-[#F4C430] hover:bg-[#E5B422] active:translate-y-px text-[#0D213F] font-bold text-base sm:text-[17px] px-8 py-4 rounded-full shadow-[0_8px_24px_rgba(244,196,48,0.28)] transition-all duration-150 cursor-pointer whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0D213F]"
                    >
                      <span>Get The Shared Kitchen Reset</span>
                      <ArrowRight className="w-4 h-4 shrink-0" aria-hidden="true" />
                    </button>

                    <p className="mt-3.5 text-sm text-slate-300">
                      Instant Download <span aria-hidden="true">·</span> PDF Guide{' '}
                      <span aria-hidden="true">·</span> No subscriptions
                    </p>
                  </div>
                </div>

                {/* Right 3 Core Pillars */}
                <div className="lg:col-span-5 grid grid-cols-3 gap-4 sm:gap-6 pt-4 lg:pt-0 border-t border-white/12 lg:border-t-0">
                  <div className="flex flex-col items-center text-center px-2">
                    <Heart className="w-9 h-9 text-[#F4C430] stroke-[1.75]" aria-hidden="true" />
                    <span className="mt-3 text-sm font-medium text-slate-100 leading-snug">
                      Eat Healthier Your Way
                    </span>
                  </div>

                  <div className="flex flex-col items-center text-center px-2 border-l border-white/15">
                    <HouseUtensilsIcon className="w-9 h-9 text-[#F4C430]" />
                    <span className="mt-3 text-sm font-medium text-slate-100 leading-snug">
                      Keep the Peace
                    </span>
                  </div>

                  <div className="flex flex-col items-center text-center px-2 border-l border-white/15">
                    <Smile className="w-9 h-9 text-[#F4C430] stroke-[1.75]" aria-hidden="true" />
                    <span className="mt-3 text-sm font-medium text-slate-100 leading-snug">
                      Feel Better Long-Term
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Quiet Footer */}
      <footer className="border-t border-slate-200/80 bg-[#FAF9F6] py-8">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs sm:text-sm text-[#64748B]">
          <span>© 2026 The Shared Kitchen Reset</span>
          <span>Eat well. Keep the peace. · Instant PDF Download</span>
        </div>
      </footer>

      {/* Checkout Preview Modal (only opens on explicit Buy CTA click) */}
      {isCheckoutOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#09162B]/70 backdrop-blur-xs"
          role="dialog"
          aria-modal="true"
          aria-labelledby="checkout-modal-title"
        >
          <div className="relative w-full max-w-md bg-white rounded-2xl border border-slate-200 shadow-2xl p-6 sm:p-8 text-[#0F1E36]">
            <button
              type="button"
              onClick={() => setIsCheckoutOpen(false)}
              aria-label="Close checkout summary"
              className="absolute top-4 right-4 w-9 h-9 rounded-full flex items-center justify-center text-slate-500 hover:text-[#0D213F] hover:bg-slate-100 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#0D213F] text-[#F4C430] flex items-center justify-center shrink-0">
                <FileText className="w-5 h-5" aria-hidden="true" />
              </div>
              <div>
                <h3 id="checkout-modal-title" className="font-serif font-bold text-xl text-[#0D213F]">
                  The Shared Kitchen Reset
                </h3>
                <p className="text-sm text-[#475569]">$5 — One-Time Payment</p>
              </div>
            </div>

            <div className="mt-5 pt-5 border-t border-slate-200 text-sm text-[#334155] space-y-2.5">
              <p className="font-semibold text-[#0D213F]">Included in your download:</p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#0D213F] shrink-0" aria-hidden="true" />
                  <span>7-Chapter Shared Kitchen System (PDF Ebook)</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#0D213F] shrink-0" aria-hidden="true" />
                  <span>9 Printable Templates &amp; 30-Day Habit Calendar</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#0D213F] shrink-0" aria-hidden="true" />
                  <span>Word-for-Word Scripts + Fridge-Door Cheat Sheet</span>
                </li>
              </ul>
            </div>

            <div className="mt-6 rounded-xl bg-[#FAF9F6] border border-slate-200 p-4 text-xs leading-relaxed text-[#475569]">
              <p className="font-semibold text-[#0D213F]">Checkout Link Ready to Connect</p>
              <p className="mt-1">
                Replace <code className="font-mono text-[#0D213F]">CHECKOUT_URL</code> in{' '}
                <code className="font-mono text-[#0D213F]">src/App.tsx</code> with your live Gumroad
                or Whop payment link to send buyers straight to checkout.
              </p>
            </div>

            <div className="mt-6 flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={() => setIsCheckoutOpen(false)}
                className="px-4 py-2.5 text-sm font-medium text-[#475569] hover:text-[#0D213F] transition-colors cursor-pointer"
              >
                Back to page
              </button>
              <a
                href={isPlaceholderLink ? '#buy' : CHECKOUT_URL}
                onClick={(e) => {
                  if (isPlaceholderLink) {
                    e.preventDefault();
                    setIsCheckoutOpen(false);
                  }
                }}
                className="inline-flex items-center gap-2 bg-[#F4C430] hover:bg-[#E5B422] text-[#0D213F] font-bold text-sm px-5 py-2.5 rounded-full transition-colors whitespace-nowrap"
              >
                <span>Proceed to $5 Checkout</span>
                <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
