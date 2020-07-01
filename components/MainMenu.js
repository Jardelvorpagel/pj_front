import styled from '@emotion/styled'
import Link from 'next/link'

function MainMenu() {
    return (
        <>
            <Menu>
                <MenuItem>
                    <Link href="/">
                        Home
                    </Link>
                </MenuItem>

                <MenuItem>
                    <Link href="/">
                        Demandas
                    </Link>
                </MenuItem>

                <MenuItem>
                    <Link href="/">
                        Ofertas
                    </Link>
                </MenuItem>
            </Menu>
        </>
    )
}

const Menu = styled.ul`
    padding: 0;
    margin: 0;
    list-style: none;
    display: flex;
    justify-content: center;
`

const MenuItem = styled.li`
    padding: 0 10px;

    a {
        color: #fff;
        font-family: 'Open Sans', Helvetica, sans-serif;
        font-weight: 500;
    }
`

export default MainMenu