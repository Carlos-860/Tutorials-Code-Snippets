// 19.
// Props in React

// 19.1 props and corresponding key pair values
// function ContactCard(props) {
//   return (
//     <div className="contact-card">
//       <img src={props.img} alt={props.name} />
//       <h3>{props.name}</h3>
//       <p>Phone: {props.phone} </p>
//       <p>Email: {props.email}</p>
//     </div>
//   );
// }
// export default ContactCard;

// 19.2 props as a object
function ContactCard(props) {
  return (
    <div className="contact-card">
      <img src={props.contact.img} alt={props.contact.name} />
      <h3>{props.contact.name}</h3>
      <p>Phone: {props.contact.phone} </p>
      <p>Email: {props.contact.email}</p>
    </div>
  );
}
export default ContactCard;
