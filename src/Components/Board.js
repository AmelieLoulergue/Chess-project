/* eslint-disable require-jsdoc */
import Square from "./Square";
import "../Styles/Board.css";
import Pieces from "./Pieces";
import React, { useState, useEffect } from "react";
import { possibilitesCase, possibilitesCaseEchec } from "./Game";

export default function Board() {
  const squares = []; // le plateau que Board renvoit
  const [totalCase, setTotalCase] = useState([]); // les cases possibles pour le pionSelected
  const [pionSelected, setPionSelected] = useState(null);
  const [pionDeplace, setPionDeplace] = useState(null); // le pion déplacé
  const [pions, setPions] = useState(Pieces);
  const [copiePions, setCopiePions] = useState(pions);
  const [whoPlay, setWhoPlay] = useState("white"); // le tour de jeu
  const [echec, setEchec] = useState(false); // s'il y a échec ou pas
  const [contreEchec, setContreEchec] = useState([]); // le pion qui menace en echec
  const [pionNotAlive, setPionNotAlive] = useState(null);
  const [echecEtMat, setEchecEtMat] = useState(false);

  useEffect(() => {
    const checkPions = pions.filter((pion) => {
      return pion.color !== whoPlay && pion.isAlive;
    });
    let tPossibility = [];
    checkPions.forEach((pion) => {
      const possibilitesCases = possibilitesCase(
        pion.xPion,
        pion.yPion,
        pion,
        pions
      );
      tPossibility = tPossibility.concat(possibilitesCases);
    });
    const positionRoi = pions.find(
      (pion) => pion.type === "roi" && pion.color === whoPlay
    );
    if (
      tPossibility.find(
        (pion) => pion.x === positionRoi.xPion && pion.y === positionRoi.yPion
      )
    ) {
      console.log("echecs aux", whoPlay);
      setEchec(true);
      const checkPions = pions.filter((pion) => {
        return pion.color === whoPlay;
      });
      let tPossibilityAdverse = [];
      // tous les pions disponibles de la couleur en échec
      checkPions.forEach((pion) => {
        const possibilitesCases = possibilitesCase(
          pion.xPion,
          pion.yPion,
          pion,
          pions
        );
        tPossibilityAdverse = tPossibilityAdverse.concat(possibilitesCases);
      });
      // les pions qui peuvent manger la menace
      const pionsChoosePossibles = tPossibilityAdverse.filter((pion) => {
        return (
          pion.x === pionDeplace.xPion &&
          pion.y === pionDeplace.yPion &&
          pion.type !== "roi"
        );
      });
      //pionschoosepossibles contient même le roi => il faut vérifier que le roi ne se met pas en échec s'il mange
      //le roi peut-il manger ?

      // le roi peut-il bouger ou manger?
      const roiBouge = tPossibilityAdverse.filter((pion) => {
        return pion.type === "roi";
      });

      const checkPionsAdverses = pions.filter((pion) => {
        return pion.color !== whoPlay && pion.isAlive;
      });
      const changePion = copiePions.map((pion) => {
        if (
          positionRoi.xPion === pion.xPion &&
          positionRoi.yPion === pion.yPion &&
          roiBouge.find(
            (pion) =>
              pion.xPion === positionRoi.x && pion.yPion === positionRoi.y
          )
        ) {
          return {
            type: positionRoi.type,
            color: positionRoi.color,
            xPion: positionRoi.x,
            yPion: positionRoi.y,
            isAlive: true,
          };
        }
        if (
          pion.color !== positionRoi.color &&
          pion.xPion === positionRoi.x &&
          pion.yPion === positionRoi.y &&
          pion.type !== "roi" &&
          roiBouge.find(
            (pion) => pion.x === positionRoi.x && pion.y === positionRoi.y
          )
        ) {
          return {
            type: pion.type,
            color: pion.color,
            xPion: pion.xPion,
            yPion: pion.yPion,
            isAlive: false,
          };
        }
        return pion;
      });
      setCopiePions(changePion);

      let tPossibilityAdverseBis = [];
      checkPionsAdverses.forEach((pion) => {
        const possibilitesCases = possibilitesCase(
          pion.xPion,
          pion.yPion,
          pion,
          changePion
        );
        tPossibilityAdverseBis =
          tPossibilityAdverseBis.concat(possibilitesCases);
      });
      let tPossibilityAdverseTer = [];
      checkPionsAdverses.forEach((pion) => {
        const possibilitesCases = possibilitesCase(
          pion.xPion,
          pion.yPion,
          pion,
          pions
        );
        tPossibilityAdverseTer =
          tPossibilityAdverseTer.concat(possibilitesCases);
      });
      let vraiPossibilitesduRoi = [];
      roiBouge.forEach((pion) => {
        if (pion.x !== pionDeplace.xPion && pion.y !== pionDeplace.yPion) {
          if (
            !tPossibilityAdverseBis.find(
              (pio) => pion.xPion === pio.x && pion.yPion === pio.y
            )
          ) {
            vraiPossibilitesduRoi.push(pion);
          }
          if (
            !tPossibilityAdverseTer.find(
              (pio) => pion.x === pio.x && pion.y === pio.y
            )
          ) {
            vraiPossibilitesduRoi.push(pion);
          }
        } else if (
          !tPossibilityAdverseBis.find(
            (pio) => pion.xPion === pio.x && pion.yPion === pio.y
          )
        ) {
          vraiPossibilitesduRoi.push(pion);
        }
      });
      // le roi peut-il manger ? à faire !!!!

      // fin du roiBouge
      //debut pionschooseprotege

      let pionsChooseProtege = [];
      roiBouge.find((pion) => {
        if (pionDeplace.xPion == pion.x && pionDeplace.yPion == pion.y) {
        }
      });
      if (
        !roiBouge.find(
          (pion) => pionDeplace.xPion == pion.x && pionDeplace.yPion == pion.y
        )
      ) {
        // ou peut aller la menace
        const deplacementMenace = possibilitesCase(
          pionDeplace.xPion,
          pionDeplace.yPion,
          pionDeplace,
          pions
        );
        console.log("deplacementMenace", deplacementMenace);
        // filtrer les déplacements qui gardent le roi en échec parmi deplacementMenace
        const listeCasesMenacees = [];
        deplacementMenace.forEach((pion) => {
          const casesMenacees = possibilitesCaseEchec(
            pion.x,
            pion.y,
            pion,
            pions
          );
          casesMenacees.forEach((pio) => {
            if (pio.x === positionRoi.xPion && pio.y === positionRoi.yPion) {
              listeCasesMenacees.push(pio);
            }
          });
        });

        // pionsChooseProtege ==> ceux qui peuvent proteger le roi

        tPossibilityAdverse.forEach((pion) => {
          if (
            pion.type !== "roi" &&
            listeCasesMenacees.find(
              (pio) => pio.xPion === pion.x && pio.yPion === pion.y
            )
          ) {
            pionsChooseProtege.push(pion);
          }
        });
      }

      let possibilitesContreEchec = [];
      possibilitesContreEchec = pionsChoosePossibles.concat(
        vraiPossibilitesduRoi,
        pionsChooseProtege
      );
      console.log("toutes les contre echec :", possibilitesContreEchec);
      setContreEchec(possibilitesContreEchec);
      if (possibilitesContreEchec.length === 0) {
        setEchecEtMat(true);
      }
    }
    const pionsDead = [];
    pions.forEach((pion) => {
      if (!pion.isAlive) {
        pionsDead.push(pion);
      }
    });
    setPionNotAlive(pionsDead);
  }, [pions, whoPlay, pionDeplace]);

  console.log("echec:", echec);

  function handleClickSquare(x, y) {
    if (pionSelected) {
      if (pionSelected.xPion === x && pionSelected === y) {
        setPionSelected(null);
      } else {
        const changePion = pions.map((pion) => {
          if (
            pionSelected.xPion === pion.xPion &&
            pionSelected.yPion === pion.yPion &&
            totalCase.find((pion) => pion.x === x && pion.y === y)
          ) {
            setPionDeplace({
              type: pionSelected.type,
              color: pionSelected.color,
              xPion: x,
              yPion: y,
              isAlive: true,
            });
            setWhoPlay(whoPlay === "white" ? "black" : "white");
            return {
              type: pionSelected.type,
              color: pionSelected.color,
              xPion: x,
              yPion: y,
              isAlive: true,
            };
          }

          if (
            pion.color !== pionSelected.color &&
            pion.xPion === x &&
            pion.yPion === y &&
            pion.type !== "roi" &&
            totalCase.find((pion) => pion.x === x && pion.y === y)
          ) {
            return {};
          }
          return pion;
        });
        setPions(changePion);
        setTotalCase([]);
        setPionSelected(null);
        setEchec(false);
        setContreEchec([]);
        setCopiePions(changePion);
      }
    }
  }

  function handleClickPiece(x, y) {
    if (echec === false) {
      // ce qu'il se passe s'il n'y a pas échec
      // si je reclique sur la meme case => je déselectionne mon pion
      if (
        pionSelected &&
        pionSelected.xPion === x &&
        pionSelected.yPion === y &&
        pionSelected.isAlive
      ) {
        setPionSelected(null);
        // si je reclique sur la meme case => je déselectionne mon pion
      } else {
        //sinon je vérifie si le déplacement de mon pion mets mon propre roi en échec ?
        const pionChoose = copiePions.find(
          (pion) => x === pion.xPion && y === pion.yPion
        );
        //si c'est le roi que je veux déplacer: je vérifie que ses déplacements sont autorisés (aucun pion adverse ne le menace sur la case où il veut aller)
        if (pionChoose.type === "roi" && pionChoose.color === whoPlay) {
          const possibilitesduRoi = possibilitesCase(x, y, pionChoose, pions);
          console.log("possibilites du roi", possibilitesduRoi);
          const checkPionsAdverses = copiePions.filter((pion) => {
            return pion.color !== whoPlay && pion.isAlive;
          });
          let tPossibilityAdverse = [];
          checkPionsAdverses.forEach((pion) => {
            const possibilitesCases = possibilitesCase(
              pion.xPion,
              pion.yPion,
              pion,
              pions
            );
            tPossibilityAdverse = tPossibilityAdverse.concat(possibilitesCases);
          });
          const vraiPossibilitesduRoi = [];
          possibilitesduRoi.forEach((pion) => {
            if (
              !tPossibilityAdverse.find(
                (pio) => pion.x === pio.x && pion.y === pio.y
              )
            ) {
              vraiPossibilitesduRoi.push(pion);
            }
          });
          if (vraiPossibilitesduRoi.length === 0) {
            setPionSelected(null);
          } else {
            setPionSelected(pionChoose);
            setTotalCase(vraiPossibilitesduRoi);
          }
        } else {
          // si ce n'est pas le roi que je veux déplcer, je vérifie si mon déplacement mets mon roi en échec
          // je fais comme si le pion sélectionné n'était plus sur sa case dans copiePions
          const changePion = copiePions.map((pion) => {
            if (
              pionChoose.xPion === pion.xPion &&
              pionChoose.yPion === pion.yPion &&
              pionChoose.isAlive
            ) {
              return {};
            }
            return pion;
          });
          //je repère la position de mon roi

          const positionRoi = copiePions.find(
            (pion) => pion.type === "roi" && pion.color === whoPlay
          );
          // je filtre les pions adverses encore vivants
          const checkPionsAdverses = copiePions.filter((pion) => {
            return pion.color !== whoPlay && pion.isAlive;
          });
          let tPossibilityAdverse = [];
          // pour chaque pion adverse, je calcule où il peut aller dans le plateau sans mon pion Sélectionné
          checkPionsAdverses.forEach((pion) => {
            const possibilitesCases = possibilitesCase(
              pion.xPion,
              pion.yPion,
              pion,
              changePion
            );
            tPossibilityAdverse = tPossibilityAdverse.concat(possibilitesCases);
          });
          // je regarde si parmi les pions adverses, je trouve un pion qui peut aller sur la case de mon roi
          const changePionMenace = tPossibilityAdverse.find(
            (pion) =>
              pion.x === positionRoi.xPion && pion.y === positionRoi.yPion
          );
          // je calcule les possibilites de déplacement de mon pion selected
          const possibilitesduPionSelected = possibilitesCase(
            x,
            y,
            pionChoose,
            pions
          );
          // si je trouve un pion adverse qui menace mon roi si j'enlève de sa case mon pion selected: je vérifie si mon pion selected ne peut pas le manger?
          // j'ajuste les possibilites de déplacements de mon pion selected = seulement manger la menace // sinon je ne peux pas le déplacer
          if (changePionMenace) {
            if (
              possibilitesduPionSelected.find(
                (pion) =>
                  pion.x === changePionMenace.xPion &&
                  pion.y === changePionMenace.yPion
              )
            ) {
              setPionSelected(pionChoose);
              setTotalCase([
                {
                  type: pionChoose.type,
                  color: pionChoose.color,
                  xPion: pionChoose.xPion,
                  yPion: pionChoose.yPion,
                  x: changePionMenace.xPion,
                  y: changePionMenace.yPion,
                  isAlive: pionChoose.isAlive,
                },
              ]);
            } else {
              setPionSelected(null);
            }
          } else {
            setPionSelected(pionChoose);
            setTotalCase(possibilitesCase(x, y, pionChoose, pions));
            if (pionChoose.color !== whoPlay) {
              setPionSelected(null);
              setWhoPlay(whoPlay);
              setTotalCase([]);
            }
          }
        }
      }
    } else {
      // ce qu'il se passe s'il y a échec

      const pionChoose = pions.find(
        (pion) => x === pion.xPion && y === pion.yPion && pion.isAlive
      );
      if (
        contreEchec.find(
          (pion) =>
            pion.type === pionChoose.type &&
            pion.xPion === pionChoose.xPion &&
            pion.yPion === pionChoose.yPion
        )
      ) {
        setPionSelected(pionChoose);
        const possibilitesPionSelected = [];
        contreEchec.forEach((pion) => {
          if (
            pion.type === pionChoose.type &&
            pion.xPion === pionChoose.xPion &&
            pion.yPion === pionChoose.yPion
          ) {
            possibilitesPionSelected.push(pion);
          }
        });
        setTotalCase(possibilitesPionSelected);
      } else if (echecEtMat) alert("Echecs et mat");
    }
    console.log("pionSelected", pionSelected);
    console.log("totalCase du pion Selected", totalCase);
  }

  for (let i = 0; i < 64; i++) {
    const y = i % 8;
    const x = Math.floor(i / 8);
    squares.push(
      <Square
        x={x}
        y={y}
        handleClickSquare={handleClickSquare}
        handleClickPiece={handleClickPiece}
        pions={pions}
        totalCase={totalCase}
        i={i}
        pionSelected={pionSelected}
      />
    );
  }
  console.log(pionNotAlive);
  console.log(pions);
  return (
    <>
      <div className="header-Board">
        Au tour de l'équipe{" "}
        {whoPlay === "white" ? (
          <strong>blanche</strong>
        ) : (
          <strong>noire</strong>
        )}
      </div>
      <div className="Board"> {squares} </div>
    </>
  );
}
