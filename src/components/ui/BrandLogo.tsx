import { siteConfig } from "@/data/portfolio";
import { BrandIcon } from "@/components/ui/BrandIcon";
import { cn } from "@/lib/utils";

interface BrandLogoProps {
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

export function BrandLogo({ className, onClick }: BrandLogoProps) {
  return (
    <a
      href="#home"
      onClick={onClick}
      className={cn("inline-flex items-center gap-2 transition-opacity hover:opacity-80 active:scale-95 sm:gap-3", className)}
    >
      <span className="sm:hidden">
        <BrandIcon size={32} />
      </span>
      <span className="hidden sm:block">
        <BrandIcon size={36} />
      </span>
      <span className="hidden text-xl font-bold tracking-tight text-white sm:inline">{siteConfig.brand}</span>
    </a>
  );
}
