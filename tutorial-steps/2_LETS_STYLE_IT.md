### Let’s style it!

[Return to tutorial steps list](../README.md)


The goal of this step is to add styling to current components using [styled-components](https://www.styled-components.com) with [reactstrap](https://reactstrap.github.io/) (bootstrap 4 react components).


##### Integrate required libraries to project
1. Install required dependencies (alternatively you can checkout next commit and skip this config):
    * `npm install --save bootstrap reactstrap @types/reactstrap styled-components  @types/styled-components@4.0.3`
    * `npm install --save-dev mini-css-extract-plugin css-loader`
1. Import `bootstrap.css` in `index.tsx`:

        import 'bootstrap/dist/css/bootstrap.css';
1. Add `css-loader` to `webpack.config.js`:
    * import `mini-css-extract-plugin`

            const MiniCssExtractPlugin = require('mini-css-extract-plugin');

    * add module rule and a new plugin:

            module: {
                rules: [
                    {test: /\.tsx?$/, loader: 'awesome-typescript-loader'},
                    {test: /\.css$/, use: [MiniCssExtractPlugin.loader, {loader: 'css-loader'}]}
                ]
            },
            plugins: [
                new MiniCssExtractPlugin({
                    filename: 'styles.css'
                }),
                new HtmlWebPackPlugin({
                    alwaysWriteToDisk: true,
                    template: './src/index-template.html',
                    filename: '../index.html'
                }),
                new HtmlWebpackHarddiskPlugin()
            ]
1. Restart dev server (`npm start`).


##### Bookings need some styling. Let’s use our new toys :)
1. Create `src/components/Header.tsx`:

        import * as React from 'react';
        import styled from 'styled-components';
        
        export default class Header extends React.PureComponent {
            render() {
                return (
                    <HeaderBar>
                        <HeaderLink>Just Bookings</HeaderLink>
                    </HeaderBar>
                )
            }
        }
        
        const HeaderBar = styled.header.attrs({
            className: 'text-center py-2'
        })`
          background-color: #20232a;
        `;
        
        const HeaderLink = styled.a.attrs({
            href: '#'
        })`
          color: #fff;
          font-size: 1.5rem;
        
          &:hover {
            color: #61dafb;
            text-decoration: none;
          }
        `;
1. Add `Header` to `Root`:

        import Header from './Header';
        
        export const Root = () => (
            <>
                <Header/>
                <BookingsPage/>
            </>
        );
1. Wrap `BookingPage` with a bootstrap container:

        import Container from 'reactstrap/lib/Container';
        
        export default class BookingsPage extends React.PureComponent {
            render() {
                return (
                    <Container className='pt-4'>
                        <BookingBox bookingNumber='123456'
                                    departureAirport='LAS'
                                    arrivalAirport='LAX'
                                    departureDateTime='2019-07-12T09:00'
                                    airlineCode='AA'
                                    price={95.25}/>
                        <BookingBox bookingNumber='654321'
                                    departureAirport='DUS'
                                    arrivalAirport='PMI'
                                    departureDateTime='2019-08-16T17:00'
                                    airlineCode='LH'
                                    price={160.99}/>
                    </Container>
                )
            }
        }
1. Create reusable component for styling purposes (`src/components/HeaderWithDescription`):

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
1. Add styling to `BookingBox` (using `HeaderWithDescription`):

        import Col from 'reactstrap/lib/Col';
        import Row from 'reactstrap/lib/Row';
        import styled from 'styled-components';
        import {HeaderWithDescription} from './HeaderWithDescription';
        
        export default class BookingBox extends React.PureComponent<BookingBoxProps> {
            render() {
                const {
                    bookingNumber, departureAirport, arrivalAirport,
                    departureDateTime, airlineCode, price
                } = this.props;
                const formattedDate = new Date(departureDateTime).toLocaleString();
        
                return (
                    <BookingWrapper>
                        <Row>
                            <Col xs={6} className='d-flex'>
                                <LogoWrapper>
                                    <Logo src={airlineToImgSrc(airlineCode)} alt={airlineCode}/>
                                </LogoWrapper>
                                <div>
                                    <HeaderWithDescription
                                        heading={`${departureAirport} - ${arrivalAirport}`}
                                        description={formattedDate}/>
                                </div>
                            </Col>
                            <Col xs={3}>
                                <HeaderWithDescription
                                    heading={bookingNumber}
                                    description='booking no.'/>
                            </Col>
                            <Col xs={3}>
                                <PriceWrapper>
                                    <span className='text-right'>
                                        <Price>${price}</Price>
                                        <CloseBtn>×</CloseBtn>
                                    </span>
                                </PriceWrapper>
                            </Col>
                        </Row>
                    </BookingWrapper>
                )
            }
        }
        
        const BookingWrapper = styled.a.attrs({
            className: 'd-block border border-secondary rounded my-3 py-2 px-3',
            href: '#'
        })`
          border-color: rgb(204, 204, 204) !important;
          cursor: pointer;
          color: #212529;
        
          &:hover, &:active {
            color: #212529;
            text-decoration: none;
            box-shadow: rgba(0, 0, 0, 0.31) 0 0 5px 0;
          }
        `;
        
        const LogoWrapper = styled.div.attrs({
            className: 'd-flex mr-1'
        })`
          max-width: 40px;
        `;
        
        const Logo = styled.img.attrs({
            className: 'align-self-center d-block'
        })`
          max-width: 40px;
          max-height: 40px;
        `;
        
        const PriceWrapper = styled.div.attrs({
            className: 'h-100 d-flex flex-column justify-content-center'
        })`
          flex: 1;
        `;
        
        const Price = styled.span`
          font-size: 1.2rem;
          font-weight: 500;
        `;
        
        const CloseBtn = styled.span.attrs({
            className: 'close text-danger ml-2'
        })`
          opacity: 1;
        `;
1. Try to add custom styling with `styled-components` and `reactstrap`.

Next step: [Initial booking data](3_INITIAL_BOOKING_DATA.md)