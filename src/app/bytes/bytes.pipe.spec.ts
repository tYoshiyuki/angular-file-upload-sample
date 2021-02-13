import { BytesPipe } from './bytes.pipe';

describe('BytesPipe', () => {
  it('NormalWithZero', () => {
    // Arrange
    const pipe = new BytesPipe();

    // Act
    const result = pipe.transform(0);

    // Assert
    expect(result).toBe('0');
  });

  it('NormalWithByte', () => {
    // Arrange
    const pipe = new BytesPipe();

    // Act
    const result = pipe.transform(10);

    // Assert
    expect(result).toBe('10.0 bytes');
  });

  it('NormalWithKByte', () => {
    // Arrange
    const pipe = new BytesPipe();

    // Act
    const result = pipe.transform(1024);

    // Assert
    expect(result).toBe('1.0 KB');
  });

  it('NormalWithMByte', () => {
    // Arrange
    const pipe = new BytesPipe();

    // Act
    const result = pipe.transform(1024 * 1024);

    // Assert
    expect(result).toBe('1.0 MB');
  });

  it('NormalWithGByte', () => {
    // Arrange
    const pipe = new BytesPipe();

    // Act
    const result = pipe.transform(1024 * 1024 * 1024);

    // Assert
    expect(result).toBe('1.0 GB');
  });

  it('NormalWithTByte', () => {
    // Arrange
    const pipe = new BytesPipe();

    // Act
    const result = pipe.transform(1024 * 1024 * 1024 * 1024);

    // Assert
    expect(result).toBe('1.0 TB');
  });

});
