import React from 'react';
import Button from '../../Components/Styles/Buttons/Button/Button';
import {
    Header,
    HeaderText,
    HeadingH1,
    Open,
    StyledClock,
    OpenText,
    Caption,
    Body01,
    HeaderImage,
    Rating,
    Title021,
    StyledStars,
    Service,
    Circle,
    Body02,
    StyledImage,
    RatingText,
    Title022,
    Title02
} from './HomeHeader.style';

import {
    Quote,
    HeadingH2,
    QuoteLeft,
    Feature1,
    Feature2,
    Feature3,
    Icon
} from './HomeQuote.style';

const Home = () => {
    return (
        <>
            {/* // HEADER */}
            <Header>
                <HeaderText>
                    <HeadingH1>
                        Get your vehicle service done online at one place
                    </HeadingH1>
                    <Button text='Book a service' />
                    <Open>
                        <StyledClock />
                        <OpenText>
                            <Caption>
                                We are open
                            </Caption>
                            <Body01>
                                Monday to Friday 9:00 AM to 10:00 AM
                            </Body01>
                        </OpenText>
                    </Open>
                </HeaderText>
                <HeaderImage>
                    <Rating>
                        <RatingText>
                            <Title02>
                                4.5/5
                            </Title02>
                            <Caption>
                                Rating
                            </Caption>
                        </RatingText>
                        <StyledStars />
                    </Rating>
                    <Service>
                        <Circle>
                            <Title021>
                                24
                            </Title021>
                            <Body02>
                                hr
                            </Body02>
                        </Circle>
                        <Title022>
                            Quick service
                        </Title022>
                    </Service>
                    <StyledImage />
                </HeaderImage>
            </Header>
            {/* // HEADER END */}
            {/* // QUOTE */}
            <Quote>
                <QuoteLeft>
                    <HeadingH2>
                        We are taking car servicing seriously
                    </HeadingH2>
                    <Feature1>
                        <Icon></Icon>
                        <Title02></Title02>
                        <Body02></Body02>                    
                    </Feature1>
                    <Feature2>
                        <Icon></Icon>
                        <Title02></Title02>
                        <Body02></Body02> 
                    </Feature2>
                    <Feature3>
                        <Icon></Icon>
                        <Title02></Title02>
                        <Body02></Body02> 
                    </Feature3>
                </QuoteLeft>
            </Quote>
        </>
    );
};

export default Home;