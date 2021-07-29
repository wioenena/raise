import { Strings } from "../../mod.ts";
import { assertEquals } from "../../deps.ts";

const { substring } = Strings;

Deno.test("substring", () => {
    const str = "Mozilla";
    assertEquals(
        substring(str, 1, 3),
        str.substring(1, 3)
    );

    assertEquals(
        substring(str, 2),
        str.substring(2)
    );

    assertEquals(
        substring(str, 0, 1),
        str.substring(0, 1)
    );

    assertEquals(
        substring(str, 1, 0),
        str.substring(1, 0)
    );

    assertEquals(
        substring(str, 0, 6),
        str.substring(0, 6)
    );

    assertEquals(
        substring(str, 4),
        str.substring(4)
    );

    assertEquals(
        substring(str, 4, 7),
        str.substring(4, 7)
    );

    assertEquals(
        substring(str, 7, 4),
        str.substring(7, 4)
    );

    assertEquals(
        substring(str, 0, 7),
        str.substring(0, 7)
    );

    assertEquals(
        substring(str, 0, 10),
        str.substring(0, 10)
    );

    assertEquals(
        substring(str, str.length - 4),
        str.substr(str.length - 4)
    );

    assertEquals(
        substring(str, str.length - 5),
        str.substring(str.length - 5)
    );

    assertEquals(
        substring(str, 2, 5),
        str.substring(2, 5)
    );

    assertEquals(
        substring("abcde", 1, 1),
        ""
    );
});
