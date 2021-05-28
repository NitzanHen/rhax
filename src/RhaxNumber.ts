import { clamp } from './fp/number';

import { rhax } from './Rhax';
import { RhaxBase } from './RhaxBase';

export interface RhaxNumber extends RhaxBase<number> { }
export abstract class RhaxNumber {

  clamp(min: number, max: number) {
    return rhax(clamp(min, max, this.value));
  }
}