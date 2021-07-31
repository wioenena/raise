import { Strings } from '../../mod.ts';
import { assertEquals } from '../../deps.ts';

const { trimEnd } = Strings;

Deno.test('trimEnd', () => {
    assertEquals(
        trimEnd('abc    '),
        'abc'
    );

    assertEquals(
        trimEnd('ab   c    '),
        'ab   c'
    );
});
