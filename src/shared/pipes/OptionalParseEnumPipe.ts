import { ArgumentMetadata, ParseEnumPipe } from '@nestjs/common';

export class OptionalParseEnumPipe<T = any> extends ParseEnumPipe<T> {
  constructor(enumType: T) {
    super(enumType);
  }

  transform(value: T, metadata: ArgumentMetadata) {
    if (typeof value === undefined) return undefined;
    return super.transform(value, metadata);
  }
}
