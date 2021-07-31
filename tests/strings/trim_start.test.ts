import { Strings } from '../../mod.ts';
import { assertEquals } from '../../deps.ts';

const { trimStart } = Strings;

Deno.test('trimStart', () => {
    assertEquals(
        trimStart('   abc'),
        'abc'
    );

    assertEquals(
        trimStart('   ab   c'),
        'ab   c'
    );
});
