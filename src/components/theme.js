import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
    components: {
        Heading: {
            baseStyle: {
                color: 'lightgray',
                fontSize: ['xl', '2xl', '3xl', '4xl']
            }
        },
        Text: {
            baseStyle: {
                color: 'lightgray',
                fontSize: ['md', 'md', 'lg', 'xl']
            }
        },
        Box: {
            baseStyle: {
                _active: {bg: 'none'}
            }
        }
    },
    borders: {
        borderHighlights: '1px solid rgb(0, 225, 255)',
    },
    colors: {
        transparent: 'transparent',
        black: '#000',
        white: '#fff',
        highlights: 'rgb(0, 225, 255)',
        menuBackground: 'linear-gradient(315deg, #26455e 25% , #1e2a3a 75%)',
        menuMainColor: '#26455e',
        lightGlass: 'rgba(255, 255, 255, 0.1)',
        darkGlass: 'rgba(0, 0, 0, 0.3)',
        bgButtonClear: 'rgba(255, 255, 255, 0.2)',
        bgButtonMBG: 'rgba(38, 69, 94, 0.7)',
        bgButtonHighlights: 'rgba(0, 225, 255, 0.3)',
        gray: {
            900: '#3d3d3d',
            200: '#9c9c9c'
        },
        red: {
            500: '#dc143c',
        },
    }

})

export default theme 