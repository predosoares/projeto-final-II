/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable no-unused-vars */
// @ts-nocheck

import { PencilSimple as PencilSimpleIcon, X as XIcon } from 'phosphor-react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

enum FormulaEnum {
  FUNDAMENTAL_EQUANTION_OF_CALORIMETRY,
}

interface IFormulaProps {
  formula: FormulaEnum
}

interface IFundamentalEquationOfCalorimetryInputs {
  heat: number
  mass: number
  specificHeat: number
  deltaTemperature: number
}

//
// Q = m.c.ΔT
//
const FundamentalEquationOfCalorimetry = () => {
  // const [isEditing, setIsEditing] = useState(false)

  // const { register, setValue } =
  //   useForm<IFundamentalEquationOfCalorimetryInputs>({
  //     mode: 'onBlur',
  //     defaultValues: {
  //       deltaTemperature: 10,
  //       heat: 10,
  //       mass: 1,
  //       specificHeat: 1,
  //     },
  //   })

  // const [heatQuantity, setHeatQuantity] = useState()
  // const [mass, setMass] = useState()
  // const [specificHeat, setSpecificHeat] = useState()
  // const [deltaTemperature, setDeltaTemperature] = useState()

  // const handleToggleEditingMode = () => {
  //   setIsEditing(state => !state)
  // }

  return (
    <form className="formula__form">
      <h1 className="formula__heading-2xl">
        Fórmula Fundamental da Calorimetria
      </h1>

      {/* <button
        className="formula__btn"
        type="button"
        onClick={handleToggleEditingMode}
      >
        {isEditing ? (
          <XIcon className="formula__btn__icon" />
        ) : (
          <PencilSimpleIcon className="formula__btn__icon" />
        )}
      </button> */}

      {/* <div className="formula__group">
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
            value={deltaTemperature}
          />

          <span className="formula__text-base"> s</span>
        </div>
      </div> */}

      <p className="formula__expression">
        <span className="formula__text-lg">Q</span>=
        <span className="formula__text-lg">c</span>.
        <span className="formula__text-lg">m</span>.
        <span className="formula__text-lg">ΔT</span>
      </p>
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
