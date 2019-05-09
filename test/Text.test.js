import * as React from "react";
import renderer from 'react-test-renderer';
import createText from "../src"

const Text = createText(React);

test(`render <Text/>`, () => {
    const component = renderer.create(
        <Text width={100} height={100} scale={1}>hello</Text>
    );
    expect(component.toJSON()).toMatchSnapshot();
});

test(`render <Text/> with fontSize less than 12`, () => {
    const component = renderer.create(
        <Text width={100} height={100} scale={0.5} style={{fontSize: 12}}>hello</Text>
    );
    expect(component.toJSON()).toMatchSnapshot();
});