interface NumberedItem {
  priority: string;
  title: string;
  description: string;
}

const priorityColor: Record<string, string> = {
  P0: "text-portfolio-accent",
  P1: "text-[#4F68B0]",
};

export default function NumberedList({ items }: { items: NumberedItem[] }) {
  return (
    <div className="flex flex-col">
      {items.map((item, i) => (
        <div key={i}>
          {i > 0 && <div className="bg-[#c7c7c2] h-px w-full" />}
          <div className="flex gap-5 items-start py-5">
            <span
              className={`text-h1 font-bold leading-none shrink-0 w-12 ${priorityColor[item.priority] ?? "text-portfolio-muted"}`}
            >
              {item.priority}
            </span>
            <div className="flex flex-col gap-1 pt-1">
              <p className="text-body font-semibold text-portfolio-primary">{item.title}</p>
              <p className="text-body text-portfolio-muted">{item.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
