const sorterId = Symbol('_sorter_');

class Sort {
  fn;
  sorter;

  constructor(name) {
    this[sorterId] = name;
  }

  execute(...args) {
    return this.fn(...args);
  }

  use(fn) {
    this.fn = fn;
    return this;
  }
}

class Sorter {
  sorter;

  constructor() {}

  sort(...args) {
    return this.sorter.execute.call(this.sorter, ...args);
  }

  use(sorter) {
    if (!(sorterId in sorter)) {
      throw new Error('Please use Sort as a sorter');
    }
    this.sorter = sorter;
    return this;
  }
}

/**
 * 👇 Client
 */
const numberSorter = new Sort('number');
numberSorter.use((item1, item2) => item1 - item2);

const letterSorter = new Sort('letter');
letterSorter.use((item1, item2) => item1.localeCompare(item2));

const dateSorter = new Sort('date');
dateSorter.use((item1, item2) => item1.getTime() - item2.getTime());

const domElementSizeSorter = new Sort('dom-element-sizes');
domElementSizeSorter.use(
  (item1, item2) => item1.scrollHeight - item2.scrollHeight
);

const sorter = new Sorter();

function sort(items) {
  const type = typeof items[0];
  sorter.use(
    type === 'number'
      ? numberSorter
      : type === 'string'
      ? letterSorter
      : items[0] instanceof Date
      ? dateSorter
      : items[0] && type === 'object' && 'tagName' in items[0]
      ? domElementSizeSorter
      : Array.prototype.sort.bind(Array)
  );
  return [...items].sort(sorter.sort.bind(sorter));
}

const nums = [2, 345, 65, 9, 23, 13, 4124, 32, 64684, 8];
console.log('Sorted numbers', sort(nums));

const letters = ['0', 'asdf', 'xcvb', '3456', '!@#$', '', '쿠루루삥뽕'];
console.log('Sorted letters', sort(letters));

const dates = [Date()];
console.log('Sorted dates', sort(dates));
