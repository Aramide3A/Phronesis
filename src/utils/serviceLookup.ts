import { services } from "../data/site";

export function getService(slug: string) {
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    throw new Error(`Unknown service slug: ${slug}`);
  }

  return service;
}
