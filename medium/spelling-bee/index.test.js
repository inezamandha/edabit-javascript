import validateSpelling from './index';

describe('Javascript - Medium - 13', () => {
  test('Spelling Bee', () => {
    expect(validateSpelling('C. Y. T. O. P. L. A. S. M. Cytoplasm?')).toBe(
      true
    );
    expect(validateSpelling('P. H. A. R. A. O. H. Pharaoh!')).toBe(true);
    expect(
      validateSpelling('H. A. N. K. E. R. C. H. E. I. F. Handkerchief.')
    ).toBe(false);
    expect(validateSpelling('M. E. C. O. M. M. E. N. N. Recommend.')).toBe(
      false
    );
    expect(
      validateSpelling('C. H. R. Y. S. A. N. T. H. E. M. U. M. Chrysanthemum!')
    ).toBe(true);
    expect(
      validateSpelling('A. C. C. O. M. M. O. D. A. M. E. Accommodate!')
    ).toBe(false);
    expect(
      validateSpelling('S. U. A. C. E. I. L. L. A. N. C. E. Surveillance.')
    ).toBe(false);
    expect(validateSpelling('B. U. S. I. N. E. S. S. Business.')).toBe(true);
    expect(validateSpelling('C. O. N. V. E. N. I. E. N. T. Convenient.')).toBe(
      true
    );
    expect(validateSpelling('C. O. N. V. E. N. O. E. N. T. Convenient!')).toBe(
      false
    );
    expect(validateSpelling('C. H. A. U. F. F. E. U. R. Chauffeur.')).toBe(
      true
    );
    expect(validateSpelling('L. I. A. A. S. O. N. Liaison!')).toBe(false);
    expect(validateSpelling('O. C. C. U. R. R. E. N. C. E. Occurrence?')).toBe(
      true
    );
    expect(validateSpelling('E. C. C. C. R. R. E. N. C. E. Occurrence!')).toBe(
      false
    );
    expect(validateSpelling('E. A. B. A. R. R. A. S. S. Embarrass!')).toBe(
      false
    );
    expect(validateSpelling('C. O. N. V. E. N. I. E. N. T. Convenient?')).toBe(
      true
    );
    expect(
      validateSpelling('U. N. C. O. N. S. C. I. C. U. U. Unconscious!')
    ).toBe(false);
    expect(validateSpelling('I. E. D. R. D. Weird!')).toBe(false);
    expect(validateSpelling('D. F. F. T. N. I. T. E. L. Y. Definitely?')).toBe(
      false
    );
    expect(validateSpelling('C. A. A. E. N. D. A. R. Calendar.')).toBe(false);
    expect(
      validateSpelling('A. C. C. O. M. M. O. D. C. T. E. Accommodate!')
    ).toBe(false);
    expect(
      validateSpelling('A. C. C. O. M. M. O. D. A. O. O. Accommodate!')
    ).toBe(false);
    expect(
      validateSpelling('S. U. R. V. E. I. L. L. A. N. C. E. Surveillance.')
    ).toBe(true);
    expect(validateSpelling('S. E. P. A. R. A. T. E. Separate!')).toBe(true);
    expect(
      validateSpelling('Q. U. O. S. T. I. O. N. N. A. U. R. E. Questionnaire.')
    ).toBe(false);
    expect(validateSpelling('S. E. S. A. R. A. T. E. Separate!')).toBe(false);
    expect(validateSpelling('E. M. B. B. R. R. A. S. R. Embarrass.')).toBe(
      false
    );
    expect(validateSpelling('E. M. B. A. R. R. A. S. S. Embarrass?')).toBe(
      true
    );
    expect(
      validateSpelling('A. M. C. O. M. O. O. D. A. T. E. Accommodate!')
    ).toBe(false);
    expect(validateSpelling('B. U. S. I. S. E. S. U. Business.')).toBe(false);
    expect(validateSpelling('D. E. F. I. N. I. T. E. L. Y. Definitely?')).toBe(
      true
    );
    expect(
      validateSpelling('C. H. R. Y. S. A. N. T. H. E. M. U. M. Chrysanthemum!')
    ).toBe(true);
    expect(validateSpelling('N. Y. C. E. S. S. A. R. A. Necessary.')).toBe(
      false
    );
    expect(
      validateSpelling('A. C. C. O. M. M. O. M. A. T. A. Accommodate?')
    ).toBe(false);
    expect(validateSpelling('T. O. M. O. R. R. T. M. Tomorrow?')).toBe(false);
    expect(
      validateSpelling('N. N. C. O. N. S. S. I. O. U. S. Unconscious.')
    ).toBe(false);
    expect(
      validateSpelling('C. H. R. Y. S. A. N. T. H. E. M. U. M. Chrysanthemum?')
    ).toBe(true);
    expect(validateSpelling('L. I. A. I. S. O. L. Liaison.')).toBe(false);
    expect(validateSpelling('T. O. M. O. R. R. O. W. Tomorrow.')).toBe(true);
    expect(validateSpelling('N. E. C. E. S. S. A. R. Y. Necessary?')).toBe(
      true
    );
    expect(validateSpelling('B. U. S. I. N. E. S. S. Business.')).toBe(true);
    expect(validateSpelling('T. O. M. O. R. R. O. W. Tomorrow!')).toBe(true);
    expect(
      validateSpelling('S. U. R. V. E. I. L. L. A. N. C. E. Surveillance.')
    ).toBe(true);
    expect(validateSpelling('T. O. M. M. R. R. O. W. Tomorrow.')).toBe(false);
    expect(validateSpelling('C. U. A. U. U. F. E. U. R. Chauffeur!')).toBe(
      false
    );
    expect(validateSpelling('F. H. A. U. C. F. E. U. R. Chauffeur!')).toBe(
      false
    );
    expect(validateSpelling('C. H. A. U. F. F. E. U. R. Chauffeur.')).toBe(
      true
    );
    expect(validateSpelling('S. U. F. F. I. C. I. E. N. S. Sufficient!')).toBe(
      false
    );
    expect(
      validateSpelling('I. Y. I. O. S. C. N. C. A. R. C. Y. Idiosyncarcy?')
    ).toBe(false);
    expect(
      validateSpelling('Q. U. E. S. T. I. O. N. N. A. E. A. E. Questionnaire?')
    ).toBe(false);
    expect(
      validateSpelling('A. C. C. M. M. M. E. D. A. T. E. Accommodate!')
    ).toBe(false);
    expect(validateSpelling('E. M. B. A. R. R. A. S. S. Embarrass!')).toBe(
      true
    );
    expect(validateSpelling('P. A. R. L. I. A. E. P. N. T. Parliament!')).toBe(
      false
    );
  });
});
