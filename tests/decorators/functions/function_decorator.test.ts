import { Decorators, Strings } from "../../../mod.ts";
import { assertEquals } from "../../../deps.ts";

const { Functions: { applyDecorator } } = Decorators;
const { repeat: _repeat } = Strings;

function repeat(_: Function, size: number, length: number) {
    let executedSize = 0;
    for (let i = 0; i < size; i++) {
        _(length);
        executedSize++;
    }

    return executedSize;
}

function printStar(length: number) {
    console.log(_repeat("*", length));
}

const decorated = applyDecorator(printStar, repeat);

Deno.test("repeat", () => {
    console.log("\n");
    assertEquals(
        decorated(5, 10),
        5
    );
});


