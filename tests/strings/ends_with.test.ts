import { Strings } from '../../mod.ts';
import { assertEquals } from '../../deps.ts';

const { endsWith } = Strings;

Deno.test("endsWith", () => {
    assertEquals(
        endsWith("abc", "c"),
        "abc".endsWith("c")
    );

    assertEquals(
        endsWith("abc","b", 2),
        "abc".endsWith("b", 2)
    )
})

