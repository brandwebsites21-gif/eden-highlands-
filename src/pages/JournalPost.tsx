import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock, Phone, ArrowRight } from 'lucide-react';
import { JOURNAL_DATA, HOTEL_PHONE, HOTEL_PHONE_RAW } from '../data/hotelData';
import PlaceholderImg from '../components/PlaceholderImg';
import { Reveal } from '../components/Motion';

export default function JournalPost() {
  const { slug } = useParams<{ slug: string }>();

  const post = JOURNAL_DATA.find(p => p.slug === slug) || JOURNAL_DATA[0];
  const postIndex = JOURNAL_DATA.findIndex(p => p.slug === post.slug);
  const nextPost = JOURNAL_DATA[(postIndex + 1) % JOURNAL_DATA.length];

  return (
    <article className="py-10" id="journal-post-page">
      <div className="wrap">
        {/* Back navigation */}
        <div className="mb-8">
          <Link
            id="link-back-journal"
            to="/journal"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[var(--ink-soft)] hover:text-[var(--ink)] transition-colors"
          >
            <ArrowLeft size={14} />
            <span>Back to Journal</span>
          </Link>
        </div>

        {/* Article Masthead */}
        <Reveal className="max-w-3xl mb-10" id="journal-post-masthead">
          <div className="flex items-center gap-3 text-xs text-[var(--ink-soft)] mb-4">
            <span className="font-semibold uppercase tracking-wider text-[var(--terra)] bg-[var(--card-pink)] px-3 py-1 rounded-full">
              {post.category}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Clock size={13} />
              {post.readTime}
            </span>
            <span>•</span>
            <span>{post.date}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-serif font-normal leading-[1.18] mb-4 text-[var(--ink)]">
            {post.title}
          </h1>

          <p className="text-base sm:text-lg text-[var(--ink-soft)] font-sans leading-relaxed">
            {post.subtitle}
          </p>
        </Reveal>

        {/* Hero Photo Block */}
        <Reveal delay={0.08} className="mb-12" id="journal-post-hero-image">
          <PlaceholderImg
            variant={post.bgVariant}
            caption={post.imageCaption}
            subtitle="Eden Highlands Hotel, Mbeya, Tanzania"
            className="aspect-[16/9] sm:aspect-[21/9] rounded-2xl shadow-sm min-h-[300px]"
          />
        </Reveal>

        {/* Longform Editorial Content (~65ch max width) */}
        <div className="max-w-[65ch] mx-auto text-[var(--ink)] mb-16" id="journal-post-body">
          {/* Intro Paragraph */}
          <p className="text-lg text-[var(--ink)] font-sans leading-relaxed mb-8 border-b border-[var(--rule)]/60 pb-8">
            {post.content.intro}
          </p>

          {/* Sections */}
          {post.content.sections.map((sec, secIdx) => (
            <Reveal key={secIdx} className="mb-10" id={`post-section-${secIdx}`}>
              {sec.heading && (
                <h2 className="text-2xl sm:text-3xl font-serif font-normal text-[var(--ink)] mt-8 mb-4">
                  {sec.heading}
                </h2>
              )}

              {sec.paragraphs.map((p, pIdx) => (
                <p key={pIdx} className="text-base text-[var(--ink-soft)] leading-[1.75] mb-5">
                  {p}
                </p>
              ))}

              {sec.pullQuote && (
                <blockquote className="my-8 py-4 px-6 border-l-2 border-[var(--terra)] bg-[var(--card-cream)] rounded-r-xl">
                  <p className="font-serif text-lg sm:text-xl text-[var(--ink)] leading-relaxed mb-0">
                    "{sec.pullQuote}"
                  </p>
                </blockquote>
              )}
            </Reveal>
          ))}

          {/* Hotel Note & Reservation Callout */}
          <Reveal className="mt-12 p-6 sm:p-8 rounded-2xl bg-[var(--card-pink)] border border-[var(--rule)]/60 text-sm" id="post-reservation-box">
            <span className="eyebrow text-[var(--terra)] mb-2">Highland Lodging</span>
            <h4 className="text-xl font-serif text-[var(--ink)] mb-2">
              Stay with us on the TANZAM Highway
            </h4>
            <p className="text-xs sm:text-sm text-[var(--ink-soft)] leading-relaxed mb-4">
              Planning your road trip across the southern highlands? Reserve a self-contained room with private kitchen, air conditioning, and secure parking.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <Link to="/rooms" className="pill-btn text-xs font-medium bg-[var(--green-dark)] text-white border-[var(--green-dark)]">
                <span>View Rooms & Rates</span>
              </Link>
              <a href={`tel:${HOTEL_PHONE_RAW}`} className="pill-btn text-xs font-medium bg-white">
                <Phone size={12} className="mr-1.5 inline" />
                <span>Call {HOTEL_PHONE}</span>
              </a>
            </div>
          </Reveal>
        </div>

        {/* Next Story Card */}
        {nextPost && (
          <Reveal className="max-w-3xl mx-auto pt-10 border-t border-[var(--rule)]" id="post-next-story">
            <span className="eyebrow">Next in Journal</span>
            <div className="bg-[var(--card-cream)] p-6 rounded-2xl border border-[var(--rule)] flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <span className="text-xs text-[var(--terra)] font-semibold uppercase tracking-wider block mb-1">
                  {nextPost.category}
                </span>
                <h3 className="text-lg font-serif">
                  <Link to={`/journal/${nextPost.slug}`} className="hover:text-[var(--terra)] transition-colors">
                    {nextPost.title}
                  </Link>
                </h3>
              </div>
              <Link
                to={`/journal/${nextPost.slug}`}
                className="pill-btn text-xs font-medium bg-white shrink-0"
              >
                <span>Read next story</span>
                <ArrowRight size={13} className="ml-1 inline" />
              </Link>
            </div>
          </Reveal>
        )}
      </div>
    </article>
  );
}
