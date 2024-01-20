//here you can write code for your content script
//here you can import any npm module or any other component that you want to run in browser
//here you can create react component and render them in brower using ReactDOM.render
//here you can use chrome API to do any task
//here you can use chrome API to send messages to background script
import logo from './icon.png';
import React from "react";
import ReactDOM from "react-dom";


let popupModal = document.createElement("div");
popupModal.className = "content-popup-modal";

let logoDiv = document.createElement("div");
logoDiv.className = "my-extension-logo";
logoDiv.style.zIndex = "2";

const CommentPopup = () => {
  const closePopup = () => {
    const modalHolder = document.getElementsByClassName("modalHolder")[0];
    modalHolder.style.display = "none";
  };
  const ContainerStyle = {
    padding: "1rem",
    alignItems: "center",
    justifyContent: "center",
    width: "30vw",
    border: "4px solid #0277B5",
    borderRadius: "10px",
    margin: "auto",
    position: "relative",
    zIndex: "100",
    top: "1em",
    right: "22em",
    backgroundColor: "rgb(255 255 255)",
    transform: "translate(50%, 0%)",
    transition: "all 0.3s ease 0s",
  };
  return (
    <div  style={ContainerStyle}>
      <button onClick={closePopup}>Close</button>
      <h3>Here you can customize this popup according to your use case.</h3>
    </div>
  );
};

const Icon = () => {

  const openhandler = (e) => {
    const modalHolder = document.getElementsByClassName("modalHolder")[0];

    // // console.log("icon clicked");
    if (modalHolder.style.display === "block") {
      modalHolder.style.display = "none";
      // // console.log("popup closed");
    } else {
      modalHolder.style.display = "block";
      // // console.log("popup opened");
    }
    e.stopPropagation();
  };

  return (
    <>
      <div
        className={"popupShow"}
        onClick={openhandler}
        style={{ cursor: "pointer", marginRight: "1rem" }}
      >
        <img
          src={logo}
          alt="Logo"
          id="icon_"
          style={{ height: "20px", marginTop: "10px" }}
        />
      </div>
      <div
        className={"modalHolder"}
        style={{ position: "absolute", zIndex: "1", display: "none" }}
      ></div>
    </>
  );
};

// DOM MANUPULATION STARTS HERE FOR YOUTUBE COMMENT SECTION

document.addEventListener("click", (e) => {
  e.preventDefault();
  // console.log("clicked on something");
  //   console.log("clicked component-_> ",e.target);
  if (e.target.getAttribute("id")==="comment-dialog" ||e.target.matches(".ytd-comments-header-renderer")) {
    // console.log("clicked on comment button");
    // console.log('matchedd--> ',e.target);
     setTimeout(() => {
    const logoInster = e.target.querySelector("#footer")?.querySelector("#buttons");
    // console.log("Logoinster--> ",logoInster);

    if (logoInster) {
      logoInster.insertBefore(logoDiv, logoInster.firstChild);
      ReactDOM.render(<Icon />, logoDiv);
      // console.log("logo is already inserted");
      //Now we will insert the popup modal
      const modalHolder = logoDiv.getElementsByClassName("modalHolder")[0];
      modalHolder?.appendChild(popupModal);
      // console.log("popup inserted");
      ReactDOM.render(<CommentPopup />, popupModal);
    }
  }, 500);
  }
});


// Coded by @Jitendra Bunkar
// Follow me on Medium https://medium.com/@mr.techie for more tech related blogs 