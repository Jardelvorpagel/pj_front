import styled from '@emotion/styled'
import { Container, Row, Col } from 'react-bootstrap'

function HeroSearchBar() {
    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <SearchContent>
                            <form>
                                <input type="text" name="keywords" placeholder="Faça uma busca" />
                                <select>
                                    <option selected value="todos">Oportunidade</option>
                                    <option value="ofertas">Ofertas</option>
                                    <option value="demandas">Demanda</option>
                                </select>
                                <select>
                                    <option selected value="todos">Segmento</option>
                                    <option value="administracao">Administração</option>
                                    <option value="dev">Desenvolvimento</option>
                                    <option value="pesquisa">Pesquisa</option>
                                </select>
                                <input type="submit" value="Procurar" />
                            </form>
                        </SearchContent>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

const SearchContent = styled.div`
    padding-top: 300px;

    form {
        display: flex;
        height: 70px;
        border: 5px solid rgba(255, 255, 255, 0.25);
        border-radius: 40px;

        > * {
            height: 100%;
        }

        [name="keywords"] {
            border-radius: 40px 0 0 40px;
            flex: 2;
        }

        [type="submit"] {
            border-radius: 0 40px 40px 0;
            color: #fff;
            background: ${props => props.theme.colors.primary};
            transition: .4s;

            &:hover {
                background: ${props => props.theme.colors.primaryDarken};
            }
        }

        input,
        select {
            color: #838383;
            margin: 0;
            padding: 0 50px;
            border: none;
        }
    }
`

export default HeroSearchBar