class Salaryman {
  company: string;
  cp: number;
  id: string;
  name: string;
  points: number;
  stats: {
    conformity: { name: string; val: number };
    loyalty: { name: string; val: number };
    karaoke: { name: string; val: number };
    mucus: { name: string; val: number };
    senority: { name: string; val: number };
    sobriety: { name: string; val: number };
  };
  title: string;

  constructor(
    name: string = "unnamed",
    title: string = "untitled",
    company: string = "unemployed",
    id: string = "dummy"
  ) {
    this.stats = {
      conformity: { name: "conformity", val: 5 },
      loyalty: { name: "loyalty", val: 5 },
      karaoke: { name: "karaoke skill", val: 5 },
      mucus: { name: "mucus production", val: 5 },
      senority: { name: "senority", val: 5 },
      sobriety: { name: "sobriety", val: 5 },
    };
    this.name = name;
    this.title = title;
    this.company = company;
    this.points = 10;
    this.cp = 10;
    this.id = id;

    // for (const key in this.stats) {
    //   Object.defineProperty(this, key, {
    //     get: () => {
    //       return this.stats[key];
    //     },
    //     set: (value: number) => {
    //       if (this.stats[key] !== value) {
    //         this.stats[key] = value;
    //       }
    //     },
    //   });
    // }
  }
}

export { Salaryman };
