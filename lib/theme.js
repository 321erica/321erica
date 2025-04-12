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

// Remove border radius from all components site-wide
const radii = {
  none: '0',
  sm: '0',
  base: '0',
  md: '0',
  lg: '0',
  xl: '0',
  '2xl': '0',
  '3xl': '0',
  full: '0'
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
    baseStyle: {
      borderRadius: 0 // Override button border radius
    },
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
      borderColor: mode('#d1d1d1', '#444444')(props),
      borderRadius: 0 // Override card border radius
    })
  },
  Badge: {
    baseStyle: {
      borderRadius: 0 // Override badge border radius
    }
  },
  Input: {
    baseStyle: {
      field: {
        borderRadius: 0 // Override input border radius
      }
    }
  },
  Textarea: {
    baseStyle: {
      borderRadius: 0 // Override textarea border radius
    }
  },
  Select: {
    baseStyle: {
      field: {
        borderRadius: 0 // Override select border radius
      }
    }
  },
  Checkbox: {
    baseStyle: {
      control: {
        borderRadius: 0 // Override checkbox border radius
      }
    }
  },
  Modal: {
    baseStyle: {
      dialog: {
        borderRadius: 0 // Override modal border radius
      }
    }
  },
  Popover: {
    baseStyle: {
      content: {
        borderRadius: 0 // Override popover border radius
      }
    }
  },
  Tooltip: {
    baseStyle: {
      borderRadius: 0 // Override tooltip border radius
    }
  },
  Tag: {
    baseStyle: {
      container: {
        borderRadius: 0 // Override tag border radius
      }
    }
  },
  Avatar: {
    baseStyle: {
      container: {
        borderRadius: 0 // Override avatar border radius
      }
    }
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

const theme = extendTheme({ config, styles, components, fonts, colors, radii })
export default theme
