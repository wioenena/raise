import { Strings } from "../../mod.ts";
import { assertEquals } from "../../deps.ts";

const { clone } = Strings;

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
