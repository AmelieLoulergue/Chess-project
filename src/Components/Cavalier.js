export const cavalier = (x, y, couleur, pions, typeObserve, alive) => {
	const tableauCav = []
	const possibilitesCavalier = []
	const tableauCavalier = [
		{ x: x + 1, y: y + 2 },
		{ x: x + 1, y: y - 2 },
		{ x: x + 2, y: y + 1 },
		{ x: x + 2, y: y - 1 },
		{ x: x - 1, y: y + 2 },
		{ x: x - 1, y: y - 2 },
		{ x: x - 2, y: y + 1 },
		{ x: x - 2, y: y - 1 },
	]
	tableauCavalier.forEach((coordinates) => {
		const isOneOfMyColorPion = pions.find(
			(pion) => pion.xPion === coordinates.x && pion.yPion === coordinates.y
		)
			? false
			: possibilitesCavalier.push({ x: coordinates.x, y: coordinates.y })
		const isOneOfAdversePion = pions.find(
			(pion) =>
				pion.xPion === coordinates.x &&
				pion.yPion === coordinates.y &&
				couleur !== pion.color
		)
			? possibilitesCavalier.push({ x: coordinates.x, y: coordinates.y })
			: false
	})
	possibilitesCavalier.forEach((pionObserve) => {
		if (
			pionObserve.x > -1 &&
			pionObserve.y > -1 &&
			pionObserve.x < 8 &&
			pionObserve.y < 8
		) {
			tableauCav.push({
				type: typeObserve,
				color: couleur,
				xPion: x,
				yPion: y,
				x: pionObserve.x,
				y: pionObserve.y,
				isAlive: pionObserve.isAlive,
			})
		}
	})
	return tableauCav
}
