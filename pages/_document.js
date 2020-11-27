import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <Html>
                <Head>
                    <link rel="icon" href="/favicon.ico" />
                    {/* <link rel="stylesheet" type="text/css" href="https://grandetest.com/theme/jobhunt-html/css/bootstrap-grid.css" /> */}
                    <link rel="stylesheet" href="/css/icons.css" />
                    <link rel="stylesheet" href="/css/animate.min.css" />
                    <link rel="stylesheet" type="text/css" href="/css/style.css" />
                    <link rel="stylesheet" type="text/css" href="/css/responsive.css" />
                    <link rel="stylesheet" type="text/css" href="/css/chosen.css" />
                    <link rel="stylesheet" type="text/css" href="/css/colors/colors.css" />
                    {/* <link rel="stylesheet" type="text/css" href="https://grandetest.com/theme/jobhunt-html/css/bootstrap.css" /> */}
                    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                    {/* <script src="https://grandetest.com/theme/jobhunt-html/js/jquery.min.js" type="text/javascript"></script>
                    <script src="https://grandetest.com/theme/jobhunt-html/js/modernizr.js" type="text/javascript"></script>
                    <script src="https://grandetest.com/theme/jobhunt-html/js/script.js" type="text/javascript"></script>
                    <script src="https://grandetest.com/theme/jobhunt-html/js/bootstrap.min.js" type="text/javascript"></script>
                    <script src="https://grandetest.com/theme/jobhunt-html/js/wow.min.js" type="text/javascript"></script>
                    <script src="https://grandetest.com/theme/jobhunt-html/js/slick.min.js" type="text/javascript"></script>
                    <script src="https://grandetest.com/theme/jobhunt-html/js/parallax.js" type="text/javascript"></script>
                    <script src="https://grandetest.com/theme/jobhunt-html/js/select-chosen.js" type="text/javascript"></script>
                    <script src="https://grandetest.com/theme/jobhunt-html/js/counter.js" type="text/javascript"></script> */}
                </body>
            </Html>
        )
    }
}

export default MyDocument