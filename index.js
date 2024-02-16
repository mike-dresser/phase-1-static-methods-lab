class Formatter {
  static capitalize(string) {
    return `${string[0].toUpperCase()}${string.slice(1)}`;
  }

  static sanitize(string) {
    const key = `abcdefghijklmnopqrstuvwxyz1234567890-' `;
    let result = '';
    for (let char of string) {
      if (key.includes(char.toLowerCase())) {
        result += char;
      }
    }
    return result;
  }

  static titleize(string) {
    const exclude = [
      'the',
      'a',
      'an',
      'but',
      'of',
      'and',
      'for',
      'at',
      'by',
      'from',
    ];
    const array = string.split(' ');
    array[0] = array[0][0].toUpperCase() + array[0].slice(1).toLowerCase();
    for (let i = 1; i < array.length; i++) {
      array[i] = array[i].toLowerCase();
      if (exclude.includes(array[i])) {
        continue;
      }
      array[i] = array[i][0].toUpperCase() + array[i].slice(1);
    }
    return array.join(' ');
  }
}
