import * as React from 'react';
import {FunctionComponent} from 'react';
import styled from 'styled-components';

export const HeaderWithDescription: FunctionComponent<{ heading: string; description: string }> =
    ({heading, description}) => (
        <>
            <div>
                <HeaderText>{heading}</HeaderText>
            </div>
            <div>
                <DescriptionText>{description}</DescriptionText>
            </div>
        </>
    );

const HeaderText = styled.span`
  font-size: 1rem;
  color: #333;
`;

const DescriptionText = styled.span.attrs({className: 'text-muted'})`
  font-size: 0.9rem;
`;
