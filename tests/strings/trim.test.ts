import { Strings } from '../../mod.ts';
import { assertEquals } from '../../deps.ts';

const { trim } = Strings;

Deno.test('trim', () => {
    assertEquals(
        trim('a b c'),
        'a b c'
    );

    assertEquals(
        trim('   a b c   '),
        'a b c'
    );

    assertEquals(
        trim('   a   b   c   '),
        'a   b   c'
    );
});
