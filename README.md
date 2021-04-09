# Salaryman Shodown

_This was created during my time as a student at Code Chrysalis._

This app is a PvP game where players build a salaryman and battle them against each other in turn-based rounds. The focus of this project is the technical challenge of implementing a functional, modern frontend.

Staging version deployed at https://salaryman-shodown-staging.herokuapp.com.

## App behaviour

### Basic (implemented)

- Two players create their salaryman, giving him a name
- Each salaryman starts with all stats at 5, is given 10 points to distribute across them
- Each round a random stat is chosen and salarymans are compared by that stat
  - Salaryman with higher value wins round
  - Losing salaryman loses 1 `hp` but is given the option to redistribute a single point between stats
- Rounds continue until one salaryman reaches 0 `hp`; other is winner
- The UI is presentable and functional
- Session available across multiple devices
  - Players are not aware of each other's point allocation

### Advanced (to be implemented)

- User authentication
- Random draw cards for special effects
  - E.g. "beer" card increases `karaoke` by 2 and decreases `sobriety` by 1 for one round
  - E.g. "spring solstice" increases `mucus` by 1 for one round
- Fancy graphics, salaryman portraits
- 8-bit era video game sounds
- Leader board

## Notes

### Bibliography

- https://stackoverflow.com/questions/42182577/is-it-possible-to-use-dotenv-in-a-react-project
- https://hackernoon.com/how-to-build-a-multiplayer-browser-game-4a793818c29b
- https://github.com/omgimanerd/how-to-build-a-multiplayer-browser-game
- https://www.valentinog.com/blog/socket-react/
- https://socket.io/docs/v3/index.html
