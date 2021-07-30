import { Strings } from "../../mod.ts";
import { assertEquals } from "../../deps.ts";

const { substr } = Strings;

Deno.test("substr", () => {
    const str = "1234";

    assertEquals(
        substr(str, 2, 3),
        str.substr(2, 3)
    );

    assertEquals(
        substr(str, -2, -1),
        str.substr(-2, -1)
    );

    assertEquals(
        substr(str, -2, 4),
        str.substr(-2, 4)
    );

    assertEquals(
        substr(str, 1, -1),
        str.substr(1, -1)
    );

    assertEquals(
        substr(str, -999, 2),
        str.substr(-999, 2)
    );

    assertEquals(
        substr(str, 2, -999),
        str.substr(2, -999)
    );

    assertEquals(
        substr(str, 999, 999),
        str.substr(999, 999)
    );
});
