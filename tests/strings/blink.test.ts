import { Strings } from '../../mod.ts';
import { assertEquals } from '../../deps.ts';

const { blink } = Strings;

Deno.test('blink', () => {
    assertEquals(
        blink('Hello World'),
        'Hello World'.blink()
    );
});
