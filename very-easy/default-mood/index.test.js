import moodToday from './index';

describe('Javascript - Very Easy - 45', () => {
  test('Default Mood', () => {
    expect(moodToday('happy')).toEqual('Today, I am feeling happy');
    expect(moodToday('sad')).toEqual('Today, I am feeling sad');
    expect(moodToday('very happy')).toEqual('Today, I am feeling very happy');
    expect(moodToday('rather empty inside')).toEqual(
      'Today, I am feeling rather empty inside'
    );
    expect(moodToday('confused')).toEqual('Today, I am feeling confused');
    expect(moodToday()).toEqual('Today, I am feeling neutral');
  });
});
