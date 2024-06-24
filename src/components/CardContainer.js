import Border from "./Border";
import Border1 from "./Border1";
import Border2 from "./Border2";
import PropTypes from "prop-types";
import "./CardContainer.css";

const CardContainer = ({ className = "" }) => {
  return (
    <div className={`card-container ${className}`}>
      <Border
        link="/link-12@2x.png"
        vEXGiftCard="VEX Gift Card"
        discoverOver150BrandsWith="Discover over 150 brands with the VEX"
        giftCardGiftACardGiftACho="Gift Card. Gift a Card, gift a choice."
      />
      <div className="border6">
        <div className="link-wrapper1">
          <img className="link-icon11" alt="" src="/link-21@2x.png" />
        </div>
        <div className="john-lewis-partners-gift-car-wrapper">
          <div className="john-lewis-container">
            <p className="john-lewis">{`John Lewis & Partners Gift`}</p>
            <p className="cards1">Cards</p>
          </div>
        </div>
        <div className="redeemable-in-john-container">
          <span>
            <p className="redeemable-in-john">{`Redeemable in John Lewis & Partners`}</p>
            <p className="stores-waitrose-supermarkets">
              stores, Waitrose Supermarkets.
            </p>
          </span>
        </div>
        <div className="border-inner1">
          <div className="frame-parent10">
            <div className="info-wrapper11">
              <div className="info18">Info</div>
            </div>
            <button className="link24">
              <div className="buy17">Buy</div>
            </button>
          </div>
        </div>
      </div>
      <Border
        link="/link-31@2x.png"
        vEXGiftCard="Boots Gift Cards"
        discoverOver150BrandsWith="The number one pharmacy-led beauty"
        giftCardGiftACardGiftACho="retailer i n the UK"
        propLeft="584px"
        propTop="0px"
      />
      <Border1
        link="/link-41@2x.png"
        marksSpencerGiftCards={`Marks & Spencer Gift Cards`}
        theUKsLeadingFashionAndFo="The UK's leading fashion and food"
        retailerWithAnEmphasisOnQ="retailer with an emphasis on Quality"
        andValue="and Value"
      />
      <Border
        link="/link-51@2x.png"
        vEXGiftCard="VEX Gift Card"
        discoverOver150BrandsWith="ASDA is one of Britain's biggest"
        giftCardGiftACardGiftACho="supermarkets"
        propLeft="0px"
        propTop="468px"
      />
      <Border1
        link="/link-6@2x.png"
        marksSpencerGiftCards="Morrisons Gift Card"
        theUKsLeadingFashionAndFo="Opening the door to the UK's fourth"
        retailerWithAnEmphasisOnQ="largest food retailer with over 400"
        andValue="stores."
        propTop="468px"
        propLeft="292px"
      />
      <Border
        link="/link-7@2x.png"
        vEXGiftCard={`Waitrose & Partners Gift Card`}
        discoverOver150BrandsWith="John Lewis Gift Cards available to"
        giftCardGiftACardGiftACho="spend at Waitrose"
        propLeft="584px"
        propTop="468px"
      />
      <Border
        link="/link-8@2x.png"
        vEXGiftCard="Sainsbury's Gift Cards"
        discoverOver150BrandsWith="With over 1,400 stores nationwide the"
        giftCardGiftACardGiftACho="Sainsbury’s Gift Card is the perfect Gift"
        propLeft="876px"
        propTop="468px"
      />
      <Border
        link="/link-9@2x.png"
        vEXGiftCard="Argos Gift Cards"
        discoverOver150BrandsWith="General merchandise, multi-channel"
        giftCardGiftACardGiftACho="retailer with over 880 stores"
        propLeft="0px"
        propTop="938px"
      />
      <Border
        link="/link-10@2x.png"
        vEXGiftCard="Selfridges Gift Cards"
        discoverOver150BrandsWith="Modern day emporium : from furniture"
        giftCardGiftACardGiftACho="to fashion, beauty to food"
        propLeft="292px"
        propTop="938px"
      />
      <Border
        link="/link-111@2x.png"
        vEXGiftCard="ASOS Gift Cards"
        discoverOver150BrandsWith="ASOS is a global fashion destination for"
        giftCardGiftACardGiftACho="20-somethings"
        propLeft="584px"
        propTop="938px"
      />
      <Border
        link="/link-121@2x.png"
        vEXGiftCard="Screwfix Gift Cards"
        discoverOver150BrandsWith="The Screwfix Gift Card is the perfect"
        giftCardGiftACardGiftACho="gift for every occasion."
        propLeft="876px"
        propTop="938px"
      />
      <Border1
        link="/link-13@2x.png"
        marksSpencerGiftCards="National Garden Gift Vouchers"
        theUKsLeadingFashionAndFo="The perfect gardening gift – accepted"
        retailerWithAnEmphasisOnQ="in over 1400 garden retailers across"
        andValue="the UK."
        propTop="1408px"
        propLeft="0px"
      />
      <Border
        link="/link-14@2x.png"
        vEXGiftCard="IKEA Gift Cards"
        discoverOver150BrandsWith="IKEA Gift Cards: Creating a better"
        giftCardGiftACardGiftACho="everyday life for the many people"
        propLeft="292px"
        propTop="1408px"
      />
      <Border2
        premierInnGiftCards="Premier Inn Gift Cards"
        atPremierInn="at Premier Inn"
      />
      <Border2
        premierInnGiftCards="Zip World Gift Card"
        atPremierInn="at Zip World"
        propLeft="876px"
        propTop="1408px"
        propBackgroundImage="url('/link2@3x.png')"
      />
      <Border
        link="/link-15@2x.png"
        vEXGiftCard="Thorpe Park Gift Card"
        discoverOver150BrandsWith="Leisure Voucher Gift Cards redeemable"
        giftCardGiftACardGiftACho="at Thorpe Park"
        propLeft="0px"
        propTop="1878px"
      />
      <Border
        link="/link-16@2x.png"
        vEXGiftCard="The York Dungeon Gift Card"
        discoverOver150BrandsWith="Leisure Voucher Gift Cards redeemable"
        giftCardGiftACardGiftACho="at The York Dungeon"
        propLeft="292px"
        propTop="1878px"
      />
      <Border
        link="/link-17@2x.png"
        vEXGiftCard="The London Dungeon Gift Card"
        discoverOver150BrandsWith="Leisure Voucher Gift Cards redeemable"
        giftCardGiftACardGiftACho="at The London Dungeon"
        propLeft="584px"
        propTop="1878px"
      />
      <Border2
        premierInnGiftCards="Madame Tussauds Gift Cards"
        atPremierInn="at Madame Tussauds"
        propLeft="876px"
        propTop="1878px"
        propBackgroundImage="url('/link3@3x.png')"
      />
      <Border
        link="/link-18@2x.png"
        vEXGiftCard="National Express Gift Cards"
        discoverOver150BrandsWith="Leisure Voucher Gift Cards redeemable"
        giftCardGiftACardGiftACho="at National Express"
        propLeft="0px"
        propTop="2348px"
      />
      <Border
        link="/link-19@2x.png"
        vEXGiftCard="The Magazine Gift Card"
        discoverOver150BrandsWith="A choice of over 70 magazines"
        giftCardGiftACardGiftACho="delivered direct to their door."
        propLeft="292px"
        propTop="2348px"
      />
      <Border
        link="/link-20@2x.png"
        vEXGiftCard="Legoland Gift Cards"
        discoverOver150BrandsWith="Leisure Voucher Gift Cards redeemable"
        giftCardGiftACardGiftACho="at Legoland Windsor Resort"
        propLeft="584px"
        propTop="2348px"
      />
      <Border
        link="/link-211@2x.png"
        vEXGiftCard="iFly Gift Cards"
        discoverOver150BrandsWith="Leisure Voucher Gift Cards redeemable"
        giftCardGiftACardGiftACho="at iFly"
        propLeft="876px"
        propTop="2348px"
      />
      <Border
        link="/link-22@2x.png"
        vEXGiftCard="Harvey Nichols Gift Cards"
        discoverOver150BrandsWith="The best edited selection of brands in"
        giftCardGiftACardGiftACho="Fashion, Beauty and Food"
        propLeft="0px"
        propTop="2818px"
      />
      <Border
        link="/link-23@2x.png"
        vEXGiftCard="Hastings Hotels Gift Cards"
        discoverOver150BrandsWith="Leisure Voucher Gift Cards redeemable"
        giftCardGiftACardGiftACho="at Hastings Hotels"
        propLeft="292px"
        propTop="2818px"
      />
      <Border
        link="/link-24@2x.png"
        vEXGiftCard="Hussle Gift Cards"
        discoverOver150BrandsWith="Leisure Voucher Gift Cards redeemable"
        giftCardGiftACardGiftACho="at Hussle"
        propLeft="584px"
        propTop="2818px"
      />
      <Border
        link="/link-25@2x.png"
        vEXGiftCard="Go Ape Gift Cards"
        discoverOver150BrandsWith="Leisure Voucher Gift Cards redeemable"
        giftCardGiftACardGiftACho="at Go Ape"
        propLeft="876px"
        propTop="2818px"
      />
    </div>
  );
};

CardContainer.propTypes = {
  className: PropTypes.string,
};

export default CardContainer;
