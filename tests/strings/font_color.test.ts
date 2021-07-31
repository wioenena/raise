import { Strings } from '../../mod.ts';
import { assertEquals } from '../../deps.ts';

const { fontColor } = Strings;

Deno.test('fontColor', () => {
    assertEquals(
        fontColor('Hello', 'red'),
        'Hello'.fontcolor('red')
    );
});
