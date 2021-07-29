import { Strings } from "../../mod.ts";
import { assertEquals } from "../../deps.ts";

const { substring } = Strings;

Deno.test("substring", () => {
    const str = "Mozilla";
    assertEquals(
        substring(str, 1, 3),
        "oz"
    );

    assertEquals(
        substring(str, 2),
        "zilla"
    );

    assertEquals(
        substring(str, 0, 1),
        "M"
    );

    assertEquals(
        substring(str, 1, 0),
        "M"
    );

    assertEquals(
        substring(str, 0, 6),
        "Mozill"
    );

    assertEquals(
        substring(str, 4),
        "lla"
    );

    assertEquals(
        substring(str, 4, 7),
        "lla"
    );

    assertEquals(
        substring(str, 7, 4),
        "lla"
    );

    assertEquals(
        substring(str, 0, 7),
        "Mozilla"
    );

    assertEquals(
        substring(str, 0, 10),
        "Mozilla"
    );

    assertEquals(
        substring(str, str.length - 4),
        "illa"
    );

    assertEquals(
        substring(str, str.length - 5),
        "zilla"
    );

    assertEquals(
        substring(str, 2, 5),
        "zil"
    );
});
