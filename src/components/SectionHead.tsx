import React from 'react';
import { Link } from 'react-router-dom';

interface SectionHeadProps {
  eyebrow: string;
  title: string;
  note?: string;
  ctaText?: string;
  ctaHref?: string;
  className?: string;
}

export default function SectionHead({
  eyebrow,
  title,
  note,
  ctaText,
  ctaHref,
  className = ''
}: SectionHeadProps) {
  return (
    <div className={`sec-head ${className}`}>
      <div>
        <span className="eyebrow">{eyebrow}</span>
        <h2>{title}</h2>
      </div>
      {note && <span className="sec-note">{note}</span>}
      {ctaText && ctaHref && (
        ctaHref.startsWith('#') ? (
          <a className="cta-link" href={ctaHref}>
            {ctaText}
          </a>
        ) : (
          <Link className="cta-link" to={ctaHref}>
            {ctaText}
          </Link>
        )
      )}
    </div>
  );
}
