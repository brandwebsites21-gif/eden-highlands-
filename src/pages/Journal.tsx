import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock } from 'lucide-react';
import { JOURNAL_DATA } from '../data/hotelData';
import SectionHead from '../components/SectionHead';
import PlaceholderImg from '../components/PlaceholderImg';
import { Reveal, StaggerItem, SectionDivider } from '../components/Motion';

export default function Journal() {
  const featuredPost = JOURNAL_DATA[0];
  const remainingPosts = JOURNAL_DATA.slice(1);

  return (
    <div className="py-10" id="journal-page">
      <div className="wrap">
        {/* Header */}
        <Reveal className="mb-14 max-w-3xl" id="journal-header">
          <span className="eyebrow">Highland Journal</span>
          <h1 className="text-3xl sm:text-4xl lg:text-[46px] font-normal leading-tight mb-4">
            Notes on road travel, highland calm, and southern discovery.
          </h1>
          <p className="text-[var(--ink-soft)] text-base sm:text-lg leading-relaxed">
            Essays, field guides, and hospitality reflections from our sanctuary along the TANZAM Highway in Mbeya, Tanzania.
          </p>
        </Reveal>

        {/* Featured Editorial Story */}
        {featuredPost && (
          <Reveal className="bg-[var(--card-cream)] border border-[var(--rule)] rounded-2xl p-6 sm:p-10 mb-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-sm" id="journal-featured-post">
            <div className="lg:col-span-6 order-2 lg:order-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 text-xs text-[var(--ink-soft)] mb-3">
                  <span className="font-semibold uppercase tracking-wider text-[var(--terra)] bg-[var(--card-pink)] px-2.5 py-0.5 rounded-full">
                    {featuredPost.category}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Clock size={12} />
                    {featuredPost.readTime}
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif mb-3 leading-snug">
                  <Link to={`/journal/${featuredPost.slug}`} className="hover:text-[var(--terra)] transition-colors">
                    {featuredPost.title}
                  </Link>
                </h2>

                <p className="text-sm sm:text-base text-[var(--ink-soft)] leading-relaxed mb-6">
                  {featuredPost.excerpt}
                </p>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-[var(--rule)]/60">
                <span className="text-xs text-[var(--ink-soft)]">
                  {featuredPost.date}
                </span>
                <Link
                  id="btn-read-featured-post"
                  to={`/journal/${featuredPost.slug}`}
                  className="pill-btn font-medium text-xs bg-[var(--green-dark)] text-white border-[var(--green-dark)]"
                >
                  <span>Read full story</span>
                  <ArrowRight size={13} className="ml-1 inline" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6 order-1 lg:order-2">
              <Link to={`/journal/${featuredPost.slug}`} className="block group overflow-hidden rounded-xl">
                <PlaceholderImg
                  variant={featuredPost.bgVariant}
                  caption={featuredPost.imageCaption}
                  subtitle="Featured Journal Essay"
                  className="aspect-[4/3] group-hover:scale-[1.01] transition-transform duration-500 shadow-inner"
                />
              </Link>
            </div>
          </Reveal>
        )}

        {/* Stories Grid */}
        <div className="mb-16" id="journal-recent-entries">
          <Reveal>
            <SectionHead
              eyebrow="Recent Entries"
              title="Stories & Field Guides"
            />
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {remainingPosts.map((post, idx) => (
              <StaggerItem
                key={post.slug}
                index={idx}
                stepDelay={0.08}
                className="bg-[var(--card-cream)] border border-[var(--rule)] rounded-2xl p-6 flex flex-col justify-between hover:border-[var(--ink-soft)]/40 transition-all group"
                id={`journal-entry-${post.slug}`}
              >
                <div>
                  <Link to={`/journal/${post.slug}`} className="block overflow-hidden rounded-xl mb-5">
                    <PlaceholderImg
                      variant={post.bgVariant}
                      caption={post.imageCaption}
                      className="aspect-[16/10] group-hover:scale-[1.02] transition-transform duration-500 shadow-inner"
                    />
                  </Link>

                  <div className="flex items-center gap-2 text-[11px] text-[var(--ink-soft)] mb-2">
                    <span className="font-semibold uppercase tracking-wider text-[var(--terra)]">
                      {post.category}
                    </span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>

                  <h3 className="text-xl font-serif mb-2 leading-snug group-hover:text-[var(--terra)] transition-colors">
                    <Link to={`/journal/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h3>

                  <p className="text-xs sm:text-sm text-[var(--ink-soft)] leading-relaxed mb-6">
                    {post.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-[var(--rule)]/60 flex items-center justify-between text-xs">
                  <span className="text-[var(--ink-soft)]">{post.date}</span>
                  <Link
                    to={`/journal/${post.slug}`}
                    className="font-semibold text-[var(--green-dark)] hover:underline flex items-center gap-1"
                  >
                    <span>Read essay</span>
                    <ArrowRight size={12} />
                  </Link>
                </div>
              </StaggerItem>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
