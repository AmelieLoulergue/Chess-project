import { cavalier } from './Cavalier'
import { dame } from './Dame'
import { fou } from './Fou'
import { roi } from './Roi'
import { tour } from './Tour'
import { pion } from './Pion'

export const possibilitesCase = (x, y, pionChoose, pions) => {
	const xObserve = pionChoose.xPion
	const yObserve = pionChoose.yPion
	const couleur = pionChoose.color
	const typeObserve = pionChoose.type

	if (typeObserve === 'tour') {
		return tour(x, y, xObserve, yObserve, couleur, pions, typeObserve)
	}

	if (typeObserve === 'cavalier') {
		return cavalier(xObserve, yObserve, couleur, pions, typeObserve)
	}

	if (typeObserve === 'fou') {
		return fou(x, y, xObserve, yObserve, couleur, pions, typeObserve)
	}
	if (typeObserve === 'dame') {
		return dame(x, y, xObserve, yObserve, couleur, pions, typeObserve)
	}

	if (pionChoose.type === 'roi') {
		return roi(x, y, xObserve, yObserve, couleur, pions, typeObserve)
	}

	if (pionChoose.type === 'pion') {
		return pion(x, y, xObserve, yObserve, couleur, pions, typeObserve)
	}
	return []
}
export const possibilitesCaseEchec = (x, y, pionChoose, pions) => {
	const xObserve = pionChoose.x
	const yObserve = pionChoose.y
	const couleur = pionChoose.color
	const typeObserve = pionChoose.type

	if (typeObserve === 'tour') {
		return tour(x, y, xObserve, yObserve, couleur, pions, typeObserve)
	}

	if (typeObserve === 'cavalier') {
		return cavalier(xObserve, yObserve, couleur, pions, typeObserve)
	}

	if (typeObserve === 'fou') {
		return fou(x, y, xObserve, yObserve, couleur, pions, typeObserve)
	}
	if (typeObserve === 'dame') {
		return dame(x, y, xObserve, yObserve, couleur, pions, typeObserve)
	}

	if (pionChoose.type === 'roi') {
		return roi(x, y, xObserve, yObserve, couleur, pions, typeObserve)
	}

	if (pionChoose.type === 'pion') {
		return pion(x, y, xObserve, yObserve, couleur, pions, typeObserve)
	}
	return []
}
