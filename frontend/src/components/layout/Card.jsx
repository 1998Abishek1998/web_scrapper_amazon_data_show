import PropTypes from 'prop-types';

const Card = ({ label, imageUrl, link }) => {

  const handleLinkClick = (event) => {
    event.preventDefault();
    window.open(event.target.href, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="card">
      <img src={imageUrl} alt={label} />
      <div className="card-body">
        <a href={link} onClick={handleLinkClick}>
          Open in New Tab
        </a>
        <h5 className="card-title">{label}</h5>
      </div>
    </div>
  )
}

Card.propTypes = {
  label: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
}

export default Card
