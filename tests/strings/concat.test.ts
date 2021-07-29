import { Strings } from "../../mod.ts";
import { assertEquals } from "../../deps.ts";

const { concat } = Strings;

Deno.test("concat", () => {
    assertEquals(
        concat("a", "b", "c"),
        "a".concat("b", "c")
    );
});
