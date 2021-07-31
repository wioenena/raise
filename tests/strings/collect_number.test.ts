import { Strings } from '../../mod.ts';
import { assertEquals } from '../../deps.ts';

const { collectNumber } = Strings;

Deno.test('collectNumber', () => {
    assertEquals(
        collectNumber('"Hello 12"'),
        12
    );

    assertEquals(
        collectNumber('Hello "12Hello"', 4),
        12
    );
});
