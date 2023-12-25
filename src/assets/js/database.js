export const ALL_POKEMON_DATABASE = [
    {
        id: 1,
        name: "Бульбазавр",
        type: "Трава/Яд",
        img: "bulbasaur.png",
        price: 100,
        rarity: "Обычный",
        previous_evolutions: [],
        next_evolutions: ["Ивизавр", "Венузавр"],
        description: "Покемон, у которого на спине растет растение. Он питается солнечным светом и может выпускать ароматические споры."
    },
    {
        id: 2,
        name: "Ивизавр",
        type: "Трава/Яд",
        img: "ivysaur.png",
        price: 200,
        rarity: "Обычный",
        previous_evolutions: ["Бульбазавр"],
        next_evolutions: ["Венузавр"],
        description: "Покемон, у которого растение на спине выросло и стало похоже на цветок. Он стал сильнее и может манипулировать растениями."
    },
    {
        id: 3,
        name: "Венузавр",
        type: "Трава/Яд",
        img: "venusaur.png",
        price: 300,
        rarity: "Обычный",
        previous_evolutions: ["Бульбазавр", "Ивизавр"],
        next_evolutions: [],
        description: "Покемон, у которого на спине расцвел огромный цветок. Он обладает мощной силой и может вызывать солнечные лучи."
    },
    {
        id: 4,
        name: "Чармандер",
        type: "Огонь",
        img: "charmander.png",
        price: 100,
        rarity: "Обычный",
        previous_evolutions: [],
        next_evolutions: ["Чармелеон", "Чаризард"],
        description: "Покемон, у которого на хвосте горит пламя. Он любит тепло и может поджигать вещи своим дыханием."
    },
    {
        id: 5,
        name: "Чармелеон",
        type: "Огонь",
        img: "charmeleon.png",
        price: 200,
        rarity: "Обычный",
        previous_evolutions: ["Чармандер"],
        next_evolutions: ["Чаризард"],
        description: "Покемон, у которого пламя на хвосте стало ярче и горячее. Он стал более агрессивным и может резать врагов своими когтями."
    },
    {
        id: 6,
        name: "Чаризард",
        type: "Огонь/Летающий",
        img: "charizard.png",
        price: 300,
        rarity: "Обычный",
        previous_evolutions: ["Чармандер", "Чармелеон"],
        next_evolutions: [],
        description: "Покемон, у которого выросли крылья и он научился летать. Он может извергать огненные струи и сжигать все на своем пути."
    },
    {
        id: 7,
        name: "Сквиртл",
        type: "Вода",
        img: "squirtle.png",
        price: 100,
        rarity: "Обычный",
        previous_evolutions: [],
        next_evolutions: ["Вартортл", "Бластойз"],
        description: "Покемон, у которого на спине есть панцирь. Он может выстреливать водой из рта и прятаться в своем панцири."
    },
    {
        id: 8,
        name: "Вартортл",
        type: "Вода",
        img: "wartortle.png",
        price: 200,
        rarity: "Обычный",
        previous_evolutions: ["Сквиртл"],
        next_evolutions: ["Бластойз"],
        description: "Покемон, у которого панцирь стал толще и тяжелее. Он может плавать под водой и бить врагов своим хвостом."
    },
    {
        id: 9,
        name: "Бластойз",
        type: "Вода",
        img: "blastoise.png",
        price: 300,
        rarity: "Обычный",
        previous_evolutions: ["Сквиртл", "Вартортл"],
        next_evolutions: [],
        description: "Покемон, у которого на панцире есть две водометные пушки. Он может стрелять водой с большой силой и скоростью."
    },
    {
        id: 10,
        name: "Катерпи",
        type: "Насекомое",
        img: "caterpie.png",
        price: 50,
        rarity: "Редкий",
        previous_evolutions: [],
        next_evolutions: ["Метапод", "Баттерфри"],
        description: "Покемон, который похож на зеленого червяка. Он может выпускать нити из рта и лазить по деревьям."
    },
    {
        id: 11,
        name: "Метапод",
        type: "Насекомое",
        img: "metapod.png",
        price: 100,
        rarity: "Редкий",
        previous_evolutions: ["Катерпи"],
        next_evolutions: ["Баттерфри"],
        description: "Покемон, который заключил себя в твердый кокон. Он защищает себя от врагов и готовится к эволюции."
    },
    {
        id: 12,
        name: "Баттерфри",
        type: "Насекомое/Летающий",
        img: "butterfree.png",
        price: 150,
        rarity: "Редкий",
        previous_evolutions: ["Катерпи", "Метапод"],
        next_evolutions: [],
        description: "Покемон, который превратился в красивую бабочку. Он может летать и использовать пыльцу для атаки или обездвиживания врагов."
    },
    {
        id: 13,
        name: "Видл",
        type: "Насекомое/Яд",
        img: "weedle.png",
        price: 50,
        rarity: "Редкий",
        previous_evolutions: [],
        next_evolutions: ["Какуна", "Бидрил"],
        description: "Покемон, который похож на коричневого червяка. Он имеет острый жало на хвосте и может отравлять врагов."
    },
    {
        id: 14,
        name: "Какуна",
        type: "Насекомое/Яд",
        img: "kakuna.png",
        price: 100,
        rarity: "Редкий",
        previous_evolutions: ["Видл"],
        next_evolutions: ["Бидрил"],
        description: "Покемон, который заключил себя в твердый кокон. Он защищает себя от врагов и готовится к эволюции."
    },
    {
        id: 15,
        name: "Бидрил",
        type: "Насекомое/Яд",
        img: "beedrill.png",
        price: 150,
        rarity: "Редкий",
        previous_evolutions: ["Видл", "Какуна"],
        next_evolutions: [],
        description: "Покемон, который превратился в гигантскую осу. Он имеет три острых жала и может атаковать врагов с большой скоростью."
    },
    {
        id: 16,
        name: "Пиджи",
        type: "Нормальный/Летающий",
        img: "pidgey.png",
        price: 50,
        rarity: "Обычный",
        previous_evolutions: [],
        next_evolutions: ["Пиджотто", "Пиджот"],
        description: "Покемон, который похож на маленькую птицу. Он может поднимать песок и пыль своими крыльями и убегать от врагов."
    },
    {
        id: 17,
        name: "Пиджеотто",
        type: "Нормальный/Летающий",
        img: "pidgeotto.png",
        price: 100,
        rarity: "Обычный",
        previous_evolutions: ["Пиджи"],
        next_evolutions: ["Пиджот"],
        description: "Покемон, который похож на среднюю птицу. Он может летать с высокой скоростью и охотиться на добычу."
    },
    {
        id: 18,
        name: "Пиджеот",
        type: "Нормальный/Летающий",
        img: "pidgeot.png",
        price: 150,
        rarity: "Обычный",
        previous_evolutions: ["Пиджи", "Пиджотто"],
        next_evolutions: [],
        description: "Покемон, который похож на большую птицу. Он может создавать сильные ветры своими крыльями и сражаться с врагами."
    },
    {
        id: 19,
        name: "Раттата",
        type: "Нормальный",
        img: "rattata.png",
        price: 50,
        rarity: "Обычный",
        previous_evolutions: [],
        next_evolutions: ["Ратикейт"],
        description: "Покемон, который похож на маленькую крысу. Он может грызть все, что попадется ему под зубы, и живет в больших стаях."
    },
    {
        id: 20,
        name: "Ратикейт",
        type: "Нормальный",
        img: "raticate.png",
        price: 100,
        rarity: "Обычный",
        previous_evolutions: ["Раттата"],
        next_evolutions: [],
        description: "Покемон, который похож на большую крысу. Он имеет острые клыки и может атаковать врагов с разных сторон."
    },
    {
        id: 21,
        name: "Спироу",
        type: "Нормальный/Летающий",
        img: "spearow.png",
        price: 50,
        rarity: "Обычный",
        previous_evolutions: [],
        next_evolutions: ["Фироу"],
        description: "Покемон, который похож на маленькую птицу. Он может кричать громко и летать быстро, но не очень высоко."
    },
    {
        id: 22,
        name: "Фироу",
        type: "Нормальный/Летающий",
        img: "fearow.png",
        price: 100,
        rarity: "Обычный",
        previous_evolutions: ["Спироу"],
        next_evolutions: [],
        description: "Покемон, который похож на большую птицу. Он имеет длинный клюв и хвост, и может летать на большие расстояния и высоты."
    },
    {
        id: 23,
        name: "Эканс",
        type: "Яд",
        img: "ekans.png",
        price: 50,
        rarity: "Обычный",
        previous_evolutions: [],
        next_evolutions: ["Арбок"],
        description: "Покемон, который похож на змею. Он может изгибаться и сворачиваться в клубок, и может отравлять врагов своими клыками или хвостом."
    },
    {
        id: 24,
        name: "Арбок",
        type: "Яд",
        img: "arbok.png",
        price: 100,
        rarity: "Обычный",
        previous_evolutions: ["Эканс"],
        next_evolutions: [],
        description: "Покемон, который похож на кобру. Он имеет узор на спине, который может пугать или гипнотизировать врагов, и может душить их своим телом."
    },
    {
        id: 25,
        name: "Пикачу",
        type: "Электрический",
        img: "pikachu.png",
        price: 100,
        rarity: "Эпический",
        previous_evolutions: [],
        next_evolutions: ["Райчу"],
        description: "Покемон, который похож на желтого мышонка. Он может накапливать электричество в своих щеках и выпускать его в виде молний или шаров."
    },
    {
        id: 26,
        name: "Райчу",
        type: "Электрический",
        img: "raichu.png",
        price: 200,
        rarity: "Эпический",
        previous_evolutions: ["Пикачу"],
        next_evolutions: [],
        description: "Покемон, который похож на оранжевого мышонка. Он может генерировать больше электричества, чем Пикачу, и может использовать свой хвост как заземление или оружие."
    },
    {
        id: 27,
        name: "Сэндшру",
        type: "Земля",
        img: "sandshrew.png",
        price: 50,
        rarity: "Обычный",
        previous_evolutions: [],
        next_evolutions: ["Сэндслэш"],
        description: "Покемон, который похож на ёжика. Он может копать норы и прятаться в них, и может свернуться в шар и защищаться своими иглами."
    },
    {
        id: 28,
        name: "Сэндслэш",
        type: "Земля",
        img: "sandslash.png",
        price: 100,
        rarity: "Обычный",
        previous_evolutions: ["Сэндшру"],
        next_evolutions: [],
        description: "Покемон, который похож на ежа. Он имеет длинные и острые иглы на спине и хвосте, и может атаковать врагов своими когтями или иглами."
    },
    {
        id: 29,
        name: "Нидоран♀",
        type: "Яд",
        img: "nidoran-f.png",
        price: 50,
        rarity: "Обычный",
        previous_evolutions: [],
        next_evolutions: ["Нидорина", "Нидоквин"],
        description: "Покемон, который похож на маленького розового зайца. Он имеет маленький рог на лбу, которым может отравлять врагов."
    },
    {
        id: 30,
        name: "Нидорина",
        type: "Яд",
        img: "nidorina.png",
        price: 100,
        rarity: "Обычный",
        previous_evolutions: ["Нидоран♀"],
        next_evolutions: ["Нидоквин"],
        description: "Покемон, который похож на среднего розового зайца. Он имеет более развитый рог на лбу, и может защищать себя и своих друзей от опасности."
    },
    {
        id: 31,
        name: "Нидоквин",
        type: "Яд/Земля",
        img: "nidoqueen.png",
        price: 150,
        rarity: "Обычный",
        previous_evolutions: ["Нидоран♀", "Нидорина"],
        next_evolutions: [],
        description: "Покемон, который похож на большого розового зайца. Он имеет мощный рог на лбу, и может дробить скалы и атаковать врагов своим телом."
    },
    {
        id: 32,
        name: "Нидоран♂",
        type: "Яд",
        img: "nidoran-m.png",
        price: 50,
        rarity: "Обычный",
        previous_evolutions: [],
        next_evolutions: ["Нидорино", "Нидокинг"],
        description: "Покемон, который похож на маленького синего зайца. Он имеет маленькие рога на лбу и щеках, которыми может отравлять врагов."
    },
    {
        id: 33,
        name: "Нидорино",
        type: "Яд",
        img: "nidorino.png",
        price: 100,
        rarity: "Обычный",
        previous_evolutions: ["Нидоран♂"],
        next_evolutions: ["Нидокинг"],
        description: "Покемон, который похож на среднего синего зайца. Он имеет более развитые рога на лбу и щеках, и может защищать себя и своих друзей от опасности."
    },
    {
        id: 34,
        name: "Нидокинг",
        type: "Яд/Земля",
        img: "nidoking.png",
        price: 150,
        rarity: "Обычный",
        previous_evolutions: ["Нидоран♂", "Нидорино"],
        next_evolutions: [],
        description: "Покемон, который похож на большого синего зайца. Он имеет огромный рог на лбу, и может сокрушать все на своем пути и атаковать врагов своим телом."
    },
    {
        id: 35,
        name: "Артикуно",
        type: "Лед/Летающий",
        img: "articuno.png",
        price: 500,
        rarity: "Легендарный",
        previous_evolutions: [],
        next_evolutions: [],
        description: "Покемон, который похож на голубого феникса. Он может управлять льдом и холодом, и может вызывать снежные бури."
    },
    {
        id: 36,
        name: "Запдос",
        type: "Электрический/Летающий",
        img: "zapdos.png",
        price: 500,
        rarity: "Легендарный",
        previous_evolutions: [],
        next_evolutions: [],
        description: "Покемон, который похож на желтого феникса. Он может управлять электричеством и молниями, и может вызывать грозы."
    },
    {
        id: 37,
        name: "Молтрес",
        type: "Огонь/Летающий",
        img: "moltres.png",
        price: 500,
        rarity: "Легендарный",
        previous_evolutions: [],
        next_evolutions: [],
        description: "Покемон, который похож на красного феникса. Он может управлять огнем и пламенем, и может вызывать вулканические извержения."
    },
    {
        id: 38,
        name: "Мьюту",
        type: "Психический",
        img: "mewtwo.png",
        price: 1000,
        rarity: "Легендарный",
        previous_evolutions: [],
        next_evolutions: [],
        description: "Покемон, который был создан в лаборатории из ДНК легендарного покемона Мью. Он обладает невероятной психической силой и интеллектом, и может читать и контролировать разумы других существ."
    },
    {
        id: 39,
        name: "Мью",
        type: "Психический",
        img: "mew.png",
        price: 1000,
        rarity: "Легендарный",
        previous_evolutions: [],
        next_evolutions: [],
        description: "Покемон, который является предком всех покемонов. Он может использовать любой тип атаки и может телепортироваться и менять свою форму."
    },
    {
        id: 40,
        name: "Генгар",
        type: "Призрак/Яд",
        img: "gengar.png",
        price: 200,
        rarity: "Эпический",
        previous_evolutions: ["Гастли", "Хаунтер"],
        next_evolutions: [],
        description: "Покемон, который похож на темно-фиолетового призрака. Он может скрываться в тени и проникать в сны и кошмары других существ."
    },
    {
        id: 41,
        name: "Лапрас",
        type: "Вода/Лед",
        img: "lapras.png",
        price: 200,
        rarity: "Эпический",
        previous_evolutions: [],
        next_evolutions: [],
        description: "Покемон, который похож на большого синего динозавра с рогами и панцирем. Он может плавать по воде и перевозить людей и покемонов на своей спине."
    },
    {
        id: 42,
        name: "Драгонайт",
        type: "Дракон/Летающий",
        img: "dragonite.png",
        price: 200,
        rarity: "Эпический",
        previous_evolutions: ["Дратини", "Драгонэйр"],
        next_evolutions: [],
        description: "Покемон, который похож на оранжевого дракона с крыльями. Он может летать с высокой скоростью и обладает высоким интеллектом и добротой."
    },
    {
        id: 43,
        name: "Тайранитар",
        type: "Скала/Темный",
        img: "tyranitar.png",
        price: 200,
        rarity: "Эпический",
        previous_evolutions: ["Ларвитар", "Пупитар"],
        next_evolutions: [],
        description: "Покемон, который похож на зеленого тираннозавра с броней. Он может сокрушать все на своем пути и вызывать землетрясения и песчаные бури."
    },
    {
        id: 44,
        name: "Хо-ох",
        type: "Огонь/Летающий",
        img: "ho-oh.png",
        price: 500,
        rarity: "Легендарный",
        previous_evolutions: [],
        next_evolutions: [],
        description: "Покемон, который похож на красно-золотого феникса с длинным хвостом. Он может возрождать покемонов из пепла и создавать радуги."
    },
    {
        id: 45,
        name: "Амфарос",
        type: "Электрический",
        img: "ampharos.png",
        price: 300,
        rarity: "Эпический",
        previous_evolutions: ["Марип", "Флэффи"],
        next_evolutions: [],
        description: "Покемон, который похож на желтую овцу с длинными ушами и хвостом. Он может излучать яркий свет и передавать электрические сигналы."
    }
];

export const COMMON_POKEMON_DATABASE = ALL_POKEMON_DATABASE.filter(pokemon => pokemon.rarity === "Обычный");

export const RARE_POKEMON_DATABASE = ALL_POKEMON_DATABASE.filter(pokemon => pokemon.rarity === "Редкий");

export const EPIC_POKEMON_DATABASE = ALL_POKEMON_DATABASE.filter(pokemon => pokemon.rarity === "Эпический");

export const LEGENDARY_POKEMON_DATABASE = ALL_POKEMON_DATABASE.filter(pokemon => pokemon.rarity === "Легендарный");

export const POKEMON_RATING = [
    {
        id: 1,
        name: "Арцеус ",
        rarity: "Легендарный",
        img: "arceus.png"
    },
    {
        id: 2,
        name: "Мьюту",
        rarity: "Легендарный",
        img: "mewtwo.png"
    },
    {
        id: 3,
        name: "Рейкваза",
        rarity: "Легендарный",
        img: "rayquaza.png"
    },
    {
        id: 4,
        name: "Мью",
        rarity: "Легендарный",
        img: "mew.png"
    },
    {
        id: 5,
        name: "Гиратина",
        rarity: "Легендарный",
        img: "giratina.png"
    },
    {
        id: 6,
        name: "Диалга",
        rarity: "Легендарный",
        img: "dialga.png"
    },
    {
        id: 7,
        name: "Кьюрем",
        rarity: "Легендарный",
        img: "kyurem.png"
    },
    {
        id: 8,
        name: "Лугия",
        rarity: "Легендарный",
        img: "lugia.png"
    },
    {
        id: 9,
        name: "Даркрай",
        rarity: "Легендарный",
        img: "darkrai.png"
    },
    {
        id: 10,
        name: "Палькия",
        rarity: "Легендарный",
        img: "palkia.png"
    }
];
