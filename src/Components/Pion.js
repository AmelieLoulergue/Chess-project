export const pion = (
	x,
	y,
	xObserve,
	yObserve,
	couleur,
	pions,
	typeObserve,
	alive
) => {
	const tableauPion = []
	const possibilitesPion = []
	const tableau = []
	if (couleur === 'black') {
		tableauPion.push({ x: xObserve + 1, y: yObserve + 1 })
		tableauPion.push({ x: xObserve + 1, y: yObserve - 1 })
	} else {
		tableauPion.push({ x: xObserve - 1, y: yObserve - 1 })
		tableauPion.push({ x: xObserve - 1, y: yObserve + 1 })
	}
	tableauPion.forEach((pion) => {
		if (
			pions.find(
				// eslint-disable-next-line no-loop-func
				(pi) =>
					pi.xPion === pion.x && pi.yPion === pion.y && couleur !== pi.color
			)
		) {
			possibilitesPion.push({ x: pion.x, y: pion.y })
		}
	})
	if (couleur === 'black') {
		if (
			!pions.find(
				// eslint-disable-next-line no-loop-func
				(pion) => pion.xPion === xObserve + 1 && pion.yPion === yObserve
			)
		) {
			possibilitesPion.push({ x: xObserve + 1, y: yObserve })
		}
		if (
			xObserve === 1 &&
			!pions.find(
				// eslint-disable-next-line no-loop-func
				(pion) => pion.xPion === xObserve + 2 && pion.yPion === yObserve
			)
		) {
			possibilitesPion.push({ x: xObserve + 2, y: yObserve })
		}
	}
	if (couleur === 'white') {
		if (
			!pions.find(
				// eslint-disable-next-line no-loop-func
				(pion) => pion.xPion === xObserve - 1 && pion.yPion === yObserve
			)
		) {
			possibilitesPion.push({ x: xObserve - 1, y: yObserve })
		}
		if (
			xObserve === 6 &&
			!pions.find(
				// eslint-disable-next-line no-loop-func
				(pion) => pion.xPion === xObserve - 2 && pion.yPion === yObserve
			)
		) {
			possibilitesPion.push({ x: xObserve - 2, y: yObserve })
		}
	}
	possibilitesPion.forEach((pionObserve) => {
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
