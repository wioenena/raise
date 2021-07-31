import { Strings } from '../../mod.ts';
import { assertEquals } from '../../deps.ts';

const { startsWith } = Strings;

Deno.test('startsWith', () => {
    assertEquals(
        startsWith('abcde', 'a'),
        'abcde'.startsWith('a')
    );

    assertEquals(
        startsWith('abcde', 'd', 3),
        'abcde'.startsWith('d', 3),
    );
});
