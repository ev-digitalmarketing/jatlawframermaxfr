"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Slab } from "@/components/three-d/Slab";
import { Icon } from "@/components/ui/Icon";

const LISTS = [
  {
    id: "property",
    label: "Buying, selling or refinancing",
    items: [
      "Agreement of Purchase and Sale and any amendments",
      "The listing or MLS details",
      "Mortgage commitment or lender details",
      "Government-issued photo ID",
      "Names and details of any co-owners or co-buyers",
    ],
  },
  {
    id: "dispute",
    label: "A dispute or lawsuit",
    items: [
      "Contracts, agreements and invoices",
      "Emails, letters and messages about the dispute",
      "Any claim, notice or demand you have received",
      "A short timeline of key dates and events",
      "Any deadlines mentioned in the documents you hold",
    ],
  },
  {
    id: "business",
    label: "Starting or running a business",
    items: [
      "Your proposed or existing business name",
      "Names and roles of owners and directors",
      "Existing articles, agreements or minute books",
      "Draft contracts or offers you want reviewed",
      "A summary of your goals for the business",
    ],
  },
  {
    id: "estate",
    label: "A will or an estate",
    items: [
      "A list of your assets and debts",
      "Names and details of family members and beneficiaries",
      "Any existing wills or powers of attorney",
      "The will and death certificate, if you are administering an estate",
      "The people you would like to appoint as trustees or attorneys",
    ],
  },
  {
    id: "divorce",
    label: "Divorce or separation",
    items: [
      "Your marriage certificate and date of separation",
      "Details of any children",
      "Any separation agreement or court orders",
      "A summary of income, assets and debts",
      "Your spouse's contact details",
    ],
  },
];

/** Pick your situation, see what to bring. */
export function BringList() {
  const [active, setActive] = useState(LISTS[0].id);
  const current = LISTS.find((l) => l.id === active) ?? LISTS[0];

  return (
    <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
      <div role="group" aria-label="Choose your situation" className="flex flex-wrap gap-2.5 lg:flex-col">
        {LISTS.map((list) => {
          const on = list.id === active;
          return (
            <motion.button
              key={list.id}
              type="button"
              aria-pressed={on}
              onClick={() => setActive(list.id)}
              whileHover={{ x: 4 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className={`rounded-md border px-4 py-3 text-left font-heading text-sm font-semibold transition-colors ${
                on
                  ? "border-gold-400 bg-gradient-to-b from-gold-300 to-gold-500 text-navy-950 shadow-btn-gold"
                  : "border-[color:var(--line)] bg-[color:var(--card)] text-[color:var(--card-fg)] hover:border-gold-400"
              }`}
            >
              {list.label}
            </motion.button>
          );
        })}
      </div>

      <Slab inverse max={4}>
        <div className="p-6 pt-9 sm:p-8 sm:pt-11">
          <h3 className="text-xl">What to bring</h3>
          <AnimatePresence mode="wait" initial={false}>
            <motion.ul
              key={current.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="mt-4 space-y-3"
            >
              {current.items.map((item) => (
                <li key={item} className="flex items-start gap-3 text-[15px] leading-6">
                  <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-gold-500 text-navy-950">
                    <Icon name="check" className="h-3.5 w-3.5" />
                  </span>
                  {item}
                </li>
              ))}
            </motion.ul>
          </AnimatePresence>
          <p className="mt-5 text-sm opacity-75">Do not worry if you do not have everything. Bring what you can.</p>
        </div>
      </Slab>
    </div>
  );
}
