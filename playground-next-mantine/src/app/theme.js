import { createTheme } from '@mantine/core';

export const theme = createTheme({
  fontFamily: 'Poppins, sans-serif',
  colors: {
    poisum: [
      '#eff2d9', '#cdd8b0', '#a9be87', '#85a55d', '#618b33', '#4a7125', '#355819', '#223f0d', '#102603', '#081202',
    ],
  },
  primaryColor: 'poisum',

  typography: {
    fontFamily: 'Poppins, sans-serif',
    fontSize: 14,
    title: { fontSize: '30px', fontWeight: 600, lineHeight: 1.2 },
    header: { fontSize: '24px', fontWeight: 600, lineHeight: 1.2 },
    subtitle: { fontSize: '18px', fontWeight: 500, lineHeight: 1.4 },
    body: { fontSize: '14px', lineHeight: 1.5 },
    note: { fontSize: '10px', color: '#888' },
  },

//   palette: {
//     primary: { main: '#39493F', contrastText: '#fff' },
//     secondary: { main: '#FFD166' },
//     background: { main: '#FFFEFA', contrastText: '#1A1A1A' },
//   },

  components: {
    Button: {
      defaultProps: {
        color: 'cyan',
        variant: 'outline',
      },
    },
  },
});
