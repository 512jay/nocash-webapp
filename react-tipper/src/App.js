import React from "react"

export default function App() {
  const queryParameters = new URLSearchParams(window.location.search)
  const type = queryParameters.get("type")
  const name = queryParameters.get("name")

  return (
    <div>
      <p>Type: {type}</p>
      <p>Name: {name}</p>
    </div>
  )
}