const nav = [
  { label: "Opportunity", href: "#opportunity" },
  { label: "Markets", href: "#markets" },
  { label: "Creators", href: "#creators" },
  { label: "Ecosystems", href: "#ecosystems" },
  { label: "90 Days", href: "#90-days" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur-md">
      <div className="mx-auto grid max-w-[1200px] grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-3.5 sm:px-8">
        <a href="#top" className="flex min-w-0 items-center gap-3">
          <span className="truncate font-editorial text-[15px] font-medium tracking-tight sm:text-base">
            UpScrolled MENA Growth Map
          </span>
          <span className="hidden shrink-0 border border-border px-2 py-[3px] text-[10px] font-medium uppercase tracking-[0.14em] text-muted-foreground lg:inline-block">
            Unofficial strategic concept
          </span>
        </a>

        <nav className="flex items-center gap-6">
          <ul className="hidden items-center gap-6 lg:flex">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-[13px] text-muted-foreground transition-colors hover:text-foreground"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#opportunity"
            className="shrink-0 bg-foreground px-4 py-2 text-[12px] font-medium tracking-tight text-background transition-colors hover:bg-primary sm:text-[13px]"
          >
            Explore the opportunity
          </a>
        </nav>
      </div>
    </header>
  );
}
