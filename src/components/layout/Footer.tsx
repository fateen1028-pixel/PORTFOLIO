import { siteConfig } from "@/data/portfolio";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="divider w-full py-8 max-lg:px-0 max-lg:pb-[calc(6.5rem+env(safe-area-inset-bottom,0px))]">
      <div className="container-main align-mobile-start flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-zinc-600">
          © {year} {siteConfig.name}
        </p>
        <p className="text-xs text-zinc-600">{siteConfig.location}</p>
      </div>
    </footer>
  );
}
