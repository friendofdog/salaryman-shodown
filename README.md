# Salaryman Shodown

_This was created during my time as a student at Code Chrysalis._

This app is a PvP game where players build a salaryman and battle them against each other in turn-based rounds. The focus of this project is the technical challenge of implementing a functional, modern frontend.

Staging version deployed at https://salaryman-shodown-staging.herokuapp.com.

## How to play

*Anything under 履歴書 can be ignored. This is for future implementation.*

1. Your salaryman has 6 attributes: conformity, loyalty, karaoke skill, mucus production, senority, sobriety. All attributes start with a base of 5. You have 10 additional points to distribute across these attributes.
2. Distribute your points and click [submit] After both players have clicked [submit], the game begins.
3. Click [START] to initiate a round. The game will randomly select an attribute to compare between both players. The player with the higher value for that attribute wins the round. If there is a draw, players are notified but are not told which attribute was compared.
4. The round loser will lose one CP but will have the option of re-distrubuting a single attribute point.
5. The game continues until one player reaches 0 CP. The other player wins.

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
