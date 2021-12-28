export const tour = (
	x,
	y,
	xObserve,
	yObserve,
	couleur,
	pions,
	typeObserve,
	alive
) => {
	const possibilitesTour = []
	const tableau = []
	for (var i = 1; i < 8; i++) {
		if (
			!pions.find(
				(pion) => pion.xPion === xObserve && pion.yPion === yObserve + i
			)
		) {
			possibilitesTour.push({ x: xObserve, y: yObserve + i })
		} else if (
			pions.find(
				(pion) =>
					pion.xPion === xObserve &&
					pion.yPion === yObserve + i &&
					couleur !== pion.color
			)
		) {
			possibilitesTour.push({ x: xObserve, y: yObserve + i })
			break
		} else {
			break
		}
	}
	for (var i = 1; i < 8; i++) {
		if (
			!pions.find(
				(pion) => pion.xPion === xObserve + i && pion.yPion === yObserve
			)
		) {
			possibilitesTour.push({ x: xObserve + i, y: yObserve })
		} else if (
			pions.find(
				(pion) =>
					pion.xPion === xObserve + i &&
					pion.yPion === yObserve &&
					couleur !== pion.color
			)
		) {
			possibilitesTour.push({ x: xObserve + i, y: yObserve })
			break
		} else {
			break
		}
	}
	for (var i = 1; i < 8; i++) {
		if (
			!pions.find(
				(pion) => pion.xPion === xObserve && pion.yPion === yObserve - i
			)
		) {
			possibilitesTour.push({ x: xObserve, y: yObserve - i })
		} else if (
			pions.find(
				(pion) =>
					pion.xPion === xObserve &&
					pion.yPion === yObserve - i &&
					couleur !== pion.color
			)
		) {
			possibilitesTour.push({ x: xObserve, y: yObserve - i })
			break
		} else {
			break
		}
	}
	for (var i = 1; i < 8; i++) {
		if (
			!pions.find(
				(pion) => pion.xPion === xObserve - i && pion.yPion === yObserve
			)
		) {
			possibilitesTour.push({ x: xObserve - i, y: yObserve })
		} else if (
			pions.find(
				(pion) =>
					pion.xPion === xObserve - i &&
					pion.yPion === yObserve &&
					couleur !== pion.color
			)
		) {
			possibilitesTour.push({ x: xObserve - i, y: yObserve })
			break
		} else {
			break
		}
	}
	possibilitesTour.forEach((pionObserve) => {
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
