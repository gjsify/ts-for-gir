/**
 * A simple two-key map.
 */
export class TwoKeyMap<K1, K2, V> {
  private baseMap = new Map<K1, Map<K2, V>>();

  forEach(op: (v: V) => void) {
    this.baseMap.forEach(map => {
      map.forEach(v => {
        op(v);
      });
    });
  }

  has(key1: K1, key2: K2): boolean {
    const obj = this.baseMap.get(key1);

    if (!obj) {
      return false;
    }

    return obj.has(key2);
  }

  getIfOnly(key1: K1): readonly [K2, V] | undefined {
    const obj = this.baseMap.get(key1);

    if (!obj) {
      return undefined;
    }

    if (obj.size === 1) {
      const [k2] = obj.keys();
      const v = obj.get(k2);

      if (!v) {
        return undefined;
      }

      return [k2, v] as const;
    }

    return undefined;
  }

  get(key1: K1, key2: K2): V | undefined {
    const obj = this.baseMap.get(key1);

    if (!obj) {
      return undefined;
    }

    return obj.get(key2);
  }

  set(key1: K1, key2: K2, value: V): void {
    let obj = this.baseMap.get(key1);

    if (!obj) {
      obj = new Map<K2, V>();

      this.baseMap.set(key1, obj);
    }

    obj.set(key2, value);
  }
}

/**
 * If the predicate returns a value other than undefined,
 * that value is returned. It combines the .find() and
 * .map() APIs for convenience.
 *
 * @param arr
 * @param predicate
 */
export function findMap<T, K>(arr: T[], predicate: (p: T) => K | undefined): K | undefined {
  for (const a of arr) {
    const val = predicate(a);
    if (val !== undefined) return val;
  }

  return undefined;
}
