import type { ParsedGir } from "./parsed-gir.ts";


export interface NSLoader {
  load(namespace: string, version: string): ParsedGir | null;
  loadAll(namespace: string): ParsedGir[];
}
