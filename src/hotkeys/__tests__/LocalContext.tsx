import React from 'react';
import { cleanup, render } from 'react-testing-library';
import { expectInstanceOf } from '../../components/__tests__/__helpers__/assert';
import { Legend } from '../Legend';

afterEach(cleanup);
test('1 + 1 = 2', () => {
    const { container } = render(<Legend hotkeys={[]} />);
    expectInstanceOf(container.firstElementChild, HTMLDivElement);
    expect(1 + 1).toBe(2);
});
