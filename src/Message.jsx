/* eslint-disable react/prop-types */
const Message = (props) => {
  return (
    <div className="container">
      <h1 className="title">Advice Generator</h1>
      <p className="advice">{props.advice}</p>
      <button className="button" onClick={props.getAdvice}>
        Get Advice
      </button>
      <p className="count">You Generated {props.count} Advices</p>
    </div>
  );
};

export default Message;
