# Salaryman Shodown

*This was created during my time as a student at Code Chrysalis.*

This app is a PvP game where players build a salaryman and battle them against each other in turn-based rounds. The focus of this project is the technical challenge of implementing a functional, modern frontend.

## Technical overview

- React, use as SPA
- JWT (for user auth)
- Heroku
- Database (for leader board)

## App behaviour

### Basic

- Two players create their salaryman, giving him a name
- Each salaryman starts with all stats at 5, is given 10 points to distribute across them
- Each round a random stat is chosen and salarymans are compared by that stat
  - Salaryman with higher value wins round
  - Losing salaryman loses 1 `hp` but is given the option to redistribute a single point between stats
- Rounds continue until one salaryman reaches 0 `hp`; other is winner
- The UI is presentable and functional

### Advanced

- User authentication
- Session available across multiple devices
  - So that players are not aware of each other's point allocation
- Random draw cards for special effects
  - E.g. "beer" card increases `karaoke` by 2 and decreases `sobriety` by 1 for one round
  - E.g. "spring solstice" increases `mucus` by 1 for one round
- Fancy graphics, salaryman portraits
- 8-bit era video game sounds
- Leader board

## Notes

This is a rough idea of what a salaryman object would look like. Maximum six stats.

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
