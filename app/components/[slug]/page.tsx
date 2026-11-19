import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CATALOG, catalogBySlug } from "../../../src/catalog/items";
import { componentDescription, componentTitle } from "../../../src/catalog/seo";
import { ComponentDetail } from "../../../src/views/ComponentDetail";

export function generateStaticParams() {
  return CATALOG.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = catalogBySlug(slug);
  if (!item) return { title: "Components" };
  const url = `/components/${item.slug}`;
  const title = componentTitle(item);
  const description = componentDescription(item);
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: `${title} — Wingtics`,
      description,
      url,
    },
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = catalogBySlug(slug);
  if (!item) notFound();
  return <ComponentDetail item={item} />;
}
