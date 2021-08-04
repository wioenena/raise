import { Strings } from '../../mod.ts';
import { assertEquals } from '../../deps.ts';

const { toUpper } = Strings;


Deno.test("toUpper", () => {
    assertEquals(
        toUpper("a-b-c"),
        "a-b-c".toUpperCase()
    );
});
