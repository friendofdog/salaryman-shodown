class Salaryman {
  constructor(name, title, company) {
    this.stats = {
      conformity: { name: "conformity", val: 5 },
      loyalty: { name: "loyalty", val: 5 },
      karaoke: { name: "karaoke skill", val: 5 },
      mucus: { name: "mucus production", val: 5 },
      senority: { name: "senority", val: 5 },
      sobriety: { name: "sobriety", val: 5 }
    }
    this.name = name;
    this.title = title;
    this.company = company;
    this.points = 10;
    this.cp = 10;
  }
}

export { Salaryman };
