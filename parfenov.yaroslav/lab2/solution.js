export class ZodiacSign {
  constructor(name, leftDateLimit, rightDateLimit) {
    this.name = name;
    this.leftDateLimit = leftDateLimit;
    this.rightDateLimit = rightDateLimit;
  }

  static getAllZodiacSigns(year) {
    return [
      new ZodiacSign(
        'Водолей',
        Date.parse(`${year}-01-20`),
        Date.parse(`${year}-02-18`),
      ),
      new ZodiacSign(
        'Рыбы',
        Date.parse(`${year}-02-19`),
        Date.parse(`${year}-03-20`),
      ),
      new ZodiacSign(
        'Овен',
        Date.parse(`${year}-03-21`),
        Date.parse(`${year}-04-19`),
      ),
      new ZodiacSign(
        'Телец',
        Date.parse(`${year}-04-20`),
        Date.parse(`${year}-05-20`),
      ),
      new ZodiacSign(
        'Близнецы',
        Date.parse(`${year}-05-21`),
        Date.parse(`${year}-06-20`),
      ),
      new ZodiacSign(
        'Рак',
        Date.parse(`${year}-06-21`),
        Date.parse(`${year}-07-22`),
      ),
      new ZodiacSign(
        'Лев',
        Date.parse(`${year}-07-23`),
        Date.parse(`${year}-08-22`),
      ),
      new ZodiacSign(
        'Дева',
        Date.parse(`${year}-08-23`),
        Date.parse(`${year}-09-22`),
      ),
      new ZodiacSign(
        'Весы',
        Date.parse(`${year}-09-23`),
        Date.parse(`${year}-10-22`),
      ),
      new ZodiacSign(
        'Скорпион',
        Date.parse(`${year}-10-23`),
        Date.parse(`${year}-11-21`),
      ),
      new ZodiacSign(
        'Стрелец',
        Date.parse(`${year}-11-22`),
        Date.parse(`${year}-12-21`),
      ),
      new ZodiacSign(
        'Козерог',
        Date.parse(`${year}-12-22`),
        Date.parse(`${year}-12-31`),
      ),
      new ZodiacSign(
        'Козерог',
        Date.parse(`${year}-01-01`),
        Date.parse(`${year}-01-19`),
      ),
    ];
  }
}

export function showZodiacSign(dateString) {
  const date = new Date(dateString);
  const year = date.getFullYear();

  const allZodiacSigns = ZodiacSign.getAllZodiacSigns(year);
  for (let i = 0; i < allZodiacSigns.length; i++) {
    if (
      allZodiacSigns[i].leftDateLimit <= date &&
      date <= allZodiacSigns[i].rightDateLimit
    ) {
      return allZodiacSigns[i].name;
    }
  }
}
