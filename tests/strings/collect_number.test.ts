import { Strings } from '../../mod.ts';
import { assertEquals } from '../../deps.ts';

const { collectNumber, indexOf } = Strings;

Deno.test('collectNumber', () => {
    assertEquals(
        collectNumber('"abc 12345 "'),
        12345
    );

    assertEquals(
        collectNumber('"12345"'),
        12345
    );

    const str = '"12345" "4102019"';
    assertEquals(
        collectNumber(str, indexOf(str, '4102019') - 1),
        4102019
    );
});
