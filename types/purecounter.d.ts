declare module "@srexi/purecounterjs" {
  export interface PureCounterOptions {
    selector?: string;
    start?: number;
    end?: number;
    duration?: number;
    delay?: number;
    once?: boolean;
    pulse?: boolean | number;
    decimals?: number;
    legacy?: boolean;
    filesizing?: boolean;
    currency?: boolean | string;
    formater?: string | boolean;
    separator?: boolean | string;
  }

  class PureCounter {
    constructor(options?: PureCounterOptions);
  }

  export default PureCounter;
}
