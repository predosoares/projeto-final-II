/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable no-unused-vars */
// @ts-nocheck

import { PencilSimple as PencilSimpleIcon } from 'phosphor-react'
import { useState } from 'react'

enum FormulaEnum {
  FUNDAMENTAL_EQUANTION_OF_CALORIMETRY,
}

interface IFormulaProps {
  formula: FormulaEnum
}

//
// Q = m.c.ΔT
//
const FundamentalEquationOfCalorimetry = () => {
  const [heatQuantity, setHeatQuantity] = useState()
  const [mass, setMass] = useState()
  const [specificHeat, setSpecificHeat] = useState()
  const [deltaTime, setDeltaTime] = useState()

  return (
    <form className="formula__form">
      <h1 className="formula__heading-2xl">
        Fórmula Fundamental da Calorimetria
      </h1>

      <button className="formula__btn" type="button">
        <PencilSimpleIcon />
      </button>

      <div className="formula__group">
        <div className="input__block">
          <input
            className="formula__input"
            type="number"
            min="0"
            placeholder="Q"
            value={heatQuantity}
          />
          <span className="formula__text-base"> cal</span>
        </div>
        <span className="formula__text-base">=</span>
        <div className="input__block">
          <input
            className="formula__input"
            type="number"
            min="0"
            placeholder="mass"
            value={mass}
          />
          <span className="formula__text-base"> g</span>
        </div>

        <span className="formula__text-base">.</span>
        <div className="input__block">
          <input
            className="formula__input"
            type="number"
            min="0"
            placeholder="c"
            value={specificHeat}
          />
          <span className="formula__text-base"> cal/g°C</span>
        </div>

        <span className="formula__text-base">.</span>
        <div className="input__block">
          <input
            className="formula__input"
            type="number"
            min="0"
            placeholder="ΔT"
            value={deltaTime}
          />

          <span className="formula__text-base"> s</span>
        </div>
      </div>
    </form>
  )
}

const Formula = ({ formula }: IFormulaProps) => {
  return (
    <div className="formula">
      <div className="formula__wrapper">
        {formula === FormulaEnum.FUNDAMENTAL_EQUANTION_OF_CALORIMETRY && (
          <FundamentalEquationOfCalorimetry />
        )}
      </div>
    </div>
  )
}

export { Formula, FormulaEnum }
