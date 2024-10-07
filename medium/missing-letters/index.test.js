import getMissingLetters from './index';

describe('Javascript - Medium - 12', () => {
  test('Missing Letters', () => {
    expect(getMissingLetters('abcdefgpqrstuvwxyz')).toEqual('hijklmno');
    expect(getMissingLetters('zyxwvutsrq')).toEqual('abcdefghijklmnop');
    expect(getMissingLetters('')).toEqual('abcdefghijklmnopqrstuvwxyz');
    expect(getMissingLetters('abcdefghijklmnopqrstuvwxyz')).toEqual('');
    expect(getMissingLetters('qinjwm')).toEqual('abcdefghkloprstuvxyz');
    expect(getMissingLetters('luiqtkgwzheapr')).toEqual('bcdfjmnosvxy');
    expect(getMissingLetters('qankj')).toEqual('bcdefghilmoprstuvwxyz');
    expect(getMissingLetters('bawgeuskmfcrpodnxztviy')).toEqual('hjlq');
    expect(getMissingLetters('gdpna')).toEqual('bcefhijklmoqrstuvwxyz');
    expect(getMissingLetters('hbi')).toEqual('acdefgjklmnopqrstuvwxyz');
    expect(getMissingLetters('djxifockvwhaqbnmstzpylu')).toEqual('egr');
    expect(getMissingLetters('gastzwjcnvoprfmxd')).toEqual('behiklquy');
    expect(getMissingLetters('xuti')).toEqual('abcdefghjklmnopqrsvwyz');
    expect(getMissingLetters('abc')).toEqual('defghijklmnopqrstuvwxyz');
    expect(getMissingLetters('kchiatvmbqrdsyopwju')).toEqual('efglnxz');
    expect(getMissingLetters('xbkj')).toEqual('acdefghilmnopqrstuvwyz');
    expect(getMissingLetters('cbvkyroes')).toEqual('adfghijlmnpqtuwxz');
    expect(getMissingLetters('s')).toEqual('abcdefghijklmnopqrtuvwxyz');
    expect(getMissingLetters('idvgzujmswloefcthb')).toEqual('aknpqrxy');
    expect(getMissingLetters('fmoraygevhkxzutcjd')).toEqual('bilnpqsw');
    expect(getMissingLetters('vuynqpaf')).toEqual('bcdeghijklmorstwxz');
    expect(getMissingLetters('j')).toEqual('abcdefghiklmnopqrstuvwxyz');
  });
});
