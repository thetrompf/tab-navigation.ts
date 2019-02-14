import React from 'react';
import { cleanup, render } from 'react-testing-library';
import { Legend } from '../Legend';

afterEach(cleanup);
test('ctrl', () => {
    const { getByText } = render(
        <Legend
            hotkeys={[
                {
                    alt: true,
                    key: 'f',
                },
            ]}
        />,
    );

    getByText('alt+f');
});
