const form = document.querySelector("form")

form.addEventListener("submit", async (event) =>{
  event.preventDefault()

  const url = form.action
  const hakusana = form.querySelector("input#query").value
  const response = await fetch(`${url}?q=${hakusana}`)
  // const response = await fetch(`https://api.tvmaze.com/search/shows?q=${hakusana}`)

  const result = await response.json()

  console.log("result", result)
})



