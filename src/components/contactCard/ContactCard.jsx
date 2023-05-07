import "./contactCard.css"

export const ContactCard = ({contact}) => {
  return (
    <div className="Contactwrapper">
      <img className="img" src={contact.img} alt=""/>
      <p className="name">{contact.truckNo}</p>
    </div>
  )
}
