declare module 'astro:content' {
  import type { ZodTypeAny } from 'astro/zod';

  export function defineCollection(config: any): any;
  export function getCollection(key: string): any;
  export type SchemaContext = { image: () => any };
}

declare module 'astro/loaders' {
  export function glob(opts: any): any;
}

declare module 'astro/zod' {
  import { z } from 'zod';
  export { z };
  export type ZodTypeAny = import('zod').ZodTypeAny;
}
