interface MetadataItem {
  label: string;
  value: string;
}

export default function MetadataGrid({ items }: { items: MetadataItem[] }) {
  return (
    <div className="grid grid-cols-2 gap-x-8 gap-y-0">
      {items.map((item) => (
        <div key={item.label} className="flex flex-col gap-1 pb-5">
          <p className="text-caption font-mono uppercase tracking-widest text-portfolio-muted">
            {item.label}
          </p>
          <p className="text-body font-semibold text-portfolio-primary">{item.value}</p>
          <hr className="border-t border-portfolio-muted/30 mt-2" />
        </div>
      ))}
    </div>
  );
}
