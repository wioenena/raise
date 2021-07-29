import { clone } from "../../mod.ts";
import { assertEquals } from "../../deps.ts";

Deno.test("clone", () => {
    assertEquals(
        clone("abc"),
        "abc"
    );

    assertEquals(
        clone(""),
        ""
    );

    assertEquals(
        clone(" "),
        " "
    );
});
