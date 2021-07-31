import { Strings } from '../../mod.ts';
import { assertEquals } from '../../deps.ts';

const { collectString, indexOf } = Strings;

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
        collectString(hw, indexOf(hw, 'W') - 1),
        'World'
    );

    assertEquals(
        collectString(hw),
        'Hello'
    );
});
