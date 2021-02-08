# Salaryman Shodown

## Technical overview

- React, use as SPA
- User authentication (JWT, Firebase, etc.)
- DB for leaderboard

## App behaviour

### Basic

- Two players create their salaryman, giving him a name
- Each salaryman starts with all traits at 5, is given 10 points to distribute across them
- A random trait is chosen, salarymans are compared by that trait; salaryman with higher value wins round
  - Losing salaryman loses 1 `hp` but is given the option to redistribute a single point between traits
- Rounds continue until one salaryman reaches 0 `hp`; other is winner

### Advanced

- Random draw cards for special effects
  - E.g. "beer" card increases `karaoke` by 2 and decreases `sobriety` by 1 for one round
  - E.g. "spring solstice" increases `mucus` by 1 for one round
- Fancy graphics, salaryman portraits
- 8-bit era video game sounds

## Notes

This is a rough idea of what a salaryman object would look like:

```javascript
class Salaryman {
  constructor() {
    this.conformity = 5;
    this.inhibition = 5;
    this.loyalty = 5;
    this.karaoke = 5;
    this.mucus = 5;
    this.senority = 5;
    this.sobriety = 5;
  }
}
```

<!-- <div>Icon made from <a href="http://www.onlinewebfonts.com/icon">Icon Fonts</a> is licensed by CC BY 3.0</div> -->
