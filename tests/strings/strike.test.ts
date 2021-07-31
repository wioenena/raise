import { Strings } from '../../mod.ts';
import { assertEquals } from '../../deps.ts';

const { strike } = Strings;

Deno.test('strike', () => {
    assertEquals(
        strike('Hello'),
        'Hello'.strike()
    );
});
