import { ObjectKey } from '../utils/types';
import { tuple } from './helpers';
import { toObject } from './toObject';


export function pick<O extends object, K extends keyof O>(obj: O, ...keys: K[]): Pick<O, K>;
export function pick<K extends ObjectKey>(...keys: K[]): <O extends Record<K, any>>(obj: O) => Pick<O, K>;
export function pick(...args: any[]) {
  if (typeof args[0] !== 'object') {
    const keys = args;
    return (obj: any) => pick(obj, ...keys);
  }

  const [obj, ...keys] = args;
  return toObject(
    keys.map(k => tuple(k, obj[k]))
  );
}