import { Strings } from "../../mod.ts";
import { assertEquals } from "../../deps.ts";

const { sup } = Strings;

Deno.test("sup", () => {
    assertEquals(
        sup("Hello"),
        "Hello".sup()
    );
});
