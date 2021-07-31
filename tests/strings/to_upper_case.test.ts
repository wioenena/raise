import { Strings } from '../../mod.ts';
import { assertEquals } from '../../deps.ts';

const { toUpperCase } = Strings;

Deno.test('toUpperCase', () => {
    assertEquals(
        toUpperCase('abcdef', 2),
        'abCDEF'
    );

    assertEquals(
        toUpperCase('abcdef', 2, 4),
        'abCDEf'
    );

    assertEquals(
        toUpperCase('abcdef', 0, 4),
        'ABCDEf'
    );
});
