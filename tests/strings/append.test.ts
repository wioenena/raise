import { Strings } from '../../mod.ts';
import { assertEquals } from '../../deps.ts';

const { append } = Strings;

Deno.test('append', () => {
    assertEquals(
        append('abc', 'd'),
        'abcd'
    );

    assertEquals(
        append('abc', 'd', 0),
        'dabc'
    );

    assertEquals(
        append('ac', 'b', 1),
        'abc'
    );

    assertEquals(
        append('How you ?', 'are ', 4),
        'How are you ?'
    );
});
