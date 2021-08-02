import Mixed from 'https://deno.land/x/mixed@0.0.1/mod.ts';

import { createRequire } from 'https://deno.land/std@0.103.0/node/module.ts';

export { assertEquals } from 'https://deno.land/std@0.102.0/testing/asserts.ts';

export const require = createRequire(import.meta.url);

export { Mixed };
