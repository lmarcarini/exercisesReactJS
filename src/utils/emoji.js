export const getEmojiFromName = (name) => {
  const emoji = {
    monkey: "🐒",
    gorilla: "🦍",
    orangutan: "🦧",
    dogface: "🐶",
    dog: "🐕",
    guidedog: "🦮",
    servicedog: "🐕‍🦺",
    poodle: "🐩",
    wolf: "🐺",
    fox: "🦊",
    raccoon: "🦝",
    catface: "🐱",
    cat: "🐈",
    blackcat: "🐈‍⬛",
    lion: "🦁",
    tigerface: "🐯",
    tiger: "🐅",
    leopard: "🐆",
    horseface: "🐴",
    horse: "🐎",
    unicorn: "🦄",
    zebra: "🦓",
    deer: "🦌",
    bison: "🦬",
    cowface: "🐮",
    ox: "🐂",
    waterbuffalo: "🐃",
    cow: "🐄",
    pigface: "🐷",
    pig: "🐖",
    boar: "🐗",
    pignose: "🐽",
    ram: "🐏",
    sheep: "🐑",
    goat: "🐐",
    camel: "🐪",
    twohumpcamel: "🐫",
    llama: "🦙",
    giraffe: "🦒",
    elephant: "🐘",
    mammoth: "🦣",
    rhinoceros: "🦏",
    hippopotamus: "🦛",
    mouseface: "🐭",
    mouse: "🐁",
    rat: "🐀",
    hamster: "🐹",
    rabbitface: "🐰",
    rabbit: "🐇",
    chipmunk: "🐿️",
    hedgehog: "🦔",
    bat: "🦇",
    bear: "🐻",
    polarbear: "🐻‍❄️",
    koala: "🐨",
    panda: "🐼",
    sloth: "🦥",
    otter: "🦦",
    skunk: "🦨",
    kangaroo: "🦘",
    badger: "🦡",
    pawprints: "🐾",
    turkey: "🦃",
    chicken: "🐔",
    rooster: "🐓",
    hatchingchick: "🐣",
    babychick: "🐤",
    frontfacingbabychick: "🐥",
    bird: "🐦",
    penguin: "🐧",
    dove: "🕊️",
    eagle: "🦅",
    duck: "🦆",
    swan: "🦢",
    owl: "🦉",
    flamingo: "🦩",
    peacock: "🦚",
    parrot: "🦜",
    frog: "🐸",
    crocodile: "🐊",
    turtle: "🐢",
    lizard: "🦎",
    snake: "🐍",
    dragonface: "🐲",
    dragon: "🐉",
    sauropod: "🦕",
    trex: "🦖",
    spoutingwhale: "🐳",
    whale: "🐋",
    dolphin: "🐬",
    seal: "🦭",
    fish: "🐟",
    tropicalfish: "🐠",
    blowfish: "🐡",
    shark: "🦈",
    octopus: "🐙",
    spiralshell: "🐚",
    snail: "🐌",
    butterfly: "🦋",
    bug: "🐛",
    ant: "🐜",
    honeybee: "🐝",
    ladybeetle: "🐞",
    cricket: "🦗",
    spider: "🕷️",
    spiderweb: "🕸️",
    scorpion: "🦂",
    mosquito: "🦟",
  };
  return emoji[name] || "🦭";
};