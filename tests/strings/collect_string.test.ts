import { Strings } from '../../mod.ts';
import { assertEquals } from '../../deps.ts';

const { collectString } = Strings;

Deno.test('collectString', () => {
    assertEquals(
        collectString('"Hello !"'),
        'Hello !'
    );

    assertEquals(
        collectString('`Hello !`'),
        'Hello !'
    );

    assertEquals(
        collectString('\'Hello !\''),
        'Hello !'
    );

    assertEquals(
        collectString('abc "Hello !"', 2),
        'Hello !'
    );

    assertEquals(
        collectString('abc "Hello !"'),
        'Hello !'
    );
});
