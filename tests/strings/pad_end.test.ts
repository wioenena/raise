import { Strings } from "../../mod.ts";
import { assertEquals } from "../../deps.ts";

const { padEnd } = Strings;

Deno.test("padEnd", () => {
    assertEquals(
        padEnd("Hello", 10, "o"),
        "Hello".padEnd(10, "o")
    );

    assertEquals(
        padEnd("Hello", 50),
        "Hello".padEnd(50)
    );
});
