"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var InfoList = React.createClass({
  displayName: "InfoList",

  mixins: [React.addons.LinkedStateMixin],
  getInitialState: function getInitialState() {
    return { startdate: "", username: "", password: "", email: "", fname: "", gname: "", gender: "",
      birthday: "", countryofbirth: "", streetname: "", city: "", country: "",
      passportno: "", citizenship: "", pexday: "", idtype: "", idday: "",
      travelday: "", nz: "", nzday: "", cardholder: "", cardno: "",
      cardtype: "", csc: "", month: "", year: "" };
  },
  backup: function backup(e) {
    var json = JSON.stringify(this.state);
    var blob = new Blob([json], { type: "application/json" });
    saveAs(blob, this.state.fname + this.state.gname + ".json");
  },
  render: function render() {
    var _React$createElement;

    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    var now = year + '-' + (month > 9 ? month : '0' + month) + '-' + (day > 9 ? day : '0' + day);
    var past = year - 31 + '-' + (month > 9 ? month : '0' + month) + '-' + (day > 9 ? day : '0' + day);
    var future = year + 25 + '-' + (month > 9 ? month : '0' + month) + '-' + (day > 9 ? day : '0' + day);
    var tfuture = year + 1 + '-' + (month > 9 ? month : '0' + month) + '-' + (day > 9 ? day : '0' + day);
    return React.createElement(
      "div",
      null,
      React.createElement(
        "nav",
        { className: "navbar navbar-fixed-top" },
        React.createElement(
          "div",
          { className: "btn-group btn-group-justified" },
          React.createElement(
            "div",
            { className: "btn-group" },
            React.createElement(
              "button",
              { className: "btn btn-default", onClick: this.backup },
              "Generate Json"
            )
          )
        )
      ),
      React.createElement(
        "div",
        { className: "form-group" },
        React.createElement(
          "label",
          { className: "control-label" },
          "Start Date"
        ),
        React.createElement("input", { id: "startdate", type: "date", className: "form-control", min: now, valueLink: this.linkState('startdate') })
      ),
      React.createElement(
        "div",
        { className: "form-group" },
        React.createElement(
          "label",
          { className: "control-label" },
          "Username"
        ),
        React.createElement("input", { type: "text", className: "form-control", valueLink: this.linkState('username'), placeholder: "Username" })
      ),
      React.createElement(
        "div",
        { className: "form-group" },
        React.createElement(
          "label",
          { className: "control-label" },
          "Password"
        ),
        React.createElement("input", (_React$createElement = { type: "text", className: "form-control" }, _defineProperty(_React$createElement, "type", "password"), _defineProperty(_React$createElement, "valueLink", this.linkState('password')), _defineProperty(_React$createElement, "placeholder", "Password"), _React$createElement))
      ),
      React.createElement(
        "div",
        { className: "form-group" },
        React.createElement(
          "label",
          { className: "control-label" },
          "Email"
        ),
        React.createElement("input", { type: "email", className: "form-control", valueLink: this.linkState('email'), placeholder: "Email" })
      ),
      React.createElement(
        "div",
        { className: "form-group" },
        React.createElement(
          "label",
          { className: "control-label" },
          "Family name"
        ),
        React.createElement("input", { type: "text", className: "form-control", valueLink: this.linkState('fname'), placeholder: "Family name" })
      ),
      React.createElement(
        "div",
        { className: "form-group" },
        React.createElement(
          "label",
          { className: "control-label" },
          "Given name"
        ),
        React.createElement("input", { type: "text", className: "form-control", valueLink: this.linkState('gname'), placeholder: "Given name" })
      ),
      React.createElement(
        "div",
        { className: "form-group" },
        React.createElement(
          "label",
          { className: "control-label" },
          "Gender"
        ),
        React.createElement(
          "select",
          { id: "gender", className: "form-control", valueLink: this.linkState('gender') },
          React.createElement(
            "option",
            null,
            "Select an option"
          ),
          React.createElement(
            "option",
            { value: "M" },
            "Male"
          ),
          React.createElement(
            "option",
            { value: "F" },
            "Female"
          )
        )
      ),
      React.createElement(
        "div",
        { className: "form-group" },
        React.createElement(
          "label",
          { className: "control-label" },
          "Date of Birth"
        ),
        React.createElement("input", { id: "birthday", type: "date", className: "form-control", min: past, max: now, valueLink: this.linkState('birthday') })
      ),
      React.createElement(
        "div",
        { className: "form-group" },
        React.createElement(
          "label",
          { className: "control-label" },
          "Country of birth"
        ),
        React.createElement(
          "select",
          { id: "countryofbirth", className: "form-control", valueLink: this.linkState('countryofbirth') },
          React.createElement(
            "option",
            null,
            "Select an option"
          ),
          React.createElement(
            "option",
            { value: "24" },
            "Belgium"
          ),
          React.createElement(
            "option",
            { value: "46" },
            "China"
          ),
          React.createElement(
            "option",
            { value: "211" },
            "Taiwan"
          )
        )
      ),
      React.createElement(
        "div",
        { className: "form-group" },
        React.createElement(
          "label",
          { className: "control-label" },
          "Street name"
        ),
        React.createElement("input", { type: "text", className: "form-control", valueLink: this.linkState('streetname') })
      ),
      React.createElement(
        "div",
        { className: "form-group" },
        React.createElement(
          "label",
          { className: "control-label" },
          "City of residence"
        ),
        React.createElement("input", { type: "text", className: "form-control", valueLink: this.linkState('city') })
      ),
      React.createElement(
        "div",
        { className: "form-group" },
        React.createElement(
          "label",
          { className: "control-label" },
          "Country of residence"
        ),
        React.createElement(
          "select",
          { id: "country", className: "form-control", valueLink: this.linkState('country') },
          React.createElement(
            "option",
            null,
            "Select an option"
          ),
          React.createElement(
            "option",
            { value: "24" },
            "Belgium"
          ),
          React.createElement(
            "option",
            { value: "46" },
            "China"
          ),
          React.createElement(
            "option",
            { value: "211" },
            "Taiwan"
          )
        )
      ),
      React.createElement(
        "div",
        { className: "form-group" },
        React.createElement(
          "label",
          { className: "control-label" },
          "Passport number"
        ),
        React.createElement("input", { type: "text", className: "form-control", valueLink: this.linkState('passportno'), placeholder: "Passport number" })
      ),
      React.createElement(
        "div",
        { className: "form-group" },
        React.createElement(
          "label",
          { className: "control-label" },
          "Citizenship of passport"
        ),
        React.createElement(
          "select",
          { id: "citizenship", className: "form-control", valueLink: this.linkState('citizenship') },
          React.createElement(
            "option",
            null,
            "Select an option"
          ),
          React.createElement(
            "option",
            { value: "24" },
            "Belgium"
          ),
          React.createElement(
            "option",
            { value: "46" },
            "China"
          ),
          React.createElement(
            "option",
            { value: "211" },
            "Taiwan"
          )
        )
      ),
      React.createElement(
        "div",
        { className: "form-group" },
        React.createElement(
          "label",
          { className: "control-label" },
          "Passport expiry date"
        ),
        React.createElement("input", { id: "pexday", type: "date", className: "form-control", min: now, max: future, valueLink: this.linkState('pexday') })
      ),
      React.createElement(
        "div",
        { className: "form-group" },
        React.createElement(
          "label",
          { className: "control-label" },
          "Identification type"
        ),
        React.createElement(
          "select",
          { id: "idtype", className: "form-control", valueLink: this.linkState('idtype') },
          React.createElement(
            "option",
            null,
            "Select an option"
          ),
          React.createElement(
            "option",
            { value: "1" },
            "Driver License"
          ),
          React.createElement(
            "option",
            { value: "2" },
            "Birth Certificate"
          ),
          React.createElement(
            "option",
            { value: "3" },
            "National ID"
          )
        )
      ),
      React.createElement(
        "div",
        { className: "form-group" },
        React.createElement(
          "label",
          { className: "control-label" },
          "Date identification document was issued"
        ),
        React.createElement("input", { id: "idday", type: "date", className: "form-control", min: past, max: now, valueLink: this.linkState('idday') })
      ),
      React.createElement(
        "div",
        { className: "form-group" },
        React.createElement(
          "label",
          { className: "control-label" },
          "Date intend to travel to NZ"
        ),
        React.createElement("input", { id: "travelday", type: "date", className: "form-control", min: now, max: tfuture, valueLink: this.linkState('travelday') })
      ),
      React.createElement(
        "div",
        { className: "form-group" },
        React.createElement(
          "label",
          { className: "control-label" },
          "Have you been to NZ before?"
        ),
        React.createElement(
          "select",
          { id: "nz", className: "form-control", valueLink: this.linkState('nz') },
          React.createElement(
            "option",
            null,
            "Select an option"
          ),
          React.createElement(
            "option",
            { value: "No" },
            "No"
          ),
          React.createElement(
            "option",
            { value: "Yes" },
            "Yes"
          )
        )
      ),
      React.createElement(
        "div",
        { className: "form-group" },
        React.createElement(
          "label",
          { className: "control-label" },
          "If yes, when?"
        ),
        React.createElement("input", { id: "nzday", type: "date", className: "form-control", min: past, max: now, valueLink: this.linkState('nzday') })
      )
    );
  }
});
ReactDOM.render(React.createElement(InfoList, null), document.getElementById('whv'));