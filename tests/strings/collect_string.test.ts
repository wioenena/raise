import { Strings } from '../../mod.ts';
import { assertEquals } from '../../deps.ts';

const { collectString } = Strings;

Deno.test('collectString', () => {
    assertEquals(
        collectString('"Hello"'),
        'Hello'
    );

    assertEquals(
        collectString('abc "Hello"'),
        'Hello'
    );

    const hw = '"Hello" "World"';
    assertEquals(
        collectString(hw, hw.indexOf('W') - 1),
        'World'
    );

    assertEquals(
        collectString(hw),
        'Hello'
    );
});
