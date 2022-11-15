// Once your custom font has been loaded...
import {createIconSetFromFontello} from 'react-native-vector-icons';
import fontelloConfig from './falight.json';
// Both the font name and files exported from Fontello are most likely called "fontello"
const Icon = createIconSetFromFontello(
  fontelloConfig,
  'falight',
  'falight.ttf',
);
export default Icon;
