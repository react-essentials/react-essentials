import * as React from 'react';

interface HelloProps {
    name: string;
}

const Hello = (props: HelloProps) => (
    <h1>Hello {props.name}!</h1>
);

export const Root = () => (
    <Hello name="world"/>
);
