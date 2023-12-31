import React from 'react';
import Nav from '../../Components/Navbar/Navbar';
import CTA from '../../Components/CTA/CTA';
import Button from '../../Components/Styles/Buttons/Button/Button';
import ProcessCircle from '../../Components/Styles/ProcessCircle/ProcessCircle';
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
    Feature,
    CircleIcon,
    Body023,
    FeatureText,
    Feature1Icon,
    Feature2Icon,
    Feature3Icon,
    FeatureCircle,
    Link,
    LinkText,
    LinkArrow,
    QuoteRight,
    HeadingH3,
    QuoteForm,
    InputWhite
} from './HomeQuote.style';

import {
    Process,
    ProcessLeft,
    Body024,
    ProcessRight,
    Step,
    CircleContainer,
    Line,
    StepText,
    Title023,
    Body012
} from './HomeProcess.style';

import {
    Offer,
    OfferTitle,
    OfferHeading,
    OfferGrid,
    GridItem,
    Title024,
    StyledDiagnostics,
    StyledEngine,
    StyledWheel,
    StyledOil,
    StyledBody,
    StyledBatteries,
    StyledInsurance,
    StyledService
} from './HomeOffer.style.jsx';

import {
    Experience,
    Number,
    ExpTitle02,
    ExpH2
} from './HomeExp.style.jsx';

import {
    Brands,
    BrandsHeadingH3,
    BrandRow,
    StyledBrandLogo1,
    StyledBrandLogo2,
    StyledBrandLogo3,
    StyledBrandLogo4,
    StyledBrandLogo5
} from './HomeBrands.style.jsx';

const Home = () => {
    return (
        <>
            <Nav />
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

                    <Feature>
                        <FeatureCircle>
                            <Feature1Icon src={require('../../assets/img/ServiceIcon.png')} alt='' />
                            <CircleIcon />
                        </FeatureCircle>
                        <FeatureText>
                            <Title02>Convenient service</Title02>
                            <Body023>Through True Rich Attended does no end it his mother since real had half every him.</Body023>  
                        </FeatureText>
                    </Feature>

                    <Feature>
                    <FeatureCircle>
                            <Feature2Icon src={require('../../assets/img/ExpertIcon.png')} alt='' />
                            <CircleIcon />
                    </FeatureCircle>
                        <FeatureText>
                            <Title02>Expert mechanics</Title02>
                            <Body023>Through True Rich Attended does no end it his mother since real had half every him.</Body023> 
                        </FeatureText>
                    </Feature>

                    <Feature>
                    <FeatureCircle>
                            <Feature3Icon src={require('../../assets/img/PricingIcon.png')} alt='' />
                            <CircleIcon />
                    </FeatureCircle>
                        <FeatureText>
                            <Title02>Transparent pricing</Title02>
                            <Body023>Through True Rich Attended does no end it his mother since real had half every him.</Body023> 
                        </FeatureText>
                    </Feature>

                    <Link>
                        <LinkText>Know more about us</LinkText>
                        <LinkArrow />
                    </Link>
                </QuoteLeft>
                <QuoteRight>
                    <HeadingH3>Get a quote for the car service</HeadingH3>
                    
                    <QuoteForm>

                        <InputWhite 
                        type="text" 
                        placeholder="Enter your location" 
                        />

                        <InputWhite 
                        type="text" 
                        placeholder="Enter your location" 
                        />

                        <InputWhite 
                        type="text" 
                        placeholder="Enter your location" 
                        />

                        <InputWhite 
                        type="text" 
                        placeholder="Enter your location" 
                        />

                    </QuoteForm>

                    <Button text='Get your quote' />
                </QuoteRight>
            </Quote>
            {/* QUOTE END */}
            <Process>
                <ProcessLeft>
                    <HeadingH1>We follow a clear process to help you out.</HeadingH1>
                    <Body024>Through True Rich Attended does no end it his mother since real had half every him case in packages enquire</Body024>
                    <Button text='Learn more' />
                </ProcessLeft>
                <ProcessRight>
                    <Step>
                        <CircleContainer>
                            <ProcessCircle text='01'/>
                            <Line />
                        </CircleContainer>
                        <StepText>
                            <Title023>Get a Qoute</Title023>
                            <Body012>Through True Rich Attended does no end it his mother since real had half every.</Body012>
                        </StepText>
                    </Step>
                    <Step>
                        <CircleContainer>
                            <ProcessCircle text='02'/>
                            <Line />
                        </CircleContainer>
                        <StepText>
                            <Title023>Book an Appointment</Title023>
                            <Body012>Through True Rich Attended does no end it his mother since real had half every.</Body012>
                        </StepText>
                    </Step>
                    <Step>
                        <CircleContainer>
                            <ProcessCircle text='03'/>
                        </CircleContainer>
                        <StepText>
                            <Title023>Get your Service Done</Title023>
                            <Body012>Through True Rich Attended does no end it his mother since real had half every.</Body012>
                        </StepText>
                    </Step>
                </ProcessRight>
            </Process>
            <Offer>
                <OfferTitle>What we Offer</OfferTitle>
                <OfferHeading>We offer full service auto repair & maintenance</OfferHeading>
                <OfferGrid>
                    <GridItem>
                        <StyledDiagnostics />
                        <Title024>Diagnostics</Title024>
                    </GridItem>
                    <GridItem>
                        <StyledEngine />
                        <Title024>Engine Repair</Title024>
                    </GridItem>
                    <GridItem>
                        <StyledWheel />
                        <Title024>Wheel Repair</Title024>
                    </GridItem>
                    <GridItem>
                        <StyledOil />
                        <Title024>Oil Filter</Title024>
                    </GridItem>
                    <GridItem>
                        <StyledBody />
                        <Title024>Body Work</Title024>
                    </GridItem>
                    <GridItem>
                        <StyledBatteries />
                        <Title024>Batteries</Title024>
                    </GridItem>
                    <GridItem>
                        <StyledInsurance />
                        <Title024>Insurance Claim</Title024>
                    </GridItem>
                    <GridItem>
                        <StyledService />
                        <Title024>Custom Service</Title024>
                    </GridItem>
                </OfferGrid>
            </Offer>
            <CTA />
            <Experience>
                <Number>
                    <ExpH2>20+</ExpH2>
                    <ExpTitle02>Proffesional</ExpTitle02>
                </Number>
                <Number>
                    <ExpH2>10+</ExpH2>
                    <ExpTitle02>Years Eperience</ExpTitle02>
                </Number>
                <Number>
                    <ExpH2>12K+</ExpH2>
                    <ExpTitle02>Service Closed</ExpTitle02>
                </Number>
                <Number>
                    <ExpH2>100%</ExpH2>
                    <ExpTitle02>Customer Satisfaction</ExpTitle02>
                </Number>
            </Experience>
            <Brands>
                <BrandsHeadingH3>Brands we Serve</BrandsHeadingH3>
                <BrandRow>
                    <StyledBrandLogo1 />
                    <StyledBrandLogo2 />
                    <StyledBrandLogo3 />
                    <StyledBrandLogo4 />
                    <StyledBrandLogo5 />
                </BrandRow>
                <BrandRow>
                    <StyledBrandLogo1 />
                    <StyledBrandLogo2 />
                    <StyledBrandLogo3 />
                    <StyledBrandLogo4 />
                    <StyledBrandLogo5 />
                </BrandRow>
            </Brands>
        </>
    );
};

export default Home;