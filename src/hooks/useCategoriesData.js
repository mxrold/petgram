import { useState, useEffect } from 'react'

export function useCategoriesData () {
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchData = () => {
      setLoading(true)
      const api = 'https://petgram-server-mxrold-rho.vercel.app/categories'
      window.fetch(api)
        .then(res => res.json())
        .then(response => {
          setCategories(response)
          setLoading(false)
        })
    }
    fetchData()
  }, [])

  return { categories, loading }
}
