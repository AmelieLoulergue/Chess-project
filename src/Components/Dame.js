export const dame = (
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
	const possibilitesDame = []
	for (var i = 1; i < 8; i++) {
		if (
			!pions.find(
				// eslint-disable-next-line no-loop-func
				(pion) => pion.xPion === xObserve + i && pion.yPion === yObserve + i
			)
		) {
			possibilitesDame.push({
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
			possibilitesDame.push({
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
			possibilitesDame.push({
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
			possibilitesDame.push({
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
			possibilitesDame.push({
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
			possibilitesDame.push({
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
			possibilitesDame.push({
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
			possibilitesDame.push({
				x: xObserve - i,
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
				(pion) => pion.xPion === xObserve + i && pion.yPion === yObserve
			)
		) {
			possibilitesDame.push({
				x: xObserve + i,
				y: yObserve,
			})
		} else if (
			pions.find(
				// eslint-disable-next-line no-loop-func
				(pion) =>
					pion.xPion === xObserve + i &&
					pion.yPion === yObserve &&
					couleur !== pion.color
			)
		) {
			possibilitesDame.push({
				x: xObserve + i,
				y: yObserve,
			})
			break
		} else {
			break
		}
	}
	//haut
	for (var j = 1; j < 8; j++) {
		if (
			!pions.find(
				// eslint-disable-next-line no-loop-func
				(pion) => pion.xPion === xObserve - j && pion.yPion === yObserve
			)
		) {
			possibilitesDame.push({
				x: xObserve - j,
				y: yObserve,
			})
		} else if (
			pions.find(
				// eslint-disable-next-line no-loop-func
				(pion) =>
					pion.xPion === xObserve - j &&
					pion.yPion === yObserve &&
					couleur !== pion.color
			)
		) {
			possibilitesDame.push({
				x: xObserve - j,
				y: yObserve,
			})
			break
		} else {
			break
		}
	}
	//droite
	for (var k = 1; k < 8; k++) {
		if (
			!pions.find(
				// eslint-disable-next-line no-loop-func
				(pion) => pion.xPion === xObserve && pion.yPion === yObserve + k
			)
		) {
			possibilitesDame.push({
				x: xObserve,
				y: yObserve + k,
			})
		} else if (
			pions.find(
				// eslint-disable-next-line no-loop-func
				(pion) =>
					pion.xPion === xObserve &&
					pion.yPion === yObserve + k &&
					couleur !== pion.color
			)
		) {
			possibilitesDame.push({
				x: xObserve,
				y: yObserve + k,
			})
			break
		} else {
			break
		}
	}
	//gauche
	for (var l = 1; l < 8; l++) {
		if (
			!pions.find(
				// eslint-disable-next-line no-loop-func
				(pion) => pion.xPion === xObserve && pion.yPion === yObserve - l
			)
		) {
			possibilitesDame.push({
				x: xObserve,
				y: yObserve - l,
			})
		} else if (
			pions.find(
				// eslint-disable-next-line no-loop-func
				(pion) =>
					pion.xPion === xObserve &&
					pion.yPion === yObserve - l &&
					couleur !== pion.color
			)
		) {
			possibilitesDame.push({
				x: xObserve,
				y: yObserve - l,
			})
			break
		} else {
			break
		}
	}
	possibilitesDame.forEach((pionObserve) => {
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
