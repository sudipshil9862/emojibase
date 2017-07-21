/**
 * @copyright   2017, Miles Johnson
 * @license     https://opensource.org/licenses/MIT
 * @flow
 */

import parse from './parse';

import type { UnicodeNamesMap } from '../types';

/**
 * Parses the official unicode list for all character names.
 *
 * Example: http://unicode.org/Public/10.0.0/ucd/UnicodeData.txt
 */
export default function parseNames(data: string): UnicodeNamesMap {
  return parse(data).reduce((map, [hexcode, name]) => {
    map[hexcode] = name;

    return map;
  }, {});
}
