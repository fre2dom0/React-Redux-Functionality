import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { peopleActions } from '../store/People'


import people from "../json/sample4.json"
import "./Products.css"

function Products() {
  const dispatch = useDispatch()
  const list = useSelector(state => state.people.list)
  const isTrue = useSelector(state => state.people.listFilled)


  return(
    <div>
      <h1 className='title'>Hiring Worker</h1>
      <div>
      { 
        people.people.map((human, key) => {
          const add = () => {
            dispatch(peopleActions.getValue({
              id: human.id,
              name: human.firstName, 
              surname: human.lastName,
              gender: human.gender,
              job: human.job,
              age: human.age,
              number: human.number
            }))
          }
          return(
            <>
              <div key={key} className='people'>
              <div className='cols name'>
                <div className='group'>
                  <span className='head'>{human.id}.Name: </span> <span className='info'>{human.firstName}</span>
                </div>
                <div className='group'>
                <span className='head'>Surname: </span> <span className='info'>{human.lastName}</span>
                </div>
                
              </div>
              <div className='cols gJ'>
                <div className='group'>
                  <span className='head'>Gender: </span> <span className='info'>{human.gender}</span>
                </div>
                <div className='group'>
                  <span className='head'>Job: </span> <span className='info'>{human.job}</span>
                </div>
              </div>
              <div className='cols aN'>
                <div className='group'>
                  <span className='head'>Age: </span> <span className='info'>{human.age}</span>
                </div>
                <div className='group'>
                  <span className='head'>Number: </span> <span className='info'>{human.number}</span>
                  <button onClick={add}>Add</button>
                </div>
              </div>
             
          </div>
            </>

          )
        })
      }
      </div>
      
      <div>
      {
        isTrue && (
          <div className='container'>
            <div className='border'>
              <h1 className='title'>Your Basket</h1>
              <div className='basket'>
              {
                list.map((el, key)=> {  
                  const delet = () => {
                    dispatch(peopleActions.deleteValue(el.id))
                  }        
                  return(
                    <ul key={key}>
                      <li>ID: {el.id}</li>
                      <li>Name: {el.name}</li>
                      <li>Surname: {el.surname}</li>
                      <li>Gender: {el.gender}</li>
                      <li>Job: {el.job}</li>
                      <li>Age: {el.age}</li>
                      <div className='button'>
                        <li>Number: {el.number}</li>
                        <button onClick={delet}>Delete</button>
                      </div>
                    </ul>
                  )

                })
              }
              </div>
            </div>
          </div>
        )
      }
      </div>

    </div>
  )
}

export default Products