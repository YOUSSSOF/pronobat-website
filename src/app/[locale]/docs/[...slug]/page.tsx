import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DocsHeader, OnThisPage, DocsPager } from "@/components/docs";
import { DemoCtaBanner } from "@/components/marketing";
import { loadDocPage, getAllDocSlugs, getPagerLinks, buildSidebarGroups } from "@/lib/docs";

type Props = {
  params: Promise<{ slug: string[] }>;
};

export async function generateStaticParams() {
  const slugs = getAllDocSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const doc = await loadDocPage(slug);
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://pronobat.ir";

  if (!doc) return { title: "Not Found" };

  const slugStr = slug.join("/");
  return {
    title: `${doc.frontmatter.title} — مستندات پرونوبت`,
    description: doc.frontmatter.description,
    alternates: {
      canonical: `${siteUrl}/docs/${slugStr}`,
    },
  };
}

export default async function DocsPage({ params }: Props) {
  const { slug } = await params;

  const doc = await loadDocPage(slug);
  if (!doc) notFound();

  const slugStr = slug.join("/");
  const { prev, next } = getPagerLinks(slugStr);
  const groups = buildSidebarGroups();
  const breadcrumbs = buildBreadcrumbs(slug, groups);

  return (
    <div className="flex gap-6 xl:gap-10">
      {/* Content */}
      <article className="flex-1 min-w-0 max-w-none lg:max-w-3xl">
        <DocsHeader title={doc.frontmatter.title} breadcrumbs={breadcrumbs} toc={doc.toc} />

        {/* MDX Content */}
        <div className="prose-pronobat">{doc.content}</div>

        {/* Pager */}
        <div className="mt-12 pt-8 border-t border-[var(--border)]">
          <DocsPager prev={prev ?? undefined} next={next ?? undefined} />
        </div>

        {/* CTA */}
        <div className="mt-12">
          <DemoCtaBanner />
        </div>
      </article>

      {/* On This Page */}
      {doc.toc.length > 0 && (
        <aside className="hidden xl:block w-52 shrink-0">
          <OnThisPage items={doc.toc} title="در این صفحه" />
        </aside>
      )}
    </div>
  );
}

// ── Breadcrumb builder ─────────────────────────────────────────────────────

function buildBreadcrumbs(
  slug: string[],
  groups: ReturnType<typeof buildSidebarGroups>,
) {
  const crumbs: Array<{ label: string; href?: string }> = [
    { label: "مستندات", href: "/docs" },
  ];

  const fullSlug = slug.join("/");

  for (const group of groups) {
    for (const item of group.items) {
      if (item.href === `/docs/${fullSlug}`) {
        crumbs.push({ label: group.title });
        crumbs.push({ label: item.label });
        return crumbs;
      }
    }
  }

  if (slug.length > 0) {
    crumbs.push({ label: slug[slug.length - 1] });
  }

  return crumbs;
}
