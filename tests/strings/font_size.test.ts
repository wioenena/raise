import { Strings } from '../../mod.ts';
import { assertEquals } from '../../deps.ts';

const { fontSize } = Strings;

Deno.test('fontSize', () => {
    assertEquals(
        fontSize('Hello', 5),
        'Hello'.fontsize(5)
    );
});
