import React from 'react';

export const Error = () => (

    <Wrapper>
        <Icon />
        <Header>Ooops! Something went wrong!</Header>
        <Paragraph>Please check your network connection<br /> and try again</Paragraph>
        <StyledLink to ="/">Back to home page</StyledLink>
    </Wrapper>
);