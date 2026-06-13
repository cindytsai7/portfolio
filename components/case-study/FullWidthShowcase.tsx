interface FullWidthShowcaseProps {
  image?: string;
  alt?: string;
  label?: string;
  heading?: string;
  body?: string;
  placeholderLabel?: string;
  rounded?: boolean;
}

export default function FullWidthShowcase({
  image,
  alt = "",
  label,
  heading,
  body,
  placeholderLabel,
  rounded = true,
}: FullWidthShowcaseProps) {
  return (
    <div className="flex flex-col gap-6">
      {image ? (
        <img
          src={image}
          alt={alt}
          className={`w-full object-cover${rounded ? " rounded-card" : ""}`}
        />
      ) : (
        <div className="surface-card w-full aspect-[16/9] bg-portfolio-surface rounded-card flex items-center justify-center">
          {placeholderLabel && (
            <p className="text-caption font-mono uppercase tracking-widest text-portfolio-muted">
              {placeholderLabel}
            </p>
          )}
        </div>
      )}
      {(label || heading || body) && (
        <div className="flex flex-col gap-2 w-3/4">
          {label && (
            <p className="text-caption font-mono uppercase tracking-widest text-portfolio-muted">
              {label}
            </p>
          )}
          {heading && (
            <p className="text-body font-semibold text-portfolio-primary leading-tight">{heading}</p>
          )}
          {body && (
            <p className="text-body text-portfolio-muted leading-snug">{body}</p>
          )}
        </div>
      )}
    </div>
  );
}
