import { Strings } from '../../mod.ts';
import { assertEquals } from '../../deps.ts';

const { includes } = Strings;

Deno.test('includes', () => {
    assertEquals(
        includes('abcdef', 'e'),
        'abcdef'.includes('e')
    );

    assertEquals(
        includes('abcdef', 'e', 2),
        'abcdef'.includes('e', 2)
    );
});
