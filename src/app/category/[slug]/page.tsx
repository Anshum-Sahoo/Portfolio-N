import { getCategoryBySlug, projectCategories } from "@/data/projects";
import { redirect, notFound } from "next/navigation";

export function generateStaticParams() {
  return projectCategories.map((cat) => ({
    slug: cat.slug,
  }));
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);

  if (!category || category.projects.length === 0) {
    notFound();
  }

  // Seamlessly route to the corresponding project detail view
  redirect(`/projects/${category.projects[0].slug}`);
}
