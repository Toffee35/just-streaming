import randNumb from '@/shared/funcs/rand_numb'
import randVar from '@/shared/funcs/rand_var'

import type CardProps from '@/shared/types/card_props'


const randViewers = () => randVar([
  randNumb(0, 999),
  randNumb(1000, 99999)
])

const randStarted = () => randVar([
  0,
  randNumb(0, 60),
  randNumb(0, 60),
  randNumb(60, 60 * 10),
  randNumb(60, 60 * 10)
])

const cards: CardProps[] = [
  {
    id: 0,
    title: "ЧЁ-ТА ДЕЛАЮ // !приватка !донат !правила !тг !мемы",
    banner: "5opka.jpg",
    author: "5opka",
    viewers: randViewers(),
    started: randStarted()
  },
  {
    id: 1,
    title: "FREE ROBUX on pls donate! Redeem with points. Commands on screen! #Ad !raid",
    banner: "arguz11.jpg",
    author: "arguz11",
    viewers: randViewers(),
    started: randStarted()
  },
  {
    id: 2,
    title: "Голубой ОГОНЁК Белого Злата!",
    banner: "beloezlato.jpg",
    author: "beloezlato",
    viewers: randViewers(),
    started: randStarted()
  },
  {
    id: 3,
    title: "A Happy Little Weekend Marathon!",
    banner: "bobross.jpg",
    author: "bobross",
    viewers: randViewers(),
    started: randStarted()
  },
  {
    id: 4,
    title: "МАРАФОН - ЧЕТА ДЕЛАЕМ w/ @XAH0B / 4 ДЕНЬ / #Cacto0o24на7 / !тг !дс !марафон !времястрима !приватка",
    banner: "cacto0o.jpg",
    author: "cacto0o",
    viewers: randViewers(),
    started: randStarted()
  },
  {
    id: 5,
    title: "веном | !tg",
    banner: "deepins02.jpg",
    author: "deepins02",
    viewers: randViewers(),
    started: randStarted()
  },
  {
    id: 6,
    title: "🤯 дорога к престижу !мерч<",
    banner: "dunduk.jpg",
    author: "dunduk",
    viewers: randViewers(),
    started: randStarted()
  },
  {
    id: 7,
    title: "RAIN &amp; BROKY [0:1] YEKINDAR &amp; ULTIMATE | BO3 | EVELONE DUO CUP",
    banner: "evelone2004.jpg",
    author: "evelone2004",
    viewers: randViewers(),
    started: randStarted()
  },
  {
    id: 8,
    title: "Кинодень. Обзор Гарри Поттep 3,4 (yзник Азкaбанa + Kyбoк Oгня) !архив !tg @jeensoff",
    banner: "jeensoff.jpg",
    author: "jeensoff",
    viewers: randViewers(),
    started: randStarted()
  },
  {
    id: 9,
    title: "ВИДОСИКИ + ФИЛЬМ 'ГАРРИ И ОРДЕН МУЖЕСТВА' !winline !boosty",
    banner: "manyrin.jpg",
    author: "manyrin",
    viewers: randViewers(),
    started: randStarted()
  },
  {
    id: 10,
    title: "sdr / 21 lvl ^^ !tg !betboom",
    banner: "morphilina.jpg",
    author: "morphilina",
    viewers: randViewers(),
    started: randStarted()
  },
  {
    id: 11,
    title: "DUO HIGHPOP JUICER  !GIVEAWAY !CROSSHAIRX !SKINSERPENT !NEWVID",
    banner: "oilrats.jpg",
    author: "oilrats",
    viewers: randViewers(),
    started: randStarted()
  },
  {
    id: 12,
    title: "❄️☔LATE WEEKEND DUO WHAT COULD GO WRONG :D ❄️☔🧨 💥 !Special 🎯 !Crosshairx 🎯",
    banner: "posty.jpg",
    author: "posty",
    viewers: randViewers(),
    started: randStarted()
  },
  {
    id: 13,
    title: "Relax &amp; Chill Beats -!trivia-",
    banner: "relaxbeats.jpg",
    author: "relaxbeats",
    viewers: randViewers(),
    started: randStarted()
  },
  {
    id: 14,
    title: "ВЫХОДНОЙ/ВЫХОДНЫМ",
    banner: "sasavot.jpg",
    author: "sasavot",
    viewers: randViewers(),
    started: randStarted()
  },
  {
    id: 15,
    title: "я забыл как хотел назвать ьстрим утром придумал щас забыл кстати из-за черничного варенья у меня черный стул сегодня",
    banner: "sliverel.jpg",
    author: "sliverel",
    viewers: randViewers(),
    started: randStarted()
  },
  {
    id: 16,
    title: "♡~ | Рисуем Миту, общаемся с чатом | Скидки на мерч !tg ~♡",
    banner: "sumin207.jpg",
    author: "sumin207",
    viewers: randViewers(),
    started: randStarted()
  },
  {
    id: 17,
    title: "СОЛО ТУРНИР НА 1М ГРЯЗНЫХ БАКСОВ | !вбаксы !tg !tiktok",
    banner: "toosefn.jpg",
    author: "toosefn",
    viewers: randViewers(),
    started: randStarted()
  },
  {
    id: 18,
    title: "учусь дальше играть на гитаре (заказная от клантана)",
    banner: "unho1y.jpg",
    author: "unho1y",
    viewers: randViewers(),
    started: randStarted()
  },
  {
    id: 19,
    title: "aтятя / tg - https://t.me/mazellovvv",
    banner: "mazellovvv.jpg",
    author: "mazellovvv",
    viewers: randViewers(),
    started: randStarted()
  }
]

export default function getCards(count: number): CardProps[] {
  return cards.slice(0, count)
}
