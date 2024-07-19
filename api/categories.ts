import { ICategory } from "@/types/category";

export async function getCategoriesApi(slug: string): Promise<ICategory[]> {
  const res = await fetch(`${process.env.API_URL}/online/${slug}/categories`);
  if (!res.ok) {
    throw new Error("Failed to fetch categories info");
  }
  const data = await res.json();
  return data;
}
