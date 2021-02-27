//components
class MagicEightBall extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: '',
      randomIndex: '' };

    this.ask = this.ask.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  ask() {
    if (this.state.userInput) {
      this.setState({
        randomIndex: Math.floor(Math.random() * 20),
        userInput: '' });

    }
  }
  handleChange(event) {
    this.setState({
      userInput: event.target.value });

  }
  render() {
    const possibleAnswers = [
    'IT IS CERTAIN',
    'IT IS DECIDEDLY SO',
    'WITHOUT A DOUBT',
    'YES, DEFINITELY',
    'YOU MAY RELY ON IT',
    'AS I SEE IT, YES',
    'OUTLOOK GOOD',
    'YES',
    'SIGNS POINT TO YES',
    'REPLY HAZY TRY AGAIN',
    'ASK AGAIN LATER',
    'BETTER NOT TELL YOU NOW',
    'CANNOT PREDICT NOW',
    'CONCENTRATE AND ASK AGAIN',
    "DON'T COUNT ON IT",
    'MY REPLY IS NO',
    'MY SOURCES SAY NO',
    'MOST LIKELY',
    'OUTLOOK NOT SO GOOD',
    'VERY DOUBTFUL'];

    const answer = possibleAnswers[this.state.randomIndex];
    return /*#__PURE__*/(
      React.createElement("div", null, /*#__PURE__*/
      React.createElement("input", {
        type: "text",
        value: this.state.userInput,
        onChange: this.handleChange,
        placeholder: "Will I win a million dollars??" }), /*#__PURE__*/

      React.createElement("br", null), /*#__PURE__*/
      React.createElement("br", null), /*#__PURE__*/
      React.createElement("button", { onClick: this.ask }, "Ask the Magic Eight Ball!"), /*#__PURE__*/
      React.createElement("br", null), /*#__PURE__*/
      React.createElement("br", null), /*#__PURE__*/
      React.createElement("br", null), /*#__PURE__*/
      React.createElement("span", { className: "eightball" }, /*#__PURE__*/
      React.createElement("div", { className: "triangleBorder" }, /*#__PURE__*/
      React.createElement("div", { className: "triangle" }, /*#__PURE__*/
      React.createElement("div", { className: "textbox" },
      answer)))), /*#__PURE__*/





      React.createElement("br", null), /*#__PURE__*/
      React.createElement("br", null), /*#__PURE__*/
      React.createElement("hr", null), /*#__PURE__*/
      React.createElement("div", { id: "contact-section" }, "\xA0 \xA0 \xA0 ", /*#__PURE__*/
      React.createElement("section", { id: "contact", class: "container" }, /*#__PURE__*/
      React.createElement("h2", { id: "contact-title" }, "Designed & Coded by Cole Crum"), /*#__PURE__*/
      React.createElement("div", { class: "contact-links" }, /*#__PURE__*/
      React.createElement("div", { class: "link-cont", id: "git-cont" }, /*#__PURE__*/
      React.createElement("a", { id: "profile-link", href: "https://github.com/colecrum?tab=repositories", target: "_blank", class: "btn contact-details" }, /*#__PURE__*/React.createElement("img", { id: "git-logo", class: "contact-img", src: "https://www.sferalabs.cc/wp-content/uploads/github-logo-white.png", title: "GitHub" }))), /*#__PURE__*/
      React.createElement("div", { class: "link-cont", id: "pen-cont" }, /*#__PURE__*/
      React.createElement("a", { href: "https://codepen.io/colecrum", target: "_blank", class: "btn contact-details" }, /*#__PURE__*/React.createElement("img", { class: "contact-img", src: "https://blog.codepen.io/wp-content/uploads/2012/06/Button-White-Large.png", title: "CodePen" }))), /*#__PURE__*/
      React.createElement("div", { class: "link-cont", id: "mail-cont" }, /*#__PURE__*/
      React.createElement("a", { href: "mailto:colemcrum@gmail.com", target: "_blank", class: "btn contact-details" }, /*#__PURE__*/React.createElement("img", { class: "contact-img", src: "https://lh3.googleusercontent.com/VS3B_qhOFTYsdyNfnlr98zg3HNjB_Gcs9bxVnaQO9MysAoBOXMHATClhRviImKKJV8RV-0s7hl8KeVQcij5Iagb1exHzt40x679l8Q=w0", title: "Email" }))), /*#__PURE__*/
      React.createElement("div", { class: "link-cont", id: "phone-cont" }, /*#__PURE__*/
      React.createElement("a", { href: "tel:512-517-8503", target: "_blank", class: "btn contact-details" }, /*#__PURE__*/React.createElement("img", { class: "contact-img", src: "https://cdn4.iconfinder.com/data/icons/phones-colored/48/JD-32-512.png", title: "Phone" })))), "\xA0 \xA0 \xA0 "), "\xA0 \xA0 ")));







  }}


ReactDOM.render( /*#__PURE__*/React.createElement(MagicEightBall, null), document.getElementById("root"));