import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const styles = {
  global: props => ({
    body: {
      bg: mode('#f8f8f8', '#0e0e0e')(props),
      color: mode('#111111', '#f1f1f1')(props),
      fontFamily: "'Satoshi', sans-serif"
    }
  })
}

const components = {
  Heading: {
    baseStyle: {
      fontWeight: 500,
      letterSpacing: "-0.02em",
      fontFamily: "'Voyage', serif"
    },
    variants: {
      'section-title': {
        textDecoration: 'underline',
        fontSize: 20,
        textUnderlineOffset: 6,
        textDecorationColor: mode('#525252', '#777777'),
        textDecorationThickness: 4,
        marginTop: 3,
        marginBottom: 4
      }
    }
  },
  Link: {
    baseStyle: props => ({
      color: mode('#222222', '#e0e0e0')(props),
      textUnderlineOffset: 3
    })
  },
  Button: {
    variants: {
      'solid': props => ({
        bg: mode('#d1d1d1', '#2c2c2c')(props),
        color: mode('#111111', '#f1f1f1')(props),
        _hover: {
          bg: mode('#e5e5e5', '#1a1a1a')(props)
        }
      }),
      'ghost': props => ({
        bg: 'transparent',
        color: mode('#111111', '#f1f1f1')(props),
        _hover: {
          bg: mode('#e5e5e5', '#1a1a1a')(props)
        }
      }),
      'outline': props => ({
        bg: 'transparent',
        color: mode('#111111', '#f1f1f1')(props),
        borderColor: mode('#d1d1d1', '#444444')(props),
        _hover: {
          bg: mode('#e5e5e5', '#1a1a1a')(props)
        }
      })
    }
  },
  Card: {
    baseStyle: props => ({
      bg: mode('#ffffff', '#2c2c2c')(props),
      borderColor: mode('#d1d1d1', '#444444')(props)
    })
  }
}

const fonts = {
  heading: "'Voyage', serif",
  body: "'Satoshi', sans-serif"
}

const colors = {
  gray: {
    50: '#f8f8f8',
    100: '#f1f1f1',
    200: '#e5e5e5',
    300: '#d1d1d1',
    400: '#b4b4b4',
    500: '#999999',
    600: '#777777',
    700: '#555555',
    800: '#2c2c2c',
    900: '#1a1a1a'
  }
}

const config = {
  initialColorMode: 'system',
  useSystemColorMode: true
}

const theme = extendTheme({ config, styles, components, fonts, colors })
export default theme
