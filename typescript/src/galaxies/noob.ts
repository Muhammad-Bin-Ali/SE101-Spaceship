import Game from '../game.js'
import { V2 } from '../helpers/Vector2.js'
import Asteroid from '../spaceObjects/asteroid.js'
import AsteroidLauncher from '../spaceObjects/asteroidLauncher.js'
import Planet from '../spaceObjects/planet.js'
import Galaxy from './galaxy.js'
import SolarSystem from './solarSystem.js'

export const BuildNoob = (game: Game): Galaxy => {
	const Tutorial = new SolarSystem('Tutorial', 'Noob', game, {
		asteroids: [
			new Asteroid(V2(-0.5, -0.15), 0.06, V2(300, 90), game), 
			new Asteroid(V2(0, 0), 0.06, V2(526, 392), game)
		],
		planets: [new Planet('Big Bird', 25, V2(576, 432), game)],
	})
	return new Galaxy('Noob', game, [Tutorial])
}
