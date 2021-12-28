export const fou = (
	x,
	y,
	xObserve,
	yObserve,
	couleur,
	pions,
	typeObserve,
	alive
) => {
	const tableau = []
	const possibilitesFou = []
	for (var i = 1; i < 9; i++) {
		if (
			!pions.find(
				// eslint-disable-next-line no-loop-func
				(pion) => pion.xPion === xObserve + i && pion.yPion === yObserve + i
			)
		) {
			possibilitesFou.push({
				x: xObserve + i,
				y: yObserve + i,
			})
		} else if (
			pions.find(
				// eslint-disable-next-line no-loop-func
				(pion) =>
					pion.xPion === xObserve + i &&
					pion.yPion === yObserve + i &&
					couleur !== pion.color
			)
		) {
			possibilitesFou.push({
				x: xObserve + i,
				y: yObserve + i,
			})
			break
		} else {
			break
		}
	}
	for (var i = 1; i < 9; i++) {
		if (
			!pions.find(
				// eslint-disable-next-line no-loop-func
				(pion) => pion.xPion === xObserve + i && pion.yPion === yObserve - i
			)
		) {
			possibilitesFou.push({
				x: xObserve + i,
				y: yObserve - i,
			})
		} else if (
			pions.find(
				// eslint-disable-next-line no-loop-func
				(pion) =>
					pion.xPion === xObserve + i &&
					pion.yPion === yObserve - i &&
					couleur !== pion.color
			)
		) {
			possibilitesFou.push({
				x: xObserve + i,
				y: yObserve - i,
			})
			break
		} else {
			break
		}
	}
	for (var i = 1; i < 9; i++) {
		if (
			!pions.find(
				// eslint-disable-next-line no-loop-func
				(pion) => pion.xPion === xObserve - i && pion.yPion === yObserve + i
			)
		) {
			possibilitesFou.push({
				x: xObserve - i,
				y: yObserve + i,
			})
		} else if (
			pions.find(
				// eslint-disable-next-line no-loop-func
				(pion) =>
					pion.xPion === xObserve - i &&
					pion.yPion === yObserve + i &&
					couleur !== pion.color
			)
		) {
			possibilitesFou.push({
				x: xObserve - i,
				y: yObserve + i,
			})
			break
		} else {
			break
		}
	}
	for (var i = 1; i < 9; i++) {
		if (
			!pions.find(
				// eslint-disable-next-line no-loop-func
				(pion) => pion.xPion === xObserve - i && pion.yPion === yObserve - i
			)
		) {
			possibilitesFou.push({
				x: xObserve - i,
				y: yObserve - i,
			})
		} else if (
			pions.find(
				// eslint-disable-next-line no-loop-func
				(pion) =>
					pion.xPion === xObserve - i &&
					pion.yPion === yObserve - i &&
					couleur !== pion.color
			)
		) {
			possibilitesFou.push({
				x: xObserve - i,
				y: yObserve - i,
			})
			break
		} else {
			break
		}
	}
	possibilitesFou.forEach((pionObserve) => {
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
