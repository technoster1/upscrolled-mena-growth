import type { ReactNode } from "react";

type Props = {
  id: string;
  index: string;
  eyebrow: string;
  title: string;
  description: string;
  children?: ReactNode;
};

export function SectionPlaceholder({ id, index, eyebrow, title, description, children }: Props) {
  return (
    <section id={id} className="border-b border-border">
      <div className="mx-auto grid max-w-[1200px] gap-8 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[minmax(0,320px)_minmax(0,1fr)] lg:gap-16">
        <div>
          <p className="label-eyebrow text-primary">
            {index} — {eyebrow}
          </p>
          <h2 className="mt-4 font-editorial text-[1.85rem] leading-tight tracking-[-0.015em] sm:text-[2.25rem]">
            {title}
          </h2>
        </div>
        <div className="lg:pt-2">
          <p className="max-w-2xl text-[15px] leading-relaxed text-muted-foreground">
            {description}
          </p>
          <div className="mt-8 border border-dashed border-border bg-cream-deep px-6 py-10">
            {children ?? (
              <p className="text-[12px] uppercase tracking-[0.14em] text-muted-foreground">
                Reserved for data
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
