import React from 'react'
import { useParams } from 'react-router-dom'//used in routing part 
export default function () {
    const { userid } = useParams()//used to get the user id from the url
  return (
    <div className="bg-gray-700 text-white text-center">User:{userid}</div>
  )
}




