import { Strings } from '../../mod.ts';
import { assertEquals } from '../../deps.ts';

const { tag } = Strings;

Deno.test('tag', () => {
    assertEquals(
        tag('myTag', 'Hello'),
        '<myTag>Hello</myTag>'
    );
});
