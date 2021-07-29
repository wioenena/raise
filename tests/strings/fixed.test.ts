import { Strings } from "../../mod.ts";
import { assertEquals } from "../../deps.ts";

const { fixed } = Strings;

Deno.test("fixed", () => {
    assertEquals(
        fixed("Hello"),
        "Hello".fixed()
    );
});
