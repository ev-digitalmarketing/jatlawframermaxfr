"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { ButtonLink } from "@/components/ui/Button";
import { Coin } from "@/components/ui/Coin";
import { Icon } from "@/components/ui/Icon";
import { services } from "@/lib/services";
import { nav, site } from "@/lib/site";

function NavLink({ href, label, active }: { href: string; label: string; active: boolean }) {
  return (
    <Link
      href={href}
      aria-current={active ? "page" : undefined}
      className={`relative px-3 py-2 font-heading text-sm font-semibold transition-colors ${
        active ? "text-navy-950" : "text-navy-800 hover:text-navy-950"
      }`}
    >
      {label}
      {active && (
        <motion.span
          layoutId="nav-underline"
          className="absolute inset-x-3 -bottom-0.5 h-[3px] bg-gold-500"
          transition={{ type: "spring", stiffness: 380, damping: 30 }}
        />
      )}
    </Link>
  );
}

function ServicesMenu({
  open,
  setOpen,
  active,
}: {
  open: boolean;
  setOpen: (value: boolean) => void;
  active: boolean;
}) {
  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onKeyDown={(e) => {
        if (e.key === "Escape") setOpen(false);
      }}
    >
      <div className="flex items-center">
        <NavLink href="/services" label="Services" active={active} />
        <button
          type="button"
          aria-label="Show services menu"
          aria-haspopup="true"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
          className="-ml-2 grid h-7 w-7 place-items-center rounded text-navy-800 hover:text-navy-950"
        >
          <Icon name="down" className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`} />
        </button>
      </div>
      <div
        className={`absolute left-1/2 top-full z-50 w-[620px] -translate-x-1/2 pt-3 [perspective:900px] ${
          open ? "" : "pointer-events-none"
        }`}
      >
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: 8, rotateX: -10 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              exit={{ opacity: 0, y: 8, rotateX: -10 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              style={{ transformOrigin: "top center" }}
              className="border border-gold-500/60 border-t-4 border-t-gold-500 bg-ivory p-3 shadow-2xl"
            >
              <ul className="grid grid-cols-2 gap-1">
                {services.map((s) => (
                  <li key={s.slug}>
                    <Link
                      href={`/services/${s.slug}`}
                      className="flex items-center gap-3 rounded px-3 py-2.5 transition-colors hover:bg-gold-100"
                    >
                      <Coin icon={s.icon} size="sm" />
                      <span>
                        <span className="block font-heading text-sm font-semibold text-navy-900">{s.title}</span>
                        <span className="block text-xs text-navy-900/70">{s.kicker}</span>
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export function Header() {
  const pathname = usePathname();
  const [menu, setMenu] = useState(false);
  const [mega, setMega] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 28, mass: 0.4 });

  useEffect(() => {
    setMenu(false);
    setMega(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menu ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menu]);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));
  const mobileLink = "block py-2.5 font-heading text-lg font-semibold hover:text-gold-300";

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-gold-500/70 bg-ivory/95 backdrop-blur supports-[backdrop-filter]:bg-ivory/85">
        <div className="container-page flex h-[var(--header-h)] items-center justify-between gap-3">
          <Link href="/" aria-label={`${site.short} home`} className="shrink-0">
            <Image
              src="/logo.png"
              alt={`${site.short}, ${site.descriptor}`}
              width={900}
              height={373}
              priority
              className="h-9 w-auto sm:h-12"
            />
          </Link>

          <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
            {nav.map((item) =>
              item.label === "Services" ? (
                <ServicesMenu key={item.href} open={mega} setOpen={setMega} active={isActive(item.href)} />
              ) : (
                <NavLink key={item.href} href={item.href} label={item.label} active={isActive(item.href)} />
              ),
            )}
          </nav>

          <div className="flex items-center gap-2">
            <ButtonLink href="/consultation" size="xs">
              Free consultation
            </ButtonLink>
            <button
              type="button"
              aria-label={menu ? "Close menu" : "Open menu"}
              aria-expanded={menu}
              aria-controls="mobile-menu"
              onClick={() => setMenu((v) => !v)}
              className="grid h-10 w-10 place-items-center rounded-md text-navy-900 lg:hidden"
            >
              {menu ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
        <motion.div
          aria-hidden="true"
          style={{ scaleX: progress }}
          className="absolute inset-x-0 -bottom-px h-[3px] origin-left bg-gradient-to-r from-gold-400 to-gold-600"
        />
      </header>

      {/* Rendered outside <header>: backdrop-filter would otherwise trap this fixed panel inside the header. */}
      <AnimatePresence>
        {menu && (
          <motion.nav
            id="mobile-menu"
            aria-label="Mobile"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="tone-navy fixed inset-x-0 bottom-0 top-[var(--header-h)] z-40 overflow-y-auto lg:hidden"
          >
            <ul className="container-page py-5">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={mobileLink} aria-current={isActive(item.href) ? "page" : undefined}>
                    {item.label}
                  </Link>
                  {item.label === "Services" && (
                    <ul className="mb-2 ml-1 border-l-2 border-gold-500/60 pl-4">
                      {services.map((s) => (
                        <li key={s.slug}>
                          <Link
                            href={`/services/${s.slug}`}
                            className="block py-1.5 text-[15px] text-ivory/80 hover:text-gold-300"
                          >
                            {s.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
            <div className="container-page space-y-3 border-t border-white/15 pb-10 pt-5 text-[15px]">
              <a href={site.phone.href} className="flex items-center gap-3 hover:text-gold-300">
                <Icon name="phone" className="h-5 w-5 text-gold-400" />
                {site.phone.display}
              </a>
              <a href={`mailto:${site.email}`} className="flex items-center gap-3 hover:text-gold-300">
                <Icon name="mail" className="h-5 w-5 text-gold-400" />
                {site.email}
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}
