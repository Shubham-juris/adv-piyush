export type CaseStudy = {
  id: number;
  title: string;
  summary: string;
  category: string;
  outcome: string;
  image: string;
  details: string;
};

export const caseStudies: CaseStudy[] = [
  {
    id: 1,
    title: "Landmark Corporate Restructuring Victory",
    summary: "Successfully navigated a complex corporate restructuring case, preserving shareholder value and ensuring company stability through strategic legal maneuvers in the High Court.",
    category: "Corporate Law",
    outcome: "Favorable ruling that set a new precedent for asset protection during mergers.",
    image: "/images/team.jpg",
    details: "The case involved a multi-national corporation facing hostile takeover bids. Our team devised a defensive strategy that involved complex litigation and negotiation, ultimately leading to a successful restructuring that benefited all stakeholders. The High Court's decision was widely reported and is now a key case study in corporate law programs."
  },
  {
    id: 2,
    title: "Supreme Court Appeal on Intellectual Property Rights",
    summary: "Achieved a landmark decision in the Supreme Court of India, protecting the intellectual property rights of an innovative tech startup against a major corporation.",
    category: "Intellectual Property",
    outcome: "The Supreme Court reversed the lower court's decision, affirming our client's patent rights.",
    image: "/images/intellectual.png",
    details: "Our client, a small technology firm, had their core patent infringed upon by a large competitor. After a lengthy battle in lower courts, we took the case to the Supreme Court. Our arguments focused on the novel aspects of the technology and the importance of protecting innovation. The victory secured our client's future and sent a strong message about IP rights in India."
  },
  {
    id: 3,
    title: "Complex Commercial Arbitration",
    summary: "Represented a construction company in a high-stakes arbitration dispute over a delayed infrastructure project, resulting in a significant award for our client.",
    category: "Arbitration",
    outcome: "Arbitration panel awarded our client full compensation for project delays and cost overruns.",
    image: "/images/arbitration.jpeg",
    details: "The dispute centered on contractual ambiguities and unforeseen site conditions. We presented a meticulously documented case with expert testimony on construction management and engineering. The panel's decision in our client's favor was unanimous and highlighted the strength of our evidence and legal arguments."
  },
  {
    id: 4,
    title: "Punjab & Haryana High Court Writ Petition",
    summary: "Filed a successful writ petition in the High Court of Punjab & Haryana, challenging arbitrary administrative action and securing fundamental rights for a community group.",
    category: "Constitutional Law",
    outcome: "The High Court quashed the administrative order and issued directives to protect the petitioners' rights.",
    image:  "/images/punjab.jpg",
    details: "A local community's access to public resources was unfairly restricted by a governmental decree. We argued that the action was discriminatory and violated constitutional principles of equality. The High Court's swift intervention restored justice and reaffirmed the power of judicial review."
  }
];

export type BlogPost = {
  slug: string;
  title: string;
  author: string;
  date: string;
  summary:string;
  content: string;
  image: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "navigating-digital-privacy-laws",
    title: "Navigating the Evolving Landscape of Digital Privacy Laws in India",
    author: "Piyush Jain",
    date: "2024-07-15",
    summary: "A deep dive into the latest amendments in India's data protection and privacy regulations and what they mean for businesses and individuals.",
    image: "https://placehold.co/1200x800",
    content: `
      <p>The digital world is constantly in flux, and so are the laws that govern it. In India, the legal framework around data privacy has seen significant developments, culminating in the new Digital Personal Data Protection Act. This legislation marks a paradigm shift from the older, more fragmented IT Act rules.</p>
      <p>For businesses, understanding the nuances of consent, data fiduciary responsibilities, and cross-border data transfer is now more critical than ever. Non-compliance can lead to hefty penalties. This article breaks down the key provisions of the new act, offering clarity on terms like 'data principal', 'consent manager', and the newly established Data Protection Board of India.</p>
      <h3 class="font-headline text-xl font-bold mt-6 mb-2">Key Takeaways for Businesses:</h3>
      <ul class="list-disc list-inside space-y-2">
        <li>The importance of clear and informed consent before collecting personal data.</li>
        <li>Obligations for data breach notifications.</li>
        <li>The rights of individuals (data principals) to access, correct, and erase their data.</li>
        <li>Special considerations for processing the data of children.</li>
      </ul>
      <p class="mt-4">Individuals, too, must be aware of their enhanced rights. The power to control one's personal information is a cornerstone of the new law. We explore how you can exercise these rights and what to do if you believe they have been violated. As legal practitioners, we anticipate a wave of litigation and regulatory action in this space, making it a crucial area to watch.</p>
    `
  },
  {
    slug: "understanding-arbitration",
    title: "The Rise of Arbitration: A Faster Route to Commercial Dispute Resolution",
    author: "Advocate Associates",
    date: "2024-06-22",
    summary: "Why more businesses are turning to arbitration instead of traditional litigation for resolving commercial disputes, and a look at the process.",
    image: "https://placehold.co/1200x800",
    content: `
      <p>In the fast-paced world of commerce, time is money. Traditional court proceedings can be lengthy, public, and expensive. This has led to a significant rise in the popularity of Alternative Dispute Resolution (ADR) mechanisms, with arbitration leading the charge.</p>
      <p>Arbitration offers a private, more flexible, and often faster way to resolve disputes. The parties can choose their arbitrator, who often has specific industry expertise, leading to more informed decisions. The process is governed by the Arbitration and Conciliation Act, 1996, which has been amended several times to make India a more arbitration-friendly jurisdiction.</p>
      <h3 class="font-headline text-xl font-bold mt-6 mb-2">Advantages of Arbitration:</h3>
      <ul class="list-disc list-inside space-y-2">
        <li><strong>Speed:</strong> Arbitral proceedings are typically much faster than court cases.</li>
        <li><strong>Expertise:</strong> Arbitrators can be chosen for their specific knowledge of the industry in question.</li>
        <li><strong>Confidentiality:</strong> Proceedings are private, protecting sensitive business information.</li>
        <li><strong>Finality:</strong> Arbitral awards are binding and have limited grounds for appeal.</li>
      </ul>
      <p class="mt-4">However, it's not a one-size-fits-all solution. The process requires a valid arbitration agreement and can sometimes be just as complex as litigation. Understanding when and how to invoke an arbitration clause is a strategic decision that requires expert legal advice. Our firm has extensive experience in both domestic and international commercial arbitration, guiding clients from the drafting of arbitration clauses to the enforcement of arbitral awards.</p>
    `
  },
  {
    slug: "slp-in-supreme-court",
    title: "The Special Leave Petition: Your Gateway to the Supreme Court",
    author: "Piyush Jain",
    date: "2024-05-10",
    summary: "An overview of Article 136 of the Constitution and the strategic considerations behind filing a Special Leave Petition (SLP) in the Supreme Court of India.",
    image: "https://placehold.co/1200x800",
    content: `
      <p>The Supreme Court of India is the apex court of the land, and approaching it is not a matter of right. For most civil and criminal cases, the primary mechanism to seek a hearing before the Supreme Court is through a Special Leave Petition, or SLP, filed under Article 136 of the Constitution.</p>
      <p>Article 136 grants the Supreme Court discretionary power to grant 'special leave' to appeal against any judgment, decree, determination, sentence, or order in any cause or matter passed or made by any court or tribunal in the territory of India. This power is extraordinary and used sparingly.</p>
      <h3 class="font-headline text-xl font-bold mt-6 mb-2">When to File an SLP:</h3>
      <ul class="list-disc list-inside space-y-2">
        <li>When a case involves a substantial question of law of general importance.</li>
        <li>When a High Court has, in your view, grossly erred in its interpretation of the law.</li>
        <li>When there is a miscarriage of justice that needs to be rectified.</li>
        <li>It is not a regular forum of appeal and is not meant for re-appreciation of evidence.</li>
      </ul>
      <p class="mt-4">Drafting and arguing an SLP is an art. It requires a deep understanding of constitutional law and the specific procedural requirements of the Supreme Court. The petition must be concise yet compelling, convincing the court at the admission stage that the case warrants its attention. Our team possesses the specialized expertise required to handle these complex petitions, representing clients at the highest judicial level.</p>
    `
  }
];
