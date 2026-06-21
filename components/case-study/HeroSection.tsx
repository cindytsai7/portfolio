import { Fragment } from 'react';

interface MetadataItem {
  label: string;
  value: string;
}

interface HeroSectionProps {
  index?: string;
  tags?: string[];
  title: string;
  notice?: string;
  body: string | string[];
  metadata: MetadataItem[];
  heroImage?: string;
  bare?: boolean;
}

export default function HeroSection({
  index,
  tags,
  title,
  notice,
  body,
  metadata,
  heroImage,
  bare = false,
}: HeroSectionProps) {
  const bodyLines = Array.isArray(body) ? body : [body];

  return (
    <section className="px-4 md:px-8 flex flex-col gap-8">
      {/* Single hero card */}
      <div className={bare ? "flex flex-col gap-10 py-4 md:py-6" : "surface-card bg-portfolio-surface/50 rounded-card px-6 py-8 md:px-10 md:py-12 flex flex-col gap-10"}>

        {/* Top row: tags + title + body / metadata */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10">
          {/* Left: tags + title + body */}
          <div className="flex flex-col gap-6 flex-1 max-w-[720px]">
            {(index || (tags && tags.length > 0)) && (
              <div className="flex items-center gap-[8px] font-mono text-[13px] tracking-[0.05em] uppercase whitespace-nowrap">
                {index && <span className="text-portfolio-primary">{index}</span>}
                {tags?.map((tag) => (
                  <Fragment key={tag}>
                    <span className="text-portfolio-rule">·</span>
                    <span className="text-portfolio-muted">{tag}</span>
                  </Fragment>
                ))}
              </div>
            )}
            <div className="flex flex-col gap-4">
              <h1 className="text-h2 font-bold leading-[1.08] tracking-[-0.025em] text-portfolio-primary">
                {title}
              </h1>
              <div className="flex flex-col gap-3">
                {bodyLines.map((line, i) => (
                  <p key={i} className="text-body text-portfolio-muted">{line}</p>
                ))}
              </div>
            </div>
          </div>

          {/* Right: stacked metadata */}
          <div className="flex flex-col gap-4 md:w-[300px] shrink-0">
            {metadata.map((item, i) => (
              <div key={item.label} className="flex flex-col gap-2">
                <p className="text-caption font-mono uppercase tracking-widest text-portfolio-muted">
                  {item.label}
                </p>
                <p className="text-body font-medium text-portfolio-primary">{item.value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* NDA banner — full width across the card */}
        {notice && (
          <div className="bg-portfolio-background rounded-[12px] px-5 py-4">
            <p className="text-body font-medium text-portfolio-muted">{notice}</p>
          </div>
        )}

      </div>

      {/* Hero image */}
      {heroImage && (
        <img
          src={heroImage}
          alt="Project prototype"
          className="w-full rounded-[20px] object-cover"
        />
      )}
    </section>
  );
}
