import { Strings } from '../../mod.ts';
import { assertEquals } from '../../deps.ts';

const { toLowerCase } = Strings;

Deno.test('toLowerCase', () => {
    assertEquals(
        toLowerCase('ABCDEF', 2),
        'ABcdef'
    );

    assertEquals(
        toLowerCase('ABCDEF', 2, 4),
        'ABcdeF'
    );

    assertEquals(
        toLowerCase('ABCDEF', 0, 4),
        'abcdeF'
    );
});
