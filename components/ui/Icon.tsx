"use client";

import {
  Briefcase,
  Building2,
  CalendarCheck,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ClipboardList,
  ExternalLink,
  FileText,
  Gavel,
  HeartHandshake,
  Landmark,
  Mail,
  MapPin,
  Phone,
  Quote,
  Scale,
  ScrollText,
  Send,
  ShieldCheck,
  Star,
  Users,
  type LucideIcon,
} from "lucide-react";

const ICONS: Record<string, LucideIcon> = {
  building: Building2,
  landmark: Landmark,
  gavel: Gavel,
  scale: Scale,
  briefcase: Briefcase,
  scroll: ScrollText,
  handshake: HeartHandshake,
  phone: Phone,
  mail: Mail,
  pin: MapPin,
  quote: Quote,
  star: Star,
  check: Check,
  shield: ShieldCheck,
  file: FileText,
  users: Users,
  calendar: CalendarCheck,
  list: ClipboardList,
  send: Send,
  external: ExternalLink,
  down: ChevronDown,
  left: ChevronLeft,
  right: ChevronRight,
};

/** Icons are referenced by string key so server components can pass plain data. */
export function Icon({ name, className }: { name: string; className?: string }) {
  const Glyph = ICONS[name] ?? Scale;
  return <Glyph aria-hidden="true" className={className} />;
}
