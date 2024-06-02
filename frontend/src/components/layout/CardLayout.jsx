import Card from './Card'
import PropTypes from 'prop-types';

const CardLayout = ({ groupedData }) => {


  return (
    <div className="app">
      {Object.keys(groupedData).map(header => (
        <div key={header}>
          <h2>{header}</h2>
          <div className="card-container">
            {groupedData[header].map((item, index) => (
              <Card key={index} label={item.label} imageUrl={item.imageUrl} link={item.link} />
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

CardLayout.propTypes = PropTypes.objectOf(
  PropTypes.arrayOf(
    PropTypes.shape({
      header: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      imageUrl: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    })
  )
).isRequired;

export default CardLayout
