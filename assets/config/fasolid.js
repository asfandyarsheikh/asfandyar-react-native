// Once your custom font has been loaded...
import {createIconSetFromFontello} from 'react-native-vector-icons';
import fontelloConfig from './fasolid.json';
// Both the font name and files exported from Fontello are most likely called "fontello"
const Icon = createIconSetFromFontello(
  fontelloConfig,
  'fasolid',
  'fasolid.ttf',
);
export default Icon;
