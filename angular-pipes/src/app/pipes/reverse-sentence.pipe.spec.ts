import { ReverseSentencePipe } from './reverse-sentence.pipe';

describe('ReverseSentencePipe', () => {
  it('create an instance', () => {
    const pipe = new ReverseSentencePipe();
    expect(pipe).toBeTruthy();
  });
});
