/** Formate numbers into days first letter
 * @param  {number} index
 * @return {string}
 */

const getDayByIndex = (index) => {
    if (!index) return 0
    switch (index) {
        case 1 || '1':
            return 'L';
        case 2 || '2':
            return 'M';
        case 3 || '3':
            return 'M';
        case 4 || '4':
            return 'J';
        case 5 || '5':
            return 'V';
        case 6 || '6':
            return 'S';
        case 7 || '7':
            return 'D';
        default:
            return 0
    }
}

export default getDayByIndex