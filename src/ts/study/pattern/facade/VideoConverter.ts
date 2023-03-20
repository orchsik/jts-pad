class VideoFile {
  private _filename: string;
  constructor(filename: string) {
    this._filename = filename;
  }

  get filename(): string {
    return this._filename;
  }

  public save(): void {
    console.log(`VideoFile: saving file [${this._filename}]`);
  }
}

interface Codec {
  name: string;
}
class OggCompressionCodec implements Codec {
  name = 'Ogg';
}
class MPEG4CompressionCodec implements Codec {
  name = 'MPEG4';
}
class CodecFactory {
  public static extract(file: VideoFile): Codec {
    const type = file.filename.split('.')[1];
    if (type === 'ogg') {
      return new OggCompressionCodec();
    } else {
      return new MPEG4CompressionCodec();
    }
  }
}

type Buffer = string;
class BitrateReader {
  public static read(filename: string, sourceCodec: Codec): Buffer {
    return `${filename} --buffered`;
  }
  public static convert(buffer: Buffer, sourceCodec: Codec): VideoFile {
    return new VideoFile(`${buffer} --converted-${sourceCodec.name}`);
  }
}

class AudioMixer {
  public fix(file: VideoFile): VideoFile {
    return new VideoFile(`${file.filename} --fixed`);
  }
}

class VideoConverter {
  public convert(filename: string, format: string): VideoFile {
    console.log(`VideoConverter: conversion started. [${filename}]`);
    const file = new VideoFile(filename);
    const sourceCodec = CodecFactory.extract(file);

    let destinationCodec;
    if (format === 'mp4') {
      destinationCodec = new MPEG4CompressionCodec();
    } else {
      destinationCodec = new OggCompressionCodec();
    }

    const buffer = BitrateReader.read(filename, sourceCodec);
    let result = BitrateReader.convert(buffer, destinationCodec);
    result = new AudioMixer().fix(result);
    console.log(`VideoConverter: conversion completed.`);
    return result;
  }
}

class Application {
  public static main(): void {
    const convertoer = new VideoConverter();
    const mp4 = convertoer.convert('funny-cats-video.ogg', 'mp4');
    mp4.save();
  }
}

Application.main();

export {};
