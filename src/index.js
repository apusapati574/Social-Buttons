/* eslint-disable no-undef */
const Button = (props) => {
  const {className, buttonText} = props;
  return (
    <button className={`${className}`}>{buttonText}</button>
  );
}

const element = (
  <div className="bg-container">
    <h1 className="heading">Social Buttons</h1>
    <div>
      <Button className="like-button" buttonText="Like" />
      <Button className="comment-button" buttonText="Comment" />
      <Button className="share-button" buttonText="Share" />
    </div>
  </div>
);
ReactDOM.render(element, document.getElementById("root"));

