import Header from 'components/Header'
import { ThemeProvider } from 'emotion-theming'
import GlobalStyles from 'components/GlobalStyles/GlobalStyles'
import 'bootstrap/dist/css/bootstrap.min.css'

const theme = {
    colors: {
        primary: '#fb236a',
        primaryDarken: '#e60550'
    }
}

function MyApp({ Component, pageProps }) {
    return (
        <>
            <ThemeProvider theme={theme}>
                <GlobalStyles />
                <Header />
                <Component {...pageProps} />
            </ThemeProvider>
        </>
    )
}

export default MyApp