import { Strings } from '../../mod.ts';
import { assertEquals } from '../../deps.ts';

const { toLower } = Strings;

Deno.test('toLower', () => {
    assertEquals(
        toLower('A-B-C'),
        'A-B-C'.toLowerCase()
    );
});
