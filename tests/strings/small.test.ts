import { Strings } from '../../mod.ts';
import { assertEquals } from '../../deps.ts';

const { small } = Strings;

Deno.test('small', () => {
    assertEquals(
        small('Hello'),
        'Hello'.small()
    );
});
