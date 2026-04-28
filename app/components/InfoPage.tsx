import Link from "next/link";

type InfoPageProps = {
  title: string;
  eyebrow: string;
  intro: string;
  sections: Array<{
    heading: string;
    body: string;
  }>;
};

export default function InfoPage({ title, eyebrow, intro, sections }: InfoPageProps) {
  return (
    <main className="min-h-screen bg-[#f8fbf7] text-[#163235]">
      <header className="border-b border-[#d8e6e3] bg-white">
        <nav className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4 sm:px-6" aria-label="Simple navigation">
          <Link className="font-black text-[#163235]" href="/">
            Local Florida Deals
          </Link>
          <Link className="rounded-full bg-[#087f8c] px-4 py-2 text-sm font-black text-white" href="/#deals" style={{ color: "#ffffff" }}>
            Browse Deals
          </Link>
        </nav>
      </header>
      <section className="mx-auto max-w-5xl px-4 py-14 sm:px-6">
        <p className="text-sm font-black uppercase tracking-[0.18em] text-[#087f8c]">{eyebrow}</p>
        <h1 className="mt-3 text-4xl font-black sm:text-5xl">{title}</h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-[#52686b]">{intro}</p>
        <div className="mt-10 grid gap-5">
          {sections.map((section) => (
            <article className="rounded-[24px] border border-[#d8e6e3] bg-white p-6 shadow-lg shadow-[#087f8c]/8" key={section.heading}>
              <h2 className="text-2xl font-black">{section.heading}</h2>
              <p className="mt-3 leading-7 text-[#52686b]">{section.body}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
