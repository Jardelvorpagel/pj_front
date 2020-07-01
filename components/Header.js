import Link from 'next/link'
import styled from '@emotion/styled'
import { Container, Row, Col } from 'react-bootstrap'
import MainMenu from 'components/MainMenu'

function Header() {
    return (
        <HeaderStyle>
            <Container>
                <Row>
                    <Col md="3">
                        <Logo>
                            <Link href="/">
                                West Jobs
                            </Link>
                        </Logo>
                    </Col>
                    <Col md="6">
                        <MainMenu />
                    </Col>
                    <Col md="3">
                        <Login>
                            <Link href="/">
                                Login
                            </Link>
                        </Login>
                    </Col>
                </Row>
            </Container>
        </HeaderStyle>
    )
}

const HeaderStyle = styled.header`
    position: absolute;
    left: 0;
    right: 0;
    z-index: 2;
    padding: 15px 0;

    .row {
        align-items: center;
    }
`

const Logo = styled.div`
    display: inline-block;

    a {
        color: #fff;
        font-size: 30px;
    }
`

const Login = styled.div`
    display: block;
    text-align: right;

    a {
        color: #fff;
        padding: 10px 20px;
        border-radius: 20px;
        border: 2px solid ${props => props.theme.colors.primary};
        font-weight: bold;
        text-decoration: none;
        transition: .4s;

        &:hover {
            color: #fff;
            border-color: #fff;
            background: ${props => props.theme.colors.primary};
        }
    }
`

export default Header