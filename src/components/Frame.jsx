import React from "react";
import  "../components/styles.css"

 const Frame = () => {
  return (
    <div className="frame">
      <div className="div" id="payment">
        <img className="image" alt="Image" src="image-61.png" />
        <img className="img" alt="Image" src="image-62.png" />
        <div className="overlap">
          <div className="group">
            {/* <div className="overlap-group">
              <div className="text-wrapper">09/25</div>
              <div className="element">**** **** **** 1289</div>
              <div className="text-wrapper-2">$5,750,20</div>
              <div className="text-wrapper-3">Current Balance</div>
            </div> */}
            <img className="mastercard-logo" alt="Mastercard logo" src="image.png" />
          </div>
          <div className="group-2">
            <div className="overlap-2">
              {/* <div className="rectangle" />
              <div className="text-wrapper-4">09/25</div>
              <div className="element-2">**** **** **** 1289</div>
              <div className="element-3">$1,348,74</div>
              <div className="text-wrapper-5">Current Balance</div> */}
            </div>
            <img className="mastercard-logo-2" alt="Mastercard logo" src="mastercard-logo.png" />
          </div>
        </div>
        <img className="image-2" alt="Image" src="image-64.png" />
        <div className="overlap-3">
          <img className="image-3" alt="Image" src="image-65.png" />
          <div className="text-wrapper-6">BankApp</div>
        </div>
        <img className="image-4" alt="Image" src="image-63.png" />
        <div className="group-3">
          <img className="container-background" alt="Container background" src="container-background.svg" />
          <div className="icon-face-ID" />
        </div>
        <div className="group-4">
          <img className="container-background" alt="Container background" src="container-background-2.svg" />
          <img className="vector" alt="Vector" src="vector-2.svg" />
        </div>
        <img className="group-5" alt="Group" src="group-3183315.png" />
        <div className="text-wrapper-7">Face ID</div>
        <div className="text-wrapper-8">PIN</div>
        <div className="text-wrapper-9">Sign in by</div>
        <div className="text-wrapper-10">Other</div>
        <div className="overlap-4">
          <div className="iphone-x-pro">
            <div className="tabs">
              <div className="nav-item-light">
                <img className="icon" alt="Icon" src="icon.svg" />
                <div className="text-wrapper-11">My cards</div>
              </div>
              <div className="nav-item-light-2">
                <img className="action-search" alt="Action search" src="search-24px.svg" />
                <div className="text-wrapper-12">Payments</div>
              </div>
              <div className="nav-item-light-3">
                <img className="alert-error" alt="Alert error" src="error-24px.svg" />
                <div className="text-wrapper-13">Transfers</div>
              </div>
              <div className="nav-item-light-4">
                <img className="mdi-people" alt="Mdi people" src="mdi-people.svg" />
                <div className="text-wrapper-14">Profile</div>
              </div>
            </div>
          </div>
          <div className="overlap-wrapper">
            <div className="overlap-5">
              <div className="rectangle-2" />
              <div className="large-title">Account</div>
              <div className="group-6">
                <p className="p">
                  <span className="span">$25 588</span>
                  <span className="span">,15</span>
                </p>
                <div className="large-title-2">USD 56*3254</div>
                <div className="large-title-3">Transactions history</div>
                <div className="group-7">
                  <img className="external-link" alt="External link" src="external-link.svg" />
                  <div className="large-title-4">-$2,7</div>
                  <div className="large-title-5">12.01.2020 09:34</div>
                  <p className="large-title-6">
                    <span className="text-wrapper-15">Starbucks New York LLP </span>
                    <span className="text-wrapper-16">NY, USA</span>
                  </p>
                </div>
                <div className="group-8">
                  <img className="external-link" alt="External link" src="image.svg" />
                  <div className="large-title-4">-$135</div>
                  <div className="large-title-5">11.01.2020 21:34</div>
                  <p className="large-title-6">
                    <span className="text-wrapper-15">Wallmart Marketplace </span>
                    <span className="text-wrapper-16">NY, USA</span>
                  </p>
                </div>
                <div className="group-9">
                  <img className="external-link-2" alt="External link" src="external-link-2.svg" />
                  <div className="large-title-4">+$250</div>
                  <div className="large-title-5">11.01.2020 18:08</div>
                  <p className="large-title-6">
                    <span className="text-wrapper-15">From Catherine Pierce </span>
                    <span className="text-wrapper-16">Code: 32548/765487</span>
                  </p>
                </div>
                <img className="vector-2" alt="Vector" src="vector.svg" />
                <img className="image-5" alt="Image" src="image-67.png" />
              </div>
            </div>
          </div>
        </div>
        <div className="home-indicator" />
      </div>
    </div>
  );
};
export default Frame;