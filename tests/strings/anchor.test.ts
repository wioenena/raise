import { Strings } from "../../mod.ts";
import { assertEquals } from "../../deps.ts";

const { anchor } = Strings;

Deno.test("anchor", () => {
    let myString = "Table of Contents";

    assertEquals(
        anchor(myString, "contents_anchor"),
        myString.anchor("contents_anchor")
    );
});
