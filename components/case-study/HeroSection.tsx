interface MetadataItem {
  label: string;
  value: string;
}

interface HeroSectionProps {
  tags: string[];
  title: string;
  body: string;
  metadata: MetadataItem[];
  heroImage?: string;
}

export default function HeroSection({
  tags,
  title,
  body,
  metadata,
  heroImage,
}: HeroSectionProps) {
  return (
    <section className="px-4 md:px-8 pt-4 md:pt-8 flex flex-col gap-8">
      {/* Single hero card */}
      <div className="bg-portfolio-surface rounded-[20px] p-8 md:p-12 flex flex-col md:flex-row md:items-start md:justify-between gap-10">

        {/* Left: tags + title + body */}
        <div className="flex flex-col gap-6 flex-1 max-w-[720px]">
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="border border-[#c7c7c2] rounded-full px-3 py-[5px] text-caption font-mono text-portfolio-muted uppercase tracking-wider whitespace-nowrap"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="text-h1 font-bold leading-tight tracking-tight text-portfolio-primary">
              {title}
            </h1>
            <p className="text-body text-portfolio-muted">{body}</p>
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
              {i < metadata.length - 1 && (
                <div className="bg-portfolio-rule h-px w-full mt-1" />
              )}
            </div>
          ))}
        </div>

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
