export type Service = {
  slug: string;
  title: string;
  kicker: string;
  /** key understood by components/ui/Icon.tsx */
  icon: string;
  summary: string;
  tagline: string;
  intro: string[];
  handle: { title: string; text: string }[];
  steps: { title: string; text: string }[];
  faqs: { q: string; a: string }[];
};

export const services: Service[] = [
  {
    slug: "real-estate-transactions",
    title: "Real Estate Transactions",
    kicker: "Residential and corporate",
    icon: "building",
    summary:
      "Buying, selling, refinancing or renewing. We manage title, funds and closing so your move happens on schedule.",
    tagline:
      "From the first offer to the day you get the keys, we protect your interests and keep every deadline moving.",
    intro: [
      "A property transaction is often the largest financial commitment you will make. We review your agreement, complete the title and due-diligence work, prepare the mortgage and closing documents, and make sure funds and registrations land exactly when they should.",
      "Whether you are a first-time buyer, selling and buying on the same day, renewing or refinancing a mortgage, or closing a corporate or commercial property deal, you will have a lawyer who explains each step in plain language and keeps you updated.",
    ],
    handle: [
      { title: "Residential purchases and sales", text: "Agreement review, title searches, mortgage documents and closing-day coordination." },
      { title: "Mortgage refinances and renewals", text: "Accurate, fast turnarounds when your lender or timeline demands it." },
      { title: "Corporate and commercial property", text: "Purchases, sales and financing of investment and business properties." },
      { title: "Title and due diligence", text: "We examine title, status and survey details and flag issues early." },
      { title: "Transfers of title", text: "Adding or removing a name on title, and transfers between family members." },
      { title: "Funds and registration", text: "Adjustments, land transfer tax and registration handled with precision." },
    ],
    steps: [
      { title: "Review the agreement", text: "Send us your Agreement of Purchase and Sale, ideally before conditions are waived." },
      { title: "Complete due diligence", text: "We search title, review documents and resolve outstanding items." },
      { title: "Sign and fund", text: "You sign the closing documents and we prepare the statement of adjustments." },
      { title: "Close and register", text: "We register the transfer, release funds and confirm the keys are yours." },
    ],
    faqs: [
      { q: "When should I contact a lawyer?", a: "As early as possible, ideally before you sign an Agreement of Purchase and Sale or waive conditions, so we can review the terms with you." },
      { q: "Can you handle a sale and a purchase on the same day?", a: "Yes. We coordinate both sides of a same-day closing so discharge, funds and registration line up." },
      { q: "Do you handle mortgage renewals and refinances?", a: "Yes, including quick-turnaround refinances. Send us your lender's instructions and we will get started." },
    ],
  },
  {
    slug: "real-estate-litigation",
    title: "Real Estate Litigation",
    kicker: "Disputes over property and agreements",
    icon: "landmark",
    summary:
      "Failed closings, deposit disputes and title or boundary conflicts. Practical advocacy to protect your property rights.",
    tagline: "When a property deal goes wrong, you need a clear strategy and a firm voice.",
    intro: [
      "Real estate disputes are time-sensitive and personal. We assess your position quickly, explain your options in plain language, and pursue the most efficient route, whether that is a negotiated resolution or a court application.",
      "We act for buyers, sellers, owners and investors in disputes arising from agreements of purchase and sale, title and ownership issues, and the use of land.",
    ],
    handle: [
      { title: "Failed or delayed closings", text: "Breach of the agreement, claims for damages and, where available, specific performance." },
      { title: "Deposit disputes", text: "Recovering a deposit or defending a claim to one held in trust." },
      { title: "Title and ownership disputes", text: "Competing claims, fraud-related problems and registration issues." },
      { title: "Boundaries and easements", text: "Resolving how land may be used, accessed or shared." },
      { title: "Builder and vendor disputes", text: "Delays, deficiencies and unmet obligations in new-build and resale deals." },
      { title: "Co-owner disputes", text: "Breakdowns between co-owners, including applications to partition or sell." },
    ],
    steps: [
      { title: "Assess the dispute", text: "We review your documents and timeline to understand strengths, risks and deadlines." },
      { title: "Agree a strategy", text: "You receive a clear plan with options, likely costs and next steps." },
      { title: "Negotiate", text: "Demand letters and negotiation aim for an early, practical resolution." },
      { title: "Litigate if needed", text: "If the matter cannot be resolved, we advance your claim or defence in court." },
    ],
    faqs: [
      { q: "How quickly do I need to act?", a: "Quickly. Contractual and legal time limits can apply, so contact us as soon as a dispute arises." },
      { q: "Can a dispute be resolved without going to court?", a: "Often. Many property disputes settle through negotiation or mediation, and we will pursue that route when it serves your interests." },
      { q: "What should I gather before we meet?", a: "Your agreement, correspondence, deposit receipts, title documents and anything that shows dates or payments." },
    ],
  },
  {
    slug: "general-litigation",
    title: "General Litigation",
    kicker: "Plaintiff or defendant",
    icon: "gavel",
    summary:
      "Contract disputes, debt recovery and civil claims, whether you are bringing a claim or defending one.",
    tagline: "Whether you are starting a claim or responding to one, you get focused, strategic advocacy.",
    intro: [
      "Being sued, or needing to sue, is stressful. We cut through the noise, identify what matters most and build a strategy designed to resolve your dispute efficiently.",
      "We represent individuals and businesses as plaintiffs and defendants in civil disputes, from demand letters through settlement discussions, mediation and court.",
    ],
    handle: [
      { title: "Contract and business disputes", text: "Breaches of agreement, unpaid invoices and disagreements between business partners." },
      { title: "Debt and collection claims", text: "Recovering what you are owed, or responding to a claim against you." },
      { title: "Negligence and property damage", text: "Claims arising from losses caused by someone else's actions." },
      { title: "Defending claims", text: "Reviewing a statement of claim, meeting deadlines and building your response." },
      { title: "Settlement and mediation", text: "Negotiated outcomes that save time, cost and stress where they make sense." },
      { title: "Enforcing judgments", text: "Taking steps to collect after a judgment has been granted." },
    ],
    steps: [
      { title: "Assess your case", text: "We review the facts, documents and deadlines and give you an honest view." },
      { title: "Agree a strategy", text: "A clear plan covering options, likely costs and what happens next." },
      { title: "Resolve early where possible", text: "Demand letters, negotiation and mediation can save time and expense." },
      { title: "Advocate in court", text: "If a fair resolution is not possible, we represent you through the court process." },
    ],
    faqs: [
      { q: "I have been served with a claim. What should I do?", a: "Act quickly. Deadlines to respond are short, so contact us right away and bring everything you have received." },
      { q: "Do you act for both plaintiffs and defendants?", a: "Yes. We represent people and businesses on either side of a dispute." },
      { q: "Will my dispute end up in court?", a: "Not necessarily. Many disputes resolve through negotiation or mediation. We will tell you when settling makes sense and when it is worth pressing forward." },
    ],
  },
  {
    slug: "corporate-law",
    title: "Corporate Law",
    kicker: "Start, structure and grow",
    icon: "briefcase",
    summary:
      "Incorporations, shareholder agreements, contracts and business purchases. A solid legal foundation for your company.",
    tagline: "A clear legal foundation lets you focus on running and growing your business.",
    intro: [
      "From a first incorporation to the sale of a business, we help owners structure and document their companies correctly from the start.",
      "We draft and review the agreements that keep relationships and operations on solid footing, and we are available for practical, ongoing advice as your business evolves.",
    ],
    handle: [
      { title: "Incorporation and set-up", text: "Choosing and creating the right corporate structure for your goals." },
      { title: "Shareholder and partnership agreements", text: "Setting out how owners decide, transfer shares and resolve disagreements." },
      { title: "Buying and selling a business", text: "Reviewing offers, negotiating terms and closing the transaction." },
      { title: "Commercial contracts", text: "Drafting and reviewing agreements with customers, suppliers and contractors." },
      { title: "Records and compliance", text: "Minute books, resolutions and the housekeeping that keeps a company in good standing." },
      { title: "Ongoing business advice", text: "Practical guidance when decisions come up, before they become problems." },
    ],
    steps: [
      { title: "Understand your goals", text: "We learn how you operate, who the owners are and where you want to go." },
      { title: "Choose the structure", text: "We explain the options and recommend the setup that fits." },
      { title: "Draft and document", text: "Incorporation papers, agreements and records prepared accurately." },
      { title: "Support as you grow", text: "Call on us as contracts, partners and opportunities come up." },
    ],
    faqs: [
      { q: "Should I incorporate?", a: "It depends on your goals, risk and tax position. We will walk through the legal considerations and suggest you speak with your accountant on the tax side." },
      { q: "Do I need a shareholder agreement?", a: "If your company has more than one owner, it is strongly recommended. It sets out how decisions are made, how shares are transferred and how disputes are resolved." },
      { q: "Can you help me buy or sell a business?", a: "Yes, from reviewing the offer and agreements through to closing." },
    ],
  },
  {
    slug: "wills-and-estates",
    title: "Wills & Estates",
    kicker: "Including probate",
    icon: "scroll",
    summary:
      "Wills, powers of attorney and estate administration, including probate, so your family is protected and your wishes are honoured.",
    tagline: "Protect the people you love, and make a difficult time easier for them.",
    intro: [
      "A clear will and up-to-date powers of attorney spare your family uncertainty, delay and expense. We help you put your wishes into legally sound documents, explained in plain language.",
      "If you have lost a loved one, we guide estate trustees through the process, from applying for probate to distributing assets, one clear step at a time.",
    ],
    handle: [
      { title: "Wills and estate planning", text: "Documents that reflect your wishes and your family's circumstances." },
      { title: "Powers of attorney", text: "Appointing people you trust to manage your property and personal care if you cannot." },
      { title: "Probate applications", text: "Applying for the Certificate of Appointment of Estate Trustee so the estate can be administered." },
      { title: "Estate administration", text: "Gathering assets, paying debts and taxes, and distributing what remains." },
      { title: "Guidance for estate trustees", text: "Clear direction on your duties, timelines and record-keeping." },
      { title: "Updating existing wills", text: "Changes after marriage, separation, new children or a change in property." },
    ],
    steps: [
      { title: "Discuss your situation", text: "We listen, ask the right questions and explain your options." },
      { title: "Prepare the documents", text: "Wills, powers of attorney or court documents drafted accurately." },
      { title: "Sign or file", text: "Proper signing and witnessing, or filing with the court for probate." },
      { title: "Finalize and follow up", text: "We complete the work and remain available as circumstances change." },
    ],
    faqs: [
      { q: "Do I need a will?", a: "If you have family, property or other assets, a will lets you decide who inherits and who manages your estate. Without one, provincial rules decide." },
      { q: "Is probate always required?", a: "Not always. It depends on the assets and how they are held. We will tell you whether it applies to your situation." },
      { q: "What does an estate trustee do?", a: "In Ontario, an estate trustee is the person commonly known as the executor. They gather the assets, pay debts and taxes, and distribute what remains according to the will." },
    ],
  },
  {
    slug: "simple-divorce",
    title: "Simple Divorce",
    kicker: "Uncontested divorces and separations",
    icon: "handshake",
    summary:
      "Straightforward, uncontested divorces and separation agreements, handled respectfully, accurately and efficiently.",
    tagline: "When you both agree, ending a marriage can be straightforward and dignified.",
    intro: [
      "A simple, or uncontested, divorce is one where both spouses agree to the divorce and the main issues are settled. We prepare and file the paperwork, handle the court process and keep you informed until the divorce order is granted.",
      "If you are separating, we can also draft a separation agreement that records your agreed terms clearly. If your situation turns out to be more complex, we will tell you early so you can choose the right path.",
    ],
    handle: [
      { title: "Uncontested and joint divorces", text: "Complete preparation and filing when you and your spouse are in agreement." },
      { title: "Separation agreements", text: "Written terms for parenting, support and property that you both understand." },
      { title: "Document preparation", text: "Accurate forms and supporting documents prepared for the court." },
      { title: "Court filing and follow-up", text: "We handle the process so you do not have to navigate it alone." },
      { title: "Final order and certificate", text: "Guidance through the divorce order and obtaining your certificate of divorce." },
      { title: "Reviewing an agreement", text: "A plain-language explanation of an agreement before you sign." },
    ],
    steps: [
      { title: "Confirm it is straightforward", text: "We check that your situation fits an uncontested process." },
      { title: "Prepare the documents", text: "Forms and supporting material drafted and reviewed with you." },
      { title: "File with the court", text: "We submit your application and manage the process." },
      { title: "Receive your divorce order", text: "We confirm the order and help you obtain your certificate." },
    ],
    faqs: [
      { q: "What makes a divorce simple?", a: "Both spouses agree to the divorce and have settled, or have no disagreement about, matters such as parenting, support and property." },
      { q: "How long do we need to be separated?", a: "Most divorces in Canada are based on living separate and apart for at least one year, although other grounds exist." },
      { q: "Do we both need a lawyer?", a: "Not always. We will explain the options, including independent legal advice for each spouse, so you can choose what is right for you." },
    ],
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
