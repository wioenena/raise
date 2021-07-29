import { Strings } from "../../mod.ts";
import { assertEquals } from "../../deps.ts";

const { indexOf } = Strings;

Deno.test("indexOf", () => {
    assertEquals(
        indexOf("abcdef", "e"),
        "abcdef".indexOf("e")
    );

    assertEquals(
        indexOf("abcdef", "e", 2),
        "abcdef".indexOf("e", 2)
    );
});
