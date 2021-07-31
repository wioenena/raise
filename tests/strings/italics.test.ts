import { Strings } from '../../mod.ts';
import { assertEquals } from '../../deps.ts';

const { italics } = Strings;

Deno.test('italics', () => {
    assertEquals(
        italics('Hello World'),
        'Hello World'.italics()
    );
});
