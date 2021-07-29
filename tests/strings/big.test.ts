import { Strings } from "../../mod.ts";
import { assertEquals } from "../../deps.ts";

const { big } = Strings;

Deno.test("big", () => {
    assertEquals(
        big("Hello World"),
        "Hello World".big()
    );
});
