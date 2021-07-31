import { Strings } from '../../mod.ts';
import { assertEquals } from '../../deps.ts';

const { substring } = Strings;

Deno.test('substring', () => {
    const str = '1234';

    assertEquals(
        substring(str, 2, 3),
        str.substring(2, 3)
    );

    assertEquals(
        substring(str, -2, -1),
        str.substring(-2, -1)
    );

    assertEquals(
        substring(str, -2, 4),
        str.substring(-2, 4)
    );

    assertEquals(
        substring(str, 1, -1),
        str.substring(1, -1)
    );

    assertEquals(
        substring(str, -999, 2),
        str.substring(-999, 2)
    );

    assertEquals(
        substring(str, 2, -999),
        str.substring(2, -999)
    );

    assertEquals(
        substring(str, 999, 999),
        str.substring(999, 999)
    );
});
