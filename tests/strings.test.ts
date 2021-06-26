import { assertEquals } from "https://deno.land/std@0.99.0/testing/asserts.ts";
import { StringUtils } from "../mod.ts";

Deno.test("Title", () => {
    assertEquals(
        StringUtils.title("Hello world!"),
        "Hello World!"
    );

    assertEquals(
        StringUtils.title(StringUtils as any),
        null
    );
});

Deno.test("isString", () => {
    assertEquals(
        StringUtils.isString("Hi"),
        true
    );

    assertEquals(
        StringUtils.isString(3),
        false
    );

    assertEquals( // eslint-disable-next-line no-new-wrappers
        StringUtils.isString(new String("hi")),
        true
    );
});

Deno.test("isFullString", () => {
    assertEquals(
        StringUtils.isFullString(null as any),
        false
    );

    assertEquals(
        StringUtils.isFullString(""),
        false
    );
    assertEquals(
        StringUtils.isFullString(" "),
        false
    );

    assertEquals(
        StringUtils.isFullString("Hello"),
        true
    );
});

Deno.test("isCamelCase", () => {
    assertEquals(
        StringUtils.isCamelCase("hi"),
        true
    );
    assertEquals(
        StringUtils.isCamelCase("hI"),
        false
    );
});

Deno.test("isUrl", () => {
    assertEquals(
        StringUtils.isUrl("https://www.google.com"),
        true
    );

    assertEquals(
        StringUtils.isUrl("http://www.google.com"),
        true
    );

    assertEquals(
        StringUtils.isUrl(".mysite.com"),
        false
    );
});

Deno.test("isEmail", () => {
    assertEquals(
        StringUtils.isEmail("raise@raise.raise"),
        true
    );

    assertEquals(
        StringUtils.isEmail("raise@raise"),
        false
    );

    assertEquals(
        StringUtils.isEmail("raise.raise"),
        false
    );
});

Deno.test("isSnakeCase", () => {
    assertEquals(
        StringUtils.isSnakeCase("ab_cd"),
        true
    );

    assertEquals(
        StringUtils.isSnakeCase("ab_"),
        true
    );

    assertEquals(
        StringUtils.isSnakeCase("_"),
        false
    );

    assertEquals(
        StringUtils.isSnakeCase("ab"),
        false
    );
});
