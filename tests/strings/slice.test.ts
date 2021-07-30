import { Strings } from "../../mod.ts";
import { assertEquals } from "../../deps.ts";

const { slice } = Strings;

Deno.test("slice", () => {
    const str = "1234";

    assertEquals(
        slice(str, 2, 3),
        str.slice(2, 3)
    );

    assertEquals(
        slice(str, -2, -1),
        str.slice(-2, -1)
    );

    assertEquals(
        slice(str, -2, 4),
        str.slice(-2, 4)
    );

    assertEquals(
        slice(str, 1, -1),
        str.slice(1, -1)
    );

    assertEquals(
        slice(str, -999, 2),
        str.slice(-999, 2)
    );

    assertEquals(
        slice(str, 2, -999),
        str.slice(2, -999)
    );

    assertEquals(
        slice(str, 999, 999),
        str.slice(999, 999)
    );
});
