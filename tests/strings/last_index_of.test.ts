import { Strings } from '../../mod.ts';
import { assertEquals } from '../../deps.ts';

const { lastIndexOf } = Strings;

Deno.test('lastIndexOf', () => {
    assertEquals(
        lastIndexOf('abcdef', 'e'),
        'abcdef'.lastIndexOf('e')
    );

    assertEquals(
        lastIndexOf('abcdef', 'e', 2),
        'abcdef'.lastIndexOf('e', 2)
    );

    assertEquals(
        lastIndexOf('abc def', 'def'),
        'abc def'.lastIndexOf('def')
    );

    assertEquals(
        lastIndexOf('I think that you need to go to the dentist so can feel more good', 'abc'),
        'I think that you need to go to the dentist so can feel more good'.lastIndexOf('abc')
    );

    assertEquals(
        lastIndexOf('I think that you need to go to the dentist so can feel more good', 'abc', 25),
        'I think that you need to go to the dentist so can feel more good'.lastIndexOf('abc', 25)
    );
});
