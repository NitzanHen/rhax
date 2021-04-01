import { RhaxCore } from './RhaxCore';
import { NumberRhax } from './NumberRhax';
import { ObjectRhax } from './ObjectRhax';
import { EmptyObj } from './types';

export type Rhax<T> =
  & RhaxCore<T>
  & T extends number ? NumberRhax : EmptyObj
  & T extends Record<string, unknown> ? ObjectRhax<T> : EmptyObj;