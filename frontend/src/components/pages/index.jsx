import { useEffect, useState } from 'react'
import CardLayout from '../layout/CardLayout'
import { deleteData, fetchData } from '../../state/reducers/AmazonReducer'

const MainPage = () => {
  const [state, setState] = useState({})
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetchData().then((data) => {
      const groupedData = data.reduce((acc, item) => {
        const { header } = item;
        if (!acc[header]) {
          acc[header] = [];
        }
        acc[header].push(item);
        return acc;
      }, {});

      setState(groupedData)
      setLoading(false)
    })
  }, [])

  const handleClick = async () => {
    setLoading(true)
    await deleteData()
    fetchData().then((data) => {
      const groupedData = data.reduce((acc, item) => {
        const { header } = item;
        if (!acc[header]) {
          acc[header] = [];
        }
        acc[header].push(item);
        return acc;
      }, {});

      setState(groupedData)
      setLoading(false)
    })
  }

  const handleLinkClick = (event) => {
    event.preventDefault();
    window.open(event.target.href, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="app">
      <h1>Amazon HomePage       <a href="http://www.amazon.com" onClick={handleLinkClick} style={{ margin: 5, backgroundColor: "aquamarine" }}> Scrape Url</a>
      </h1>
      <br />
      <span style={{ maxWidth: "100px" }}>
        <button onClick={() => handleClick()} > Delete</button>
      </span>
      {
        loading ? <div className='loading'>loading...</div>
          : <CardLayout groupedData={state} />
      }
    </div>
  )
}

export default MainPage
