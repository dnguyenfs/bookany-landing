import { ICategory } from "@/types/category";
import axios from "@/lib/axios";

export async function getCategoriesApi(slug: string): Promise<ICategory[]> {
  const res = await axios.get(`/online/${slug}/categories`);
  return res.data;
}
