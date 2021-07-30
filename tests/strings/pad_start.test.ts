import { Strings } from "../../mod.ts";
import { assertEquals } from "../../deps.ts";

const { padStart } = Strings;

Deno.test("padStart", () => {
    assertEquals(
        padStart("Hello", 10, "o"),
        "Hello".padStart(10, "o")
    );

    assertEquals(
        padStart("Hello", 50),
        "Hello".padStart(50)
    );

    assertEquals(
        padStart("5", 2, "0"),
        "5".padStart(2, "0")
    );
});