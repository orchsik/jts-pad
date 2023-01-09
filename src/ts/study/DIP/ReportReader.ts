import { readFile as readFileCb } from 'fs';
import { promisify } from 'util';

const readFile = promisify(readFileCb);

type ReportData = {};

interface Formatter {
  parse<T>(content: string): T;
}

class XmlFormatter implements Formatter {
  parse<T>(content: string): T {
    // XML 문자열을 T 객체로 변환
    return content as T;
  }
}

class JsonFormatter implements Formatter {
  parse<T>(content: string): T {
    // JSON 문자열을 T 객체로 변환
    return content as T;
  }
}

class ReportReader {
  constructor(private readonly formatter: Formatter) {}

  async read(path: string): Promise<ReportData> {
    const text = await readFile(path, 'utf8');
    return this.formatter.parse<ReportData>(text);
  }
}

let reader;

reader = new ReportReader(new XmlFormatter());
reader.read('report.xml').then((report) => {
  console.log(report);
});

reader = new ReportReader(new JsonFormatter());
reader.read('report.json').then((report) => {
  console.log(report);
});

/**
 * 
const readFile = promisify(readFileCb);

type ReportData = {};

class XmlFormatter {
  parse<T>(content: string): T {
    // XML 문자열을 T 객체로 변환
    return content as T;
  }
}

class ReportReader {
  // BAD: 특정 요청의 구현에 의존하는 것을 만들었다.
  // XmlFormatter `parse` 메소드에 의존하는 `ReportReader`를 만들어야 한다.
  private readonly formatter = new XmlFormatter();

  async read(path: string): Promise<ReportData> {
    const text = await readFile(path, 'utf8');
    return this.formatter.parse<ReportData>(text);
  }
}

const reader = new ReportReader();
reader.read('report.xml').then((report) => {
  console.log(report);
});
 */
