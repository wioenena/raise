import { Strings } from '../../mod.ts';
import { assertEquals } from '../../deps.ts';

const { toString } = Strings;

Deno.test('toString', () => {
    const o = { a: 1, b: 2 },
        num = 1,
        s = 'a',
        eStr = '',
        n = null,
        oArr = [o, o],
        sArr = [s, s, s],
        nArr = [num, num, num];

    assertEquals(
        toString(n),
        ''
    );
    assertEquals(
        toString(),
        ''
    );

    assertEquals(
        toString(eStr),
        ''
    );

    assertEquals(
        toString(oArr),
        '[object Object],[object Object]'
    );

    assertEquals(
        toString(sArr),
        'a,a,a'
    );

    assertEquals(
        toString(nArr),
        '1,1,1'
    );

    assertEquals(
        toString([]),
        ''
    );

    assertEquals(
        toString({}),
        '[object Object]'
    );
});
