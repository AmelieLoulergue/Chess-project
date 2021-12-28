import CavalierNoir from '../Assets/Cavalier.png'
import TourNoir from '../Assets/Tour.png'
import FouNoir from '../Assets/Fou.png'
import DameNoir from '../Assets/Dame.png'
import RoiNoir from '../Assets/Roi.png'
import PionNoir from '../Assets/Pion.png'
import CavalierBlanc from '../Assets/CavalierBlanc.png'
import TourBlanc from '../Assets/TourBlanc.png'
import FouBlanc from '../Assets/FouBlanc.png'
import DameBlanc from '../Assets/DameBlanc.png'
import RoiBlanc from '../Assets/RoiBlanc.png'
import PionBlanc from '../Assets/PionBlanc.png'
import '../Styles/Pion.css'

export default function Pion({ x, y, pions, handleClickPiece }) {
	if (
		pions.find(
			(pion) =>
				pion.type === 'cavalier' &&
				pion.color === 'black' &&
				x === pion.xPion &&
				y === pion.yPion &&
				pion.isAlive === true
		)
	) {
		return (
			<img
				src={CavalierNoir}
				alt=''
				className='Pion'
				onClick={() => handleClickPiece(x, y, pions)}
			/>
		)
	}
	if (
		pions.find(
			(pion) =>
				pion.type === 'tour' &&
				pion.color === 'black' &&
				x === pion.xPion &&
				y === pion.yPion &&
				pion.isAlive === true
		)
	) {
		return (
			<img
				src={TourNoir}
				alt=''
				className='Pion'
				onClick={() => handleClickPiece(x, y, pions)}
			/>
		)
	}
	if (
		pions.find(
			(pion) =>
				pion.type === 'fou' &&
				pion.color === 'black' &&
				x === pion.xPion &&
				y === pion.yPion &&
				pion.isAlive === true
		)
	) {
		return (
			<img
				src={FouNoir}
				alt=''
				className='Pion'
				onClick={() => handleClickPiece(x, y, pions)}
			/>
		)
	}
	if (
		pions.find(
			(pion) =>
				pion.type === 'roi' &&
				pion.color === 'black' &&
				x === pion.xPion &&
				y === pion.yPion &&
				pion.isAlive === true
		)
	) {
		return (
			<img
				src={RoiNoir}
				alt=''
				className='Pion'
				onClick={() => handleClickPiece(x, y, pions)}
			/>
		)
	}
	if (
		pions.find(
			(pion) =>
				pion.type === 'dame' &&
				pion.color === 'black' &&
				x === pion.xPion &&
				y === pion.yPion &&
				pion.isAlive === true
		)
	) {
		return (
			<img
				src={DameNoir}
				alt=''
				className='Pion'
				onClick={() => handleClickPiece(x, y, pions)}
			/>
		)
	}
	if (
		pions.find(
			(pion) =>
				pion.type === 'pion' &&
				pion.color === 'black' &&
				x === pion.xPion &&
				y === pion.yPion &&
				pion.isAlive === true
		)
	) {
		return (
			<img
				src={PionNoir}
				alt=''
				className='Pion'
				onClick={() => handleClickPiece(x, y, pions)}
			/>
		)
	}
	if (
		pions.find(
			(pion) =>
				pion.type === 'cavalier' &&
				pion.color === 'white' &&
				x === pion.xPion &&
				y === pion.yPion &&
				pion.isAlive === true
		)
	) {
		return (
			<img
				src={CavalierBlanc}
				alt=''
				className='Pion'
				onClick={() => handleClickPiece(x, y, pions)}
			/>
		)
	}
	if (
		pions.find(
			(pion) =>
				pion.type === 'tour' &&
				pion.color === 'white' &&
				x === pion.xPion &&
				y === pion.yPion &&
				pion.isAlive === true
		)
	) {
		return (
			<img
				src={TourBlanc}
				alt=''
				className='Pion'
				onClick={() => handleClickPiece(x, y, pions)}
			/>
		)
	}
	if (
		pions.find(
			(pion) =>
				pion.type === 'fou' &&
				pion.color === 'white' &&
				x === pion.xPion &&
				y === pion.yPion &&
				pion.isAlive === true
		)
	) {
		return (
			<img
				src={FouBlanc}
				alt=''
				className='Pion'
				onClick={() => handleClickPiece(x, y, pions)}
			/>
		)
	}
	if (
		pions.find(
			(pion) =>
				pion.type === 'roi' &&
				pion.color === 'white' &&
				x === pion.xPion &&
				y === pion.yPion &&
				pion.isAlive === true
		)
	) {
		return (
			<img
				src={RoiBlanc}
				alt=''
				className='Pion'
				onClick={() => handleClickPiece(x, y, pions)}
			/>
		)
	}
	if (
		pions.find(
			(pion) =>
				pion.type === 'dame' &&
				pion.color === 'white' &&
				x === pion.xPion &&
				y === pion.yPion &&
				pion.isAlive === true
		)
	) {
		return (
			<img
				src={DameBlanc}
				alt=''
				className='Pion'
				onClick={() => handleClickPiece(x, y, pions)}
			/>
		)
	}
	if (
		pions.find(
			(pion) =>
				pion.type === 'pion' &&
				pion.color === 'white' &&
				x === pion.xPion &&
				y === pion.yPion &&
				pion.isAlive === true
		)
	) {
		return (
			<img
				src={PionBlanc}
				alt=''
				className='Pion'
				onClick={() => handleClickPiece(x, y, pions)}
			/>
		)
	}
	return null

	//     pions.forEach((pion) => {
	//     if ( x === pion.xPion && y === pion.yPion) {
	//     return (<img src={CavalierNoir} alt="" className="Pion" onClick={()=>handleClickPiece(x,y)}/>)
	//     }

	// })
	// return null
}
