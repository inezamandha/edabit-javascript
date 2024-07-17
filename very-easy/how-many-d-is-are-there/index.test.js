import countDs from './index';

describe('Javascript - Very Easy - 30', () => {
  test("How Many D's Are There?", () => {
    expect(countDs('My friend Dylan got distracted at school')).toEqual(4);
    expect(countDs('Debris was scattered all over the place.')).toEqual(2);
    expect(countDs('The rodents hibernated in their den.')).toEqual(3);
  });
});
