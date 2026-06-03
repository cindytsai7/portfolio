interface MetricItem {
  value: string;
  label: string;
}

export default function MetricStats({ metrics }: { metrics: MetricItem[] }) {
  return (
    <div className="flex gap-12">
      {metrics.map((metric) => (
        <div key={metric.label} className="flex flex-col gap-1">
          <p className="text-display font-bold text-portfolio-primary leading-none">
            {metric.value}
          </p>
          <p className="text-caption font-mono uppercase tracking-widest text-portfolio-muted">
            {metric.label}
          </p>
        </div>
      ))}
    </div>
  );
}
