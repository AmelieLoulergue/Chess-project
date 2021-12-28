import '../Styles/Square.css'
import Pion from './Piece'

export default function Square({
	x,
	y,
	pions,
	handleClickSquare,
	handleClickPiece,
	totalCase,
	i,
	pionSelected,
}) {
	let fill
	let isRed = false

	if (totalCase.length > 0) {
		totalCase.forEach((casee) => {
			if (x === casee.x && y === casee.y) {
				isRed = true
			}
		})

		if (isRed) {
			fill = 'red'
		} else {
			const black = (x + y) % 2 === 1
			fill = black ? 'grey' : 'white'
		}
	} else {
		const black = (x + y) % 2 === 1
		fill = black ? 'grey' : 'white'
	}
	if (pionSelected) {
		if (
			x === pionSelected.xPion &&
			y === pionSelected.yPion &&
			totalCase.length === 0
		) {
			fill = 'orange'
		} else if (x === pionSelected.xPion && y === pionSelected.yPion) {
			fill = 'green'
		}
	}

	return (
		<div
			className='Square'
			style={{
				backgroundColor: fill,
			}}
			onClick={() => handleClickSquare(x, y, i)}
		>
			<Pion
				x={x}
				y={y}
				pions={pions}
				handleClickPiece={handleClickPiece}
				i={i}
			/>
		</div>
	)
}
