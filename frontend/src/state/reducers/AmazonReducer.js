
export const fetchData = async () => {
  const data = await fetch("http://localhost:8001/api/hi", {
    method: "GET"
  })
  const res = await data.json()
  return res.data
}


export const deleteData = async () => {
  const data = await fetch("http://localhost:8001/api/deleteAll", {
    method: "PUT"
  })

  return data
}


