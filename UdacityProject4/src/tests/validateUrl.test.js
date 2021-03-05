import { TestScheduler } from 'jest'
import { validateUrl } from '../client/js/validateUrl'

test('validate url', () => {
    expect(validateUrl('https://www.google.com')).toBe(true);
    expect(validateUrl('httbs://www.google.con')).toBe(false);
});