import { Strings } from '../../mod.ts';
import { assertEquals } from '../../deps.ts';

const { indexOf } = Strings;

Deno.test('indexOf', () => {
    assertEquals(
        indexOf('abcdef', 'e'),
        'abcdef'.indexOf('e')
    );

    assertEquals(
        indexOf('abcdef', 'e', 2),
        'abcdef'.indexOf('e', 2)
    );

    assertEquals(
        indexOf('abc def', 'def'),
        'abc def'.indexOf('def')
    );

    assertEquals(
        indexOf('abc def', 'def', 2),
        'abc def'.indexOf('def', 2)
    );

    assertEquals(
        indexOf('awc', 'b'),
        'awc'.indexOf('b')
    );

    assertEquals(
        indexOf('I think that you need to go to the dentist so can feel more good', 'to'),
        'I think that you need to go to the dentist so can feel more good'.indexOf('to')
    );

    assertEquals(
        indexOf('I think that you need to go to the dentist so can feel more good', 'to', 25),
        'I think that you need to go to the dentist so can feel more good'.indexOf('to', 25)
    );
});
