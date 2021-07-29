import { Strings } from "../../mod.ts";
import { assertEquals } from "../../deps.ts";

const { link } = Strings;

Deno.test("link", () => {
    assertEquals(
        link("wioenena", "https://www.github.com/wioenena-q"),
        "wioenena".link("https://www.github.com/wioenena-q")
    );
});
