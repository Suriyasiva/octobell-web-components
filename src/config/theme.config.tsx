/* eslint-disable quotes */
import { baseTheme, extendTheme } from '@chakra-ui/react';
import '@fontsource/inter';
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';
import '@fontsource/inter/700.css';

const colors = {
  yellow: {
    '50': '#FEFBE8',
    '100': '#FEF7C3',
    '200': '#FEEE95',
    '300': '#FDE272',
    '400': '#FAC515',
    '500': '#EAAA08',
    '600': '#CA8504',
    '700': '#A15C07',
    '800': '#854A0E',
    '900': '#713B12',
  },
  green: {
    '25': '#F6FEF9',
    '50': '#ECFDF3',
    '100': '#DCFAE6',
    '200': '#ABEFC6',
    '300': '#75E0A7',
    '400': '#47CD89',
    '500': '#17B26A',
    '600': '#079455',
    '700': '#067647',
    '800': '#085D3A',
    '900': '#074D31',
  },
  red: {
    '25': '#FFFBFA',
    '50': '#FEF3F2',
    '100': '#FEE4E2',
    '200': '#FECDCA',
    '300': '#FDA29B',
    '400': '#F97066',
    '500': '#F04438',
    '600': '#D92D20',
    '700': '#B42318',
    '800': '#912018',
    '900': '#7A271A',
  },
  brand: {
    '50': '#F5F5FF',
    '75': '#F4F4FF',
    '100': '#CACAFD',
    '200': '#A0A0FA',
    '300': '#7B7BF5 ',
    '400': '#5C5CED',
    '500': '#4444E4',
    '600': '#3131D7',
    '700': '#2323C7  ',
    '800': '#1919B3',
    '900': '#12129E',
    '950': '#0E0E87',
  },
  gray: {
    '50': '#EAECF0',
    '100': '#EAECF0',
    '200': '#667085',
    '300': '#98A2B3',
    '400': '#475467',
    '500': '#D0D5DD',
    '600': '#344054',
    '700': '#101828',
  },
  warning: {
    '25': '#FFFCF5',
    '50': '#FFFAEB',
    '100': '#FEF0C7',
    '200': '#FEDF89',
    '300': '#FEC84B',
    '400': '#FDB022',
    '500': '#F79009',
    '600': '#DC6803',
    '700': '#B54708',
    '800': '#93370D',
    '900': '#7A2E0E',
  },
  orange: {
    '25': '#FEFAF5',
    '50': '#FEF6EE',
    '100': '#FDEAD7',
    '200': '#F9DBAF',
    '300': '#F7B27A',
    '400': '#F38744',
    '500': '#EF6820',
    '600': '#E04F16',
    '700': '#B93815',
    '800': '#932F19',
    '900': '#772917',
  },
};

const activeLabelStyles = {
  transform: 'scale(0.85) translateY(-24px)',
};

const headingStyles = {
  color: 'gray.700',
};

const OctobellAppTheme = extendTheme(baseTheme, {
  fonts: {
    heading: `'Inter', sans-serif`,
    body: `'Inter', sans-serif`,
  },
  styles: {
    global: {
      body: {
        fontSize: 'md', // Default font size
      },
      p: {
        color: 'gray.400', // Color for paragraph tags
      },
      h1: headingStyles,
      h2: headingStyles,
      h3: headingStyles,
    },
  },
  borders: {},
  colors,
  fontSizes: {
    xs: '0.75rem',
    sm: '0.85rem',
    md: '0.9rem',
    medium: '0.9rem',
    lg: '0.95rem',
    xl: '1rem',
    '2xl': '1.125rem',
    '3xl': '1.25rem',
    '4xl': '1.5rem',
    '5xl': '1.75rem',
    '6xl': '2rem',
    '7xl': '2.25rem',
    '8xl': '2.5rem',
    '9xl': '2.75rem',
    '10xl': '3rem',
  },
  components: {
    Form: {
      variants: {
        floating: {
          container: {
            _focusWithin: {
              label: {
                ...activeLabelStyles,
              },
            },
            'input:not(:placeholder-shown) + label, .chakra-select__wrapper + label, textarea:not(:placeholder-shown) ~ label':
              {
                ...activeLabelStyles,
              },
            label: {
              top: 0,
              left: 0,
              zIndex: 2,
              position: 'absolute',
              backgroundColor: 'white',
              pointerEvents: 'none',
              mx: 3,
              px: 1,
              my: 2,
              transformOrigin: 'left top',
            },
          },
        },
      },
    },
  },
});

export default OctobellAppTheme;
