export const roi = (
	x,
	y,
	xObserve,
	yObserve,
	couleur,
	pions,
	typeObserve,
	alive
) => {
	const possibilitesRoi = []
	const tableau = []
	const tableauRoi = [
		{ x: xObserve + 1, y: yObserve + 1 },
		{ x: xObserve - 1, y: yObserve + 1 },
		{ x: xObserve - 1, y: yObserve - 1 },
		{ x: xObserve + 1, y: yObserve - 1 },
		{ x: xObserve, y: yObserve + 1 },
		{ x: xObserve - 1, y: yObserve },
		{ x: xObserve, y: yObserve - 1 },
		{ x: xObserve + 1, y: yObserve },
	]
	tableauRoi.forEach((pion) => {
		if (
			!pions.find(
				// eslint-disable-next-line no-loop-func
				(pi) => pi.xPion === pion.x && pi.yPion === pion.y
			)
		) {
			possibilitesRoi.push({ x: pion.x, y: pion.y })
		} else if (
			pions.find(
				// eslint-disable-next-line no-loop-func
				(pi) =>
					pi.xPion === pion.x && pi.yPion === pion.y && couleur !== pi.color
			)
		) {
			possibilitesRoi.push({ x: pion.x, y: pion.y })
		}
	})
	possibilitesRoi.forEach((pionObserve) => {
		if (
			pionObserve.x > -1 &&
			pionObserve.y > -1 &&
			pionObserve.x < 8 &&
			pionObserve.y < 8
		) {
			tableau.push({
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

	return tableau
}
