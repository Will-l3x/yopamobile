
import React , {Component} from 'react';
import { View, Text, ScrollView, Dimensions, TouchableOpacity } from 'react-native';

const isCloseToBottom = ({layoutMeasurement, contentOffset, contentSize}) => {
    const paddingToBottom = 20;
    return layoutMeasurement.height + contentOffset.y >=
      contentSize.height - paddingToBottom;
};

class TermsAndConditions extends Component{

  state = {
      accepted: false
  }

  render(){
    return (
     <View style={styles.container}>
            <Text style={styles.title}>ItsYopa</Text>
            <ScrollView 
            style={styles.tcContainer}
            onScroll={({nativeEvent}) => {
                if (isCloseToBottom(nativeEvent)) {
                  this.setState({
                      accepted: true
                  })
                }
              }}
            >
                <Text style={styles.tcP}>ItsYopa Terms & Conditions</Text>
                <Text style={styles.tcP}>TERMS AND CONDITIONS OF THIS APP </Text>
                    <Text style={styles.tcL}>{'\u2022'} Please find herein our terms and conditions for use of this Site. These terms and conditions, together with the Billing Statement, Listing Policy, Mobile Device Terms and Conditions, (the "Annexures") form this Agreement.This Agreement is a binding agreement between you and YOPA (Pty) Ltd. It sets out the terms and conditions governing your registration and use of the services and facilities offered on this site, so please read it carefully. If you are uncertain, or you do not agree with the terms and conditions or any of the Annexures then you should not accept them.However please be advised we will only provide you with the platform and or Services once you have accepted the terms and conditions of this Agreement by clicking on the "I ACCEPT" button when registering with us.By entering any and all personal information on this Site in the creation of an account, in registering with YOPA, in making a sale or participating in a transaction and/or by accepting this Agreement, you consent to the processing of your and or your entities information by YOPA in terms of the Protection of Personal Information Act No4 of 2013 (hereafter referred to as the Protection of Personal Information Act).</Text>
                    <Text style={styles.tcP}>PART 1: DEFINITIONS </Text>
                    <Text style={styles.tcL}>{'\u2022'} "Agreement" means these terms and conditions, the Billing Statement, the Rating Systems Rules, the Listing Policy, Privacy Statement, Mobile Device Terms & Conditions (the "Annexures");
Guidelines" means the guidelines issued by YOPA from time to time governing the listing/advertising/offering, on the mobile application, of goods for sale and or available services as a direct result of registering on this site;
"Buyer" means a person, firm or company who purchases, any goods or services listed/advertised/offered on the YOPA mobile application;
"Confirmation Notice" means the notification set out in Clause 10.1;
"Fees" means any charges which YOPA charge as per the Billing Statement;
"Indemnified Party" means officers, employees, contractors, consultants and agents from time to time of YOPA, and any related entities, associates or affiliates of YOPA, and each of their respective officers, employees, contractors, consultants and agents from time to time;
"Intellectual Property Rights" means industrial and intellectual property whether protected by common law or under statute including (without limitation) copyright and neighbouring rights, all rights in relation to inventions (including registered patents and the benefit of any applications for a patent), plant varieties, plant breeders, registered and unregistered trade-marks, registered and unregistered designs including drawings, circuit layouts and all other rights resulting from intellectual activity in the industrial, scientific, literary or artistic fields anywhere in the world;
"Listings" means availing/advertising/offering goods for sale or services to be provided on the Yopa mobile application as a result of an active account registered on this Site;
‘’Participating stores” refers to individuals/chains/franchises/businesses or any other juristic and or natural person that registers with YOPA and places a listing/advertisement/offering for the sale of goods or provision of services to buyers and or users of the Yopa mobile application;
"Personal information" or "Your information" or “Private information” refers to “Personal information”, “your information” or “Private information” all of which are used interchangeably in this Agreement and which mean any and all information you provide to us in using this Site including, but not limited to: 
- You and or your entities registration details including your and or your entities name, address, telephone and fax numbers;
- You and your entities credit card details or any other financial information;
- Unique identifiers including your entities name and VAT number;
- The information that we learn about you and or your entity as a result of your use as well as the use of your entity of this Site, including without limitation, through the listing/advertisement/offering for sale of goods and services on the Yopa mobile application;
- The information obtained from you and or your entity in confirmation of your identity and or the registration details of your entity, address and contact information for security and verification reasons;
- That information defined as personal information in section 1 of the Protection of Personal Information Act.
"Seller" means a natural person, firm, company or entity who has an account with YOPA and as such places a listing/advertisement/offer for the sale of goods or provision of services on the Yopa mobile application:
"Site" or "Website" means the Internet website by which YOPA offers the Services from time to time, currently [insert website address]
"user" or "users" means any Buyer, seller, or anybody else who is using the Site;
"VAT" means any value added tax, or other consumption tax;
"we", "us", "our", "ourselves" and "YOPA" are used interchangeably in this Agreement and all mean YOPA;
"you" or "your" means you, whether as a Buyer and/or you as a Seller, as the case requires, or otherwise, and your successors and permitted assignees;</Text>
                    
<Text style={styles.tcP}>PART 2: SALE TERMS AND CONDITIONS </Text>
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    <Text style={styles.tcL}>{'\u2022'} 1 Trading on this Site

1.1 As we are not directly involved in any sale and purchase of any goods and services on this Site, save for placing listings/advertisements/offerings of deals/specials/sales of goods and services by participating stores, including yourself, to individuals who are using the YOPA mobile application, you hereby agree and acknowledge that we:

1.1.1 are not, nor do we represent or hold ourselves out as the manufacturer/seller or agent of any such manufacturer/seller/service provider or sales representative of any such manufacturer/seller/service provider, of any services offered or goods for sale and/or sold to buyers and or users of the Yopa mobile application;

1.1.2 have absolutely no control over, nor do we represent or hold out that we have any control over any one or more of the circumstances described in Clause 4.6;

1.1.3 have absolutely no control over whether, nor do we represent or hold out that, the goods and services offered for sale by participating stores to the buyers and or users of the Yopa mobile application are legally able to be sold and or provided respectively.

1.1.4 cannot guarantee, nor do we represent or hold out that the descriptions of any goods and services offered by participating stores to buyers and or users of the Yopa mobile application will be accurate;

1.1.6 cannot and do not control, nor do we represent or hold out that a Buyer and or user of the Yopa mobile application will pay for the goods and services that he/she purports to purchase in terms of a deal/transaction/sale/lead/listing presented on the Yopa mobile application;

1.1.7 cannot and do not control, nor do we represent or hold out that any goods and services will be delivered to a respective Buyer and or user of the Yopa mobile application by the respective Seller and or participating store;

1.1.8 cannot and do not represent nor hold out that we can confirm that each Buyer, user of the Yopa mobile application, Seller, participating store, representative of a participating store is who they claim to be;

1.1.9 cannot and do not represent or hold out that we can exercise any practical control over what feedback, comments or rating scores will be provided about you pursuant to the Rating Systems Rules;

1.1.10  will not become involved in any dispute between any Buyer, user of the Yopa mobile application and Seller and or participating store arising out of, or in connection with, the completion or lack of any sale and purchase of any goods or provision of services listed/advertised/offered on the mobile application,  we do however reserve the right at our sole discretion to mediate between two parties should the conduct of either party impact on the reputation and or image of our business or for any other justifiable reason.

1.1.11 We do not act as agent for either the Seller and or participating store or the Buyer and or user of the Yopa mobile application;

1.1.12 We have no involvement in the sale and purchase of any goods and services other than providing Buyer’s/users of the Yopa mobile application with listings/advertisements/offers of deals, sales, discounts, promotions, goods for sale, services available and inversely matching Sellers/participating stores with Buyer’s/users of the Yopa mobile application seeking to purchase their goods or purvey their services. Therefore, we will never accept returns of any goods and services purchased as we are not the Seller. You must therefore direct all enquiries, of whatever nature, including, but not limited to, goods and services being of a defective nature, not fit for a particular purpose, or non-delivery of any goods and services, to the Seller/participating store, at whose sole discretion, the goods or services may be replaced or the price refunded.

1.2 Should you as the Seller and or participating store or Buyer and or user of the Yopa mobile application obtain any personal information pertaining to a Buyer and or user of the Yopa mobile application or Seller and or participating store, as the case may be, for any or all purposes listed in clause 11.4.1 of this Agreement, you hereby represent and warrant to us as well as the Seller and or participating store or Buyer and or user of the Yopa mobile application, as the case may be:

1.2.1      that you will respect the privacy of the Buyer and or user of the Yopa mobile application or Seller and or participating store and fulfil any other obligations in terms of clause 11.4.2 of this Agreement; and

1.2.2   that you will comply with the provisions of the Protection of Personal Information Act, insofar as it applies, in processing any and all personal information pertaining to such persons whether obtained from YOPA, the Seller/participating store or Buyer/user of the Yopa mobile application themselves.

1.3 In registering on this site, you agree and acknowledge that we cannot and do not, nor do we represent or hold out that we can or could control:

1.3.1      how the Seller/participating store or Buyer/user of the Yopa mobile application processes your personal/private information;

1.3.2      whether the Seller/user of the Yopa mobile application or Buyer/participating store processes your personal information in accordance with the Protection of Personal Information Act insofar as the Act applies; and/or

1.3.3      where or to whom your personal information is transferred by the Seller/participating store or Buyer/user of the Yopa mobile application during or after the sale or purchase of any goods or service or the completion of a transaction, whatever the case might be;

1.4 In registering on this site and agreeing to and acknowledging the contents of clause 1.3 above, you further agree to and acknowledge that before, during or upon completion of the sale and purchase of goods and the offer and provision of services, YOPA is never at any point responsible for or liable in respect of:

 

1.4.1 any personal information that may be exchanged between the Buyer/user of the Yopa mobile application and the Seller/participating store for any infraction/action contrary to the provisions of clause 11.4.1 of this Agreement;

1.4.2 any personal information that may be provided to the Seller/participating store with the Buyer’s/Yopa mobile application user’s authorisation in terms of this Agreement or vice versa;

1.4.3 the manner in which such personal information is processed subsequent to such an exchange between the Buyer/user of the Yopa mobile application and Seller/participating store;

1.4.4 a failure on the part of the Seller/participating store or Buyer/user of the Yopa mobile application as the case may be, to process such personal information in accordance with the Protection of Personal Information Act insofar as the Act applies; and/or

1.4.5 the transfer of any information by the Seller/participating store or Buyer/user of the Yopa mobile application to a third party.

 

2 Provision of Services

2.1 Upon registration and while your account is in good standing we will provide you with direct sales opportunities to users of the Yopa mobile application;

2.2 We will provide you with a username and password in order to login as required.

2.3 We reserve the right to alter or vary your preferred username and password at any time and will notify you of any such alteration (by email where possible).

2.4 You agree to provide all necessary equipment, network connections and software to access this Site.

2.5 You agree that YOPA may restrict and/or terminate its services to you at any point in time if, in its sole and absolute discretion, elects to do so and without having to furnish any reasons for doing so.</Text>
                    
<Text style={styles.tcP}>PART 3:Fees </Text>
                    
                    
                    <Text style={styles.tcL}>{'\u2022'} 3.1 In order to list/advertise/offer, deals, sales, discounts, promotions, goods, services to users of the YOPA mobile application you are required to PURCHASE one of the following packages;

3.1.1

3.1.2

3.2 It is a condition of using this site that you agree to the fee structure, billing and credit rules as described in the Billing Statement. If you do not agree to this condition, then please do not accept these terms and conditions.

3.3 We may choose in our sole discretion to change our fee structure, billing and credit rules from time to time and such changes shall be effective forthwith.

3.4 We may choose in our sole discretion to change our fee structure, billing and credit rules from time to time, for promotional events and such changes are effective for the dates specified when we post such a promotion on this Site.

3.5 We reserve the right in our sole discretion to alter or remove any Services or withdraw any Services offered. In the event that we introduce a new Service, any fees for that Service will take effect from the launch of that Service, unless otherwise stated.

3.6 Unless otherwise stated, all fees are quoted in South African Rands and are inclusive of VAT.

3.7 Sellers/participating stores are given the right to list/advertise/offer deals, sales, discounts, promotions, goods, services to users of the YOPA mobile application by paying the relevant fees. we reserve the right in our sole discretion to place third party advertisements on any page on the YOPA website, mobile application without your consent or payment to you.</Text>
                    
                    
<Text style={styles.tcP}>PART 4:Seller </Text>
                    
                    <Text style={styles.tcL}>{'\u2022'} 4.1 Subject to this Clause 4 and Clause 9, you may register on this site and while your account is in good standing you will be permitted to list/advertise/offer, deals, sales, discounts, promotions, goods, services to users of the YOPA mobile application

4.2 You agree that we or our nominated agent may undertake any necessary credit checks on you and/or your credit card where applicable.

4.3 In addition to any other rights we may have under this Agreement, if you fail to comply with Clause 4.2 or if you directly or indirectly impede us and or our nominated agents from undertaking an necessary credit checks, we reserve the right to prohibit your access to this site and the services we provide herein as well as to the users of the Yopa mobile application until such time as such impediment is removed;

4.4 Upon registration on this site, you agree and warrant to us as well as to the Buyer and or user of the Yopa mobile application and any other interested party that:

4.4.1 your information:

4.4.1.1 is accurate and not false, misleading, deceptive or fraudulent;

4.4.1.2 does not breach any Intellectual Property Rights of a third party;

4.4.1.3 is made in compliance with all applicable laws, government regulations or guidelines;

4.4.1.4 is not forged, threatening or offensive or otherwise constitutes harassment;

4.4.1.5 does not contain confidential information or trade secrets of a third party unless you have obtained the consent of the third party owner;

4.4.1.6 does not contain any viruses, worms, trojan horses or other invidious programs or data, whether attached to or embedded in other programs or data or not;

4.4.1.7 will not defame (libel or slander) another person or transmit misleading or inaccurate information of any kind, whether of a personal or commercial nature; and

4.4.1.8 does not contain child pornography, bestiality or any other obscene or offensive material;

4.4.2 you are the legal owner of the goods listed/advertised/offered to Buyers and or users of the Yopa mobile application and that you have the legal capacity to conclude the sale and to pass the title in the goods to the Buyer and or user of the Yopa mobile application alternatively that you are duly authorised by the legal owner of the goods to list/advertise/offer them and to conclude sales and to duly pass title thereof whenever a valid sale is concluded;

4.4.3 you will not hyperlink to or include descriptions of goods and services that you are not offering for sale and or to provide respectively;

4.4.4 if a Buyer and or user of the Yopa mobile application who is a dealer in terms of the Second-Hand Goods Act 6 of 2009 (hereafter referred to as the Second-Hand goods Act) makes a request for the information necessary to complete his register, you agree that the said information will not be unnecessarily withheld;

4.4.5 you will adhere to the Listing Policy.

4.5 You represent and warrant to us and to the Buyer/user of the Yopa mobile application separately that your information will be kept up to date and that you will edit your account/profile and any other information accordingly. These changes may be effected as described in clause 14.15.

 

4.6 In addition to Clause 4.4 and Clause 4.5, you represent and warrant to us and separately to the Buyer/user of the mobile application that:

4.6.1 the goods and services you list/advertise/offer for sale to Buyers and or users of the Yopa mobile application:

4.6.1.1 are reasonably fit for the purpose or purposes for which goods of that kind are commonly bought as it is reasonable to expect having regard to matters including, without limitation, the description of those goods and their price; and

4.6.1.2 correspond with the description that you have posted on the listing /advertisement/offer of sale; and

4.6.1.3 if sold in bulk, will correspond with any samples; and

4.6.1.4 are not defective; and

4.6.1.5 are free of any charge or encumbrance such that the Buyer/user of the Yopa mobile application will be able to enjoy quiet possession of those goods;

4.6.2 the goods and or services you list/offer/advertise for sale, and eventually sell or provide respectively to any Buyer/users of the Yopa mobile application:

4.6.2.1 will be rendered with due care and skill; and

4.6.2.2 any materials supplied in connection with any services will be reasonably fit for the purpose for which they have been supplied; and

4.6.2.3 if the Buyer/user of the Yopa mobile application has made it known to you the particular purpose for which the services are required or the result that they desire and or intend any service to achieve, then those services and any materials supplied in connection with those services will be reasonably fit for that purpose or are of such nature and quality that they might be reasonably expected to achieve that result;

4.6.3 the goods and/or services you offer for sale, and sell to Buyers/ users of the Yopa mobile application:

4.6.3.1 will be offered for sale, and sold, in compliance with the laws of the Republic of South Africa and especially that of the Consumer Protection Act 68 of 2008 as amended;

4.6.3.2 are legally able to be offered for sale, and sold on this Site, and otherwise, that the offer and sale of those goods and services is not in contravention of any law.

4.7 The Seller/participating store may set a reserve price, or minimum price for the goods and services, but that reserve price or minimum price, as the case may be, must not be set out in the information provided about the goods or services to which that reserve price or minimum price, whichever is applicable, applies, or otherwise disclosed to any person at any time.

4.8 In the information provided about the goods or services the Seller/participating store offers for sale, or sells to Buyers/users of the Yopa mobile application, the Seller/participating store must set out the terms and conditions for sale of those goods or services, including the following:

4.8.1 payment terms;

4.8.2 terms of delivery;

4.8.3 returns policy;

4.8.4 taxes, duties and costs (including, without limitation, VAT, or other consumption taxes, customs and other import duties and tariffs) payable by the Buyer; and

4.8.9 unless stated to the contrary, any value will be construed to refer to South African Rands;

and the Seller/participating store agrees that such terms and conditions will include any matters prescribed by us under this Agreement as well as any matter specified in the Guidelines.</Text>
                    
                    
          <Text style={styles.tcP}>PART 5:Buyer </Text>
                    
                    <Text style={styles.tcL}>{'\u2022'} 5.1 You agree and warrant to each Seller/participating store and separately to us as well as to any interested party that:

5.1.1 your information:

5.1.1.1 is accurate and not false, misleading, deceptive or fraudulent;

5.1.1.2 does not breach any Intellectual Property Rights of a third party;

5.1.1.3 is made in compliance with all applicable laws, government regulations or guidelines;

5.1.1.4 is not forged, threatening or offensive or otherwise constitutes harassment;

5.1.1.5 does not contain confidential information or trade secrets of a third party unless you have obtained the consent of the third party owner;

5.1.1.6 does not contain any viruses, worms, trojan horses or other invidious programs or data, whether attached to or embedded in other programs or data or not;

5.1.1.7 will not defame (libel or slander) another person or transmit misleading or inaccurate information of any kind, whether of a personal or commercial nature;

5.1.1.8 your information will be kept up to date and that you will edit your account/profile and any other information accordingly. These changes may be effected as described in clause 14.15.

 

5.1.2 you have the legal capacity to purchase any goods or services listed/presented/advertised, and, will not otherwise be breaching any law in purchasing those goods or services;

5.1.3 you have  capacity to pay for those goods or services;

5.1.4 the purchase of any goods and/or services  listed/advertised/offered/sold by sellers and or participating stores is absolutely at your own risk;

5.1.5 to the extent permitted by law, the Seller may exclude all terms, conditions and warranties whether express, implied, statutory, common law, or otherwise, relating to those goods and services, in all of the Seller's dealings in connection with the goods and services that you may purchase from a Seller registered on this Site; and

5.1.6 you have obtained the necessary information required to comply with the Second Hand Goods Act from the Seller; (if applicable);

5.1.7 if you are purchasing adult goods and services, that you have the legal right to purchase those goods and services.</Text>

<Text style={styles.tcP}>PART 6:Ratings, Comments and Feedback</Text>


                  <Text style={styles.tcL}>{'\u2022'}  6.1. It is a condition of using the Services that you agree that feedback, comments and ratings scores may be provided about you as described in the Rating System Rules. If you do not agree to this condition, then please do not accept these terms and conditions.

6.2. Ratings that are given to each other by users should be done as is set out in the Rating System Rules section of this Agreement.

6.3. If you believe a statement made about you pursuant to Clause 6.1 is untrue, misleading or deceptive or defamatory (" Questionable Statement "), please contact our customer service department and we will conduct an investigation. As a result of an investigation, we may (although we are not obliged to) remove the Questionable Statement. Whether or not we conduct an investigation, and irrespective of whether we remove the Questionable Statement, and even if we do not conduct an investigation, because you do not contact us or for any other reason, you hereby release us and forego any rights you may have had against us in relation to the Questionable Statement or any statement made about you pursuant to the Rating System Rules and agree that you will not make any claims or demands, or take any action, issue or maintain any proceedings or suits against us in relation to the Questionable Statement or any statement made about you pursuant to in connection with this Site, or your use of this Site.

6.4 The decision to hold an inquiry or not is entirely within our discretion and we will not be obliged in any way to entertain any representations in this regard.</Text>
                  <Text style={styles.tcP}>PART 7 Payment Details - Buyer </Text>
                  <Text style={styles.tcL}>{'\u2022'} 7.1 we may request you to provide your valid and current credit card or bank account details to us at any time.

7.2 In addition to any other rights we may have under this Agreement, if you fail to comply with 7.1, we reserve the right to prohibit your access to this site and to the services we provide herein as well as to prevent you from participating in any transactions pursuant to your use of the Yopa mobile application until such time as you provide those credit card details to us.

7.3 In providing us with the information specified in clause 7.1 above, you consent to the processing and/or further processing of such personal information by YOPA in accordance with the Protection of Personal Information Act. </Text>
                  <Text style={styles.tcP}>PART 8:YOPA Discretion </Text>
                  <Text style={styles.tcL}>{'\u2022'} 8.1 We reserve the right in our sole discretion to alter or remove any information or withdraw any listing/advertisement/offer made by you if:

8.1.1 that listing/advertisement/offer of sale of goods or provision of services, as applicable;

8.1.1.1 infringes or is suspected of infringing the Intellectual Property Rights of any person (other than the Seller/participating store in question); or

8.1.1.2 may create any liability for us whatsoever;

8.1.2 in relation to the goods and services set out in Clause 4.6, if we are not entirely satisfied that you are legally permitted to offer for sale or sell, those goods and/or services;

8.1.3 you have not complied with Clause 3.2 or Clause 4.2;

8.1.6 it is otherwise in our commercial interests to do so;

8.1.7 we are required by law to do so;

8.1.8 you breach any provision of this Agreement; or

8.1.9 for any other reason whatsoever,

8.2 you irrevocably and unconditionally agree that any rights that you may have had in respect of any legal action or laying any charge against us in respect of any action we may have taken under this Clause 8, are hereby waived. </Text>
                  <Text style={styles.tcP}>PART 3: GENERAL TERMS AND CONDITIONS </Text>
                  <Text style={styles.tcP}>9 YOPA May Amend These Terms and Conditions </Text>
                  <Text style={styles.tcL}>{'\u2022'} 9.1 We have an absolute discretion to amend the terms of this Agreement at any time. If we do so, we will post details of any amendments on this Site that will be effective forthwith.

9.2 By accepting this Agreement and any notifications of amendments to this Agreement, you also agree to accept and be bound by any changes made by us under this Clause 9. In any event, your continued use of the Services after any changes to the terms of this Agreement have taken effect in accordance with Clause 9, will be deemed to be your acceptance of those changes to the terms of this Agreement. </Text>
                  <Text style={styles.tcP}>10 Compliance with These Terms and Conditions </Text>
                  <Text style={styles.tcL}>{'\u2022'}10.1 You agree to promptly inform us of any breach by you of the terms of this Agreement and of any conduct of another user that you think may be a breach of this Agreement, whether the conduct has ceased, is continuing, or may occur in the future.

10.2 You agree that we may and will monitor your conduct if we believe that you are not complying with the terms of this Agreement. If we do, then we will respect your confidentiality, unless:

10.2.1 doing so would or could implicate us in criminal behaviour, a civil wrong, or any other claim by a person for which we may have to pay compensation;

10.2.2 the law compels, requires, or makes it prudent and desirable for us to divulge or disclose the information we hold or know or any documents we possess; or

10.2.3 we consider it necessary or desirable to make disclosures to preserve or enforce our interests or rights.

10.3 If we believe, whether or not we have conducted any monitoring, that you are not, or may be in danger of not, complying with any of the provisions of this Agreement, then we may send you a warning asking you to rectify your conduct (although we will not be obliged to do so).

10.4 If you:

10.4.1 infringe or are suspected of infringing the Intellectual Property Rights of any other person;

10.4.2 are suspected of having, or are found by conviction, settlement insurance or escrow investigation or otherwise, to have engaged in any fraudulent or other criminal activity in connection with this Site or any other web site; or

10.4.3 have an overdue payment on your YOPA Account; or

10.4.4 otherwise breach this Agreement, we may, in our absolute discretion:

10.4.4.1 withhold from you, your use of any or all of the Services;

10.4.4.2 delete or remove, without incurring any liability to you, any or all of your information and block in-coming and out-going data or message transfers;

10.4.4.3 restore the Services if and when you can demonstrate clear and complete adherence to the terms of this Agreement on a permanent and consistent basis; and

10.4.4.4 terminate the Agreement that we have entered into with you, and cancel our obligations to provide the Services, if we are not satisfied that you will clearly and completely adhere to the terms of this Agreement, on a permanent and consistent basis, if the Services are restored to you.  </Text>
                  <Text style={styles.tcP}>11 Use of Site </Text>
                  <Text style={styles.tcL}>{'\u2022'}11.1 In using this Site, you must not:

11.1.1 illegally copy, store, use, alter, modify, impair, interfere with or attempt to interfere with, or distribute software or other data;

11.1.2 alter, damage, destroy, erase, interfere with or attempt to interfere with, or infect our files, data and other computer systems and network resources or those of other users or any other person, or access, copy, modify, remove or impair the reliability, security or operation of, any data or files or other information stored in these systems or network resources;

11.1.3 impair the electronic communications to or from, or interfere with or obstruct the lawful use of, or otherwise cause any unauthorised computer functions to our computer systems or those of other users or any other person;

11.1.4 offer, sell, export, bid for, or import any Prohibited Goods and Services;

11.1.5 offer, sell, export, bid for, or import any goods and services if this breaches any law applicable to you; and

11.1.6 engage in any practice or conduct that is unlawful under any laws applicable to you;

11.1.7 copy, modify, or distribute rights or content from our sites, services or tools or YOPA's copyrights and trademarks;

11.1.8 harvest or otherwise collect information about users (including email addresses), trades listed or sales activities conducted pursuant to your registration on this site YOPA without the express permission of that user;

11.2 Any links or references (direct or indirect) to other web sites on this Site are provided for your convenience only and do not, and are not an express or implied endorsement by us, of those web sites, or the products and services contained on those web sites.

11.3 The information and material contained on this Site has been prepared in accordance with the laws of the Republic of South Africa for use in the Republic of South Africa only. It may not comply with the laws of any other country. We make no representation that the information and material contained on this Site complies with the laws (including any intellectual property laws) of any country other than the Republic of South Africa. If you choose to access this Site from outside the Republic of South Africa, you do so at your own risk and will be responsible for ensuring compliance with the laws of the country in which you are located.

11.4 Using information about other YOPA users -  

11.4.1 You agree to use user information only in accordance with applicable laws and regulations (including, without limitation, The Protection of Personal Information Act and other data protection laws) and only for:

YOPA-transaction-related purposes that are not unsolicited commercial communications;

using services offered through YOPA; and

other purposes a user expressly agrees to.

11.4.2 You agree to respect other users' privacy and disclose your privacy and security policies to them. By law, you must give other users a chance to remove themselves from your database and a chance to review the information you have collected about them.  </Text>
                  <Text style={styles.tcP}>12 Entering into this Agreement </Text>
                  <Text style={styles.tcL}>{'\u2022'} 12.1 You represent and warrant to us:

12.1.1 if you are an individual that you are eighteen (18) years of age or over and of full legal capacity and where necessary you are duly authorised and thus capable of entering into this Agreement on your own behalf alternatively on the behalf of your entity or the entity you are duly authorised to represent and to perform your obligations under this Agreement; or

12.1.2 if you are a juristic entity:

12.1.2.1 that you are duly incorporated and have been issued with a certificate of commencement of business and have the power to own/sell property; and

12.1.2.2 entering into this Agreement does not violate your Constitution; and

12.1.2.3 you have the power and have taken all corporate and other action required to enter into this Agreement and to authorise entering into this Agreement and performing your obligations under this Agreement.

12.2 Transactions in case of a minor

12.2.1 If you are under 18 years of age or if you are not legally permitted to enter into a binding and enforceable agreement, then you may not register as a user or make use of the services of YOPA, unless you are duly supervised by and you have obtained the consent of your parent or legal guardian/spouse. 

12.2.2 If your parent or legal guardian supervises you and gives his/her consent, then such person hereby agrees to be bound and to be liable and responsible for you and for all your obligations or duties in terms of the agreement entered into between yourself and YOPA (Pty) Ltd. 

12.2.3 We strictly reserve our rights to refuse our service, terminate/suspend your account or cancel orders, should YOPA, in our sole discretion find that you have failed for whatsoever reason to comply with the aforementioned provisions or the remaining provisions of these terms and conditions, without prejudice to any other rights that we may have at law.

12.2.4 To the extent that you utilize our services, we shall deem it that you were / are supervised by and that you have obtained the consent of your parent or legal guardian or curator or trustee. The onus to prove that you were not supervised or did obtain the requisite consent shall rest with you. </Text>
                  <Text style={styles.tcP}>13 Licence of, and Use of, your Information </Text>
                  <Text style={styles.tcL}>{'\u2022'} 13.1 You hereby grant to us a non-exclusive, irrevocable, worldwide, perpetual, royalty-free right to exercise the Intellectual Property Rights you have in your information that you have provided on this site and or on the Yopa mobile application, in whatever medium.

13.2 Subject to Clause 13.1, we agree to use your information only in accordance with the Privacy Statement below. If you do not agree with the terms of the Privacy Statement, please do not accept these terms and conditions.

13.3 We further agree and/or undertake to process your personal information in accordance with the provisions of the Protection of Personal Information Act. </Text>
                  <Text style={styles.tcP}>14 Privacy Statement </Text>
                  <Text style={styles.tcL}>{'\u2022'}This privacy statement discloses the privacy practices for the yopa.co.za site.

We have agreed to notify you of the following when collecting your personal information:

 

1.    The information being collected and the source from which it is collected when collected from another person;

2.    Our name and address;

3.    The purpose for which the information is being collected;

4.    Whether or not the supply of information by yourself is mandatory or voluntary;

5.    The consequences of a failure to provide the requisite information;

6.    Any particular law authorising or requiring the collection of the information;

7.    Whether we intend to transfer the information to a third country or international organisation and the level of protection afforded to the information by the said third country or international organisation;

8.    Any further information such as:

- the recipient of the information or with whom the information may be shared;

- the nature and category of the information;

- your right of access to and the right to rectify that information;

 - your right to object to the processing of your personal information; and

- the right to lodge a complaint with the Information Regulator and the contact details of the Information Regulator.

 If you have questions or concerns regarding this statement, you should please contact Customer Support by email on info@yopa.co.za.

14.1 Information Collection And Use:

14.1.1 The information we collect from you is collected for a specific, explicitly defined and lawful purpose related to the function and activity of YOPA as established in clause 14.1.2 of this Agreement. You acknowledge and agree that we may collect this information from you in connection with or as a consequence of your use of our site, including, without limitation, the supply of the online trading services to you.

14.1.2 The purpose of collection.

14.1.3 We are the sole owner of the information collected on this site. We will not sell, share, or rent this information to others in any way other than as disclosed in this privacy statement.

14.1.4 We collect information from our users at several different points on our site. We collect information about your bidding, buying and selling activities if you choose to participate on our site as a result of you engaging in these activities, and also from ratings and comments received from other users regarding you engaging in those activities. We also collect information from any form of correspondence, such as emails and telephone conversations, from you or from a third party about you. We may also collect information from you if you choose to partake in special promotions with third parties on our site. This information will be shared with that third party, but only with your consent and for the purpose of that promotion.

14.1.5 We will also collect financial information about you that you supply to us upon registration. We may pass your such information onto recognised partners in certain cases, Other information that we collect is outlined below.

14.2 Registration

14.2.1 In order to use our site, you must first complete the registration form. When you register we collect personal information such as your name, address, email address, telephone and fax numbers. This information is used to contact you about the services on our site for which you have expressed interest. We also collect additional information (such as “How did you hear about us?”, your interests), and unique identifiers (such as your company name and VAT number, if applicable). All information that is mandatory is made known on the registration form and is necessary to complete the registration process. You are encouraged to provide the additional, optional information specified on the registration form so we can provide you with a more personalized experience on our site.

14.2.2 We may, at our sole discretion, request additional personal information from you. You may be required to confirm such details as your identity, address and contact information for security and verification reasons. This information may include copies of ID documents, passports, utility bills, licenses, rights to sell or distribute a particular item or product, legal or financial documentation, or any other documentation related to your use of this website (but not limited to this).

14.3 Cookies

A Cookie is a small data file that your browser writes to your own computer’s hard drive in order to remember certain information and is linked to some personally identifiable information while on our site. Cookies are used to store your Handle and Password so that you don’t need to type these in each time you log in or make a bid, thereby saving time whilst on our site. If you reject cookies, you may still browse our site. However, in order to log in and bid or sell, cookies are required to be turned on.

There are two sorts of cookies used on our site: session cookies and persistent cookies. Once you close your browser, the session cookie simply terminates, whereas the persistent cookie remains to enable us to track and target your interests to enhance your experience on our site.

14.4 Log Files

We collect statistical information about you from page hits. Every page, image or cgi program requested by your browser from our servers is logged in a log file, which also collects the following information: your remote IP address, the referring HTML page and the type of browser and computer that you are using. We use IP addresses to analyze trends, administer our site, track your movements, and gather broad demographic information for aggregate use. The statistical information we gather is used internally for marketing analysis. This information and IP addresses are not linked to personally identifiable information.

14.5 Sharing

14.5.1 We will share aggregated demographic information with our business partners and advertisers. When we do, you will not be personally identifiable, and your personal information will only be used as part of an aggregated compilation of information. Insofar as you are making an application for a loan or any other application for services that requires a valuation of your credit profile, your purchase history on YOPA will be disclosed to our business partners in order  for our business partners to evaluate the risk in providing any such services.

14.5.2 We will release information about you (as either the buyer or the seller) to the respective buyer or seller, as the case may be, in the following circumstances:

 

14.5.2.1 Where you, as the buyer or seller, are no longer contactable pursuant to a sale or purchase;

14.5.2.2 Where you are not fulfilling your obligations in terms of any sale between yourself and the buyer or seller as the case may be;

14.5.2.3 Where you, as the buyer or seller, are acting illegally or fraudulently.

 

14.5.3 This information will also, in addition to the above, only be released to the other party by ourselves:

-       upon a formal request by the buyer or seller, as the case may be, in terms of The Promotion of Access to Information Act.

-       the release of such information is reasonably necessary and appropriate to enforce or apply the Terms and Conditions of Use of This Site;

-       the release of such information is reasonably necessary and appropriate to protect the rights, property or safety of YOPA, our users and others; and

-       access to such information is not refused on any of the grounds for refusal set out in Chapter 4 of Part 3 of the Promotion of Access to Information Act.

14.5.5 Upon a formal request by the buyer or seller, as the case may be, for access to your information for any of the reasons listed in clause 14.5.2 above, we undertake to notify you of such request (via email) and should you fail to respond to such communication within 7 days of the delivery thereof, your information will be released to the said party.

 

14.5.6 In accepting these terms and conditions, you hereby consent to the release of your information at the occurrence of any of those circumstances listed in clause 14.5.2 above and upon any failure by yourself to respond to any notification of a request to your information by the buyer or seller as the case may be.

 

14.5.7 You also agree that we will not be liable to you or any other person for any loss, damage, expense, or other amounts incurred, savings foregone, or hardship suffered, by any person however arising (including where the cause cannot be determined), through the release of your personal details, in the event of (a) and (b) above.

14.5.8 We will also share information, including personally identifiable information about you, with our parent, subsidiaries and related entities in order to provide you with an international trading service. All these entities will treat your information according to this privacy policy and in the same manner they would treat their own users’ information.

14.6 External Links

This web site contains links to other sites. Please be aware that we are not responsible for the privacy practices or content of such other sites. We encourage you to be aware when you leave our site and to read the privacy statements of each and every web site that collects personally identifiable information. This privacy statement applies solely to information collected by this site.

14.7 Newsletter

If you wish to subscribe to our newsletter, we ask for contact information such as email addresses. However, it is completely at your discretion to be removed from such a list as set out in our choice and opt-out section below.

14.8 Site And Services Updates

We also send you site and services announcement updates. You are not able to un-subscribe from these because they contain important information about our site and our services.

14.9 Surveys And Contests

14.9.1 From time-to-time we request information from you via surveys or contests. Participation in these surveys or contests is completely voluntary and you therefore have a choice whether or not to disclose any information to us. Information requested may include contact information (such as email addresses) and demographic information. We partner with third parties for supplying prizes for our contests, but no information is shared with these third parties.

14.9.2 Contact information will be used by us to notify the winners and award prizes in relation to our competitions, and also for promotional mailings. Survey information will be used for the purposes of monitoring or improving the use and satisfaction of this site. Established users of our site will be automatically entered into some of our contests, thereby providing them with more opportunities to win.

14.10 Public Forums

If we make chat rooms and message boards available to our users, please remember that any information that is disclosed in these areas becomes public information. You should therefore exercise caution when deciding to disclose your personal information. We may, from time to time, monitor private messages and communication between users using our forum private messaging system, to ensure security and policy adherence.

14.11 Tell-A-Friend

If you elect to use our referral service for informing a friend about our site, we ask you for your friend’s name and email address. We will automatically send your friend a one-time email inviting them to visit our site. We store this information for the sole purpose of sending this one-time email. Your friend may at any time contact us at info@yopa.co.za to request the removal of this information from our database.

14.12 Security

We take every precaution to prevent the loss, misuse and alteration of all information under our control. When you submit sensitive information via our site, your information is protected both online and offline.

When our registration form asks you to enter sensitive information (such as credit card number), that information is encrypted and is protected using SSL. While on a secure page, such as our registration form, the lock icon on the bottom of Web browsers such as Netscape Navigator and Microsoft Internet Explorer becomes locked, as opposed to un-locked, or open, when you are just ‘surfing’.

While we use encryption to protect sensitive information online, we also do everything in our power to protect user-information off-line. The servers that we store personally identifiable information on are kept in a secure environment.

If you have any questions about the security at our site, you can send an email to info@yopa.com.

14.13 Supplementation of Information

In order for this site to properly fulfill its obligation to our customers, it is necessary for us to supplement the information we receive with information from third party sources.

14.14 Special Offers

We send all new members a welcoming email to verify password and username. Established members will occasionally receive information on products, services, special deals, and a newsletter. Out of respect for the privacy of our users, our users have the option not to receive these types of communications (refer to our choice and opt-out section below).

14.15 Correction/Updating Personal Information:

If your personally identifiable information changes (such as your email address), or if you no longer desire to use our services, you may correct, update or remove your personal data provided to us. This can be done at the member information page or by emailing our Customer Support at info@yopa.co.za. 

Should you wish us to remove your personal data provided to us, we will delete your account. However, records of your personal information will be retained for a period of 5 years as required for lawful purposes related to our functions and activities and for statistical purposes in accordance with the Protection of Personal Information Act. This information will merely be retained and not used, shared or sold.

 

14.16 Choice/Opt-out

If you no longer wish to receive our newsletter, information about products and services and special deals, surveys, or promotional materials from us or our partners you may opt-out of receiving these communications by following the unsubscribe instructions in the relevant email or by emailing us at info@yopa.co.za.

14.17 Anti-Spam Policy

yopa(Pty) Ltd is committed to permission-based email marketing practices, and have established this no-tolerance Anti-Spam Policy. Yopa (Pty) Ltd may update this policy and provide notice of any changes on its home page. Your use of this website constitutes your acceptance of the terms and conditions of our Anti-Spam Policy.

Spam is commercial email or unsolicited bulk email, including junk mail, which has not been requested by the recipient. Spam is the opposite of permission-based email

If you believe that you have received Spam connected to yopa (Pty) Ltd in any way, send a complaint including the unsolicited email, to info@yopa.co.za. You may also provide any other information that you believe may help a yopa (Pty) Ltd investigation. yopa (Pty) Ltd does not investigate or take any action based on anonymous Spam complaints.

Individuals who register on yopa (Pty) Ltd, and provide their email address, give yopa (Pty) Ltd permission to send information on yopa (Pty) Ltd related information, products and services to said email address. In order to protect your privacy, yopa (Pty) Ltd does not sell, share or trade our subscriber list with anyone for any reason and you may unsubscribe at any time.

14.18 Notification of Changes

14.18.1 If we decide to change our privacy statement, we will post those changes on our Homepage and in our newsletter so you are always aware of what information we collect, how we use it, and under what circumstances, if any, we disclose it.

14.18.2 If we change the way we use your Personally Identifiable Information we will notify you by email in our newsletter. If you would like to opt out of having your information used in this new manner, we will ask you to contact us within a month and your information will not be used. If you do not contact us within that month, we will assume that you consent to have your information used in this new manner.

Contacting us

If you have any questions about this privacy statement or any questions regarding access to and the protection of your personal information, the practices of this site, or your dealings with us, you can contact us on info@yopa.co.za, alternatively, click here to view our PAIA/POPI page which contains information regarding access to and the protection of your personal information.  </Text>
                  <Text style={styles.tcP}>15 User Traffic and its Content </Text>
                  <Text style={styles.tcL}>{'\u2022'} 15.1 While we will always endeavour to maintain ongoing access, and, prevent and correct disruptions and failures on this Site, we cannot and do not exercise control over the data, files and other information passing through our computer systems and network resources. Therefore you agree that you:

15.1.1 are responsible for the flow and storage of your information through our computer systems and network resources;

15.1.2 take full responsibility for data, files and other information you own, send, or receive and ensure that at all times you maintain adequate backup copies as appropriate;

15.1.3 must not engage in mass postings of messages, either through e-mail or onto newsgroups, or engage in any harassment, 'electronic stalking' or 'spam';

15.1.4 must respect and abide by the conventions and rules governing the use of newsgroups, lists, discussion forums (such as ICQ and internet relay chat or similar channels), and networks, and must not post messages or otherwise communicate inappropriately, or send unsolicited messages (commercial or otherwise); and

15.1.5 accept that certain content on this Site, despite any steps we may take may contain material that you may find inappropriate, offensive, inflammatory, or adult in nature and further accept that we do not endorse such materials and disclaim any and all liability for their contents.

15.2 We cannot and do not know whether you have given access to your YOPA account to other people. You are therefore totally responsible for:

15.2.1 when and how your account with us is used; and

15.2.2 the actions of the people (if any) you allow to access, or transmit information through this Site, our computer systems and network resources or otherwise utilise the Services (whether or not you have given them your login and password details or not). </Text>
                  <Text style={styles.tcP}>16 Commercial Uses of YOPA Services </Text>
                  <Text style={styles.tcL}>{'\u2022'} 16.1 We cannot and do not take any responsibility for any commercial enterprises you may conduct as the proprietor of any goods or services that you have chosen to sell or buy in reliance on a listing/advertisement/offering made as a consequence of your registration this Site, our computer systems, network resources or the Services as part of a business or profit-making activity. Specifically:

16.1.1 if you, or those whom you permit to use your account, choose to rely upon this Site, our computer systems, network resources or the Services in any manner to support a business or other profit-making activity, you do so at your own risk absolutely; and

16.1.2 advertising, credit card payment channels, direct-debit facilities, and electronic registration forms are all examples of commercial uses of the Services where you must bear the risk absolutely.

16.2 The Services on this Site are provided to you personally or your entity, whatever the case may be, and you must never resell, trade, or barter your rights to use the Services to another person or persons nor permit any third party to use the Services.

      </Text>
                  <Text style={styles.tcP}>17 Relying Upon YOPA’S Services </Text>
                  <Text style={styles.tcL}>{'\u2022'}17.1 Whether you are using the Services for private or commercial purposes, or both, the quality and continuity of our Services depends on many factors over which we have no control and cannot seek to control. While we will always endeavour to maintain ongoing access, disruptions and failures of this Site, any or all computer systems, network resources and the Services, are probable in such an operating environment. Recognising this, you agree that:

17.1.1 we cannot and do not guarantee, warrant or otherwise imply that:

17.1.1.1 you will receive constant and uninterrupted access to this Site or the Services; or

17.1.1.2 you will receive unlimited access to all of the content available on the Site at any given time;

17.1.2 we cannot always ensure that this Site, its computer systems and network resources will be fully or continually protected from unlawful access by others, including the infection of data or other information by viruses, or the alteration, misuse, or stealing of data or other information or that any of these activities will be detected.  </Text>
                  <Text style={styles.tcP}>18 Disclaimer and Limitation of Liability </Text>
                  <Text style={styles.tcL}>{'\u2022'}18.1 Notwithstanding, and in addition to any other provision in this Agreement, you agree that we will not be liable to you or any other person for any loss, damage, expense, or other amounts incurred, savings foregone, or hardship suffered, by any person however arising (including where the cause cannot be determined), or whether it arose directly or indirectly from any authorised or unauthorised use of, access to, reliance on, or any inability to use or access this Site, the Services, or as a consequence of such use, access, reliance, or inability to access, including, but not limited to any loss relating to one or more, or a combination, of the following:

18.1.1 a failure, or error in the operation, of all or any part of this Site, our computer systems, network resources, the Services, or any other computer systems or network resources to which they may be connected or upon which they may rely, or the taking offline of any of those computer systems or network resources for any reason;

18.1.2 any circumstances which produce or have the consequence of producing a degradation, fall-off, or complete severance of access to this Site or network resources or any other computer systems or network resources to which they may be connected by any person;

18.1.3 in relation to an auction on this Site, that bids were not processed or accepted due to technical difficulties or for any reason whatsoever;

18.1.4 whether we or another person could have foreseen such a loss or type of loss, or were negligent or reckless, whether or not the loss was suffered in connection with a business or commercial enterprise, including, but not limited to, any economic or consequential loss or damage, any and all damage to, or loss of, any equipment, property, data, or other information possessed by you or any other person, any loss of profits, and any losses relating to contracts, business, revenue, goodwill, or any anticipated savings;

18.1.5 any personal losses or hardship, stress and anxiety, nervous shock, or other personal suffering or condition;

18.1.6 any errors or omissions in any documentation or other literature provided by us, any errors or omissions in any data, on this Site, or any breach of contract or negligence on the part of us, our employees, agents or authorised representatives;

18.1.7 any reliance on, the information and material contained on this Site about any goods and services or any other information or material whatsoever, or any information and material contained on, and the privacy of, web sites linked to this Site;

18.1.8 in any other circumstances as described herein;

18.1.9 any feedback, comments or rating scores made by you, or about you, pursuant to the Rating Systems Rules;

18.1.10 any action taken by us under this Agreement, including, but not limited to, action taken under Clauses 10.1 to 10.4 (inclusive); or

18.1.11 any conduct, act or omission, whether negligent, reckless, or otherwise, whether within any actual, ostensible, or apparent authority or not, at all on the part of our employees, agents, or authorised representatives.

18.1.12 any decision to hold an inquiry or not hold an inquiry into an alleged breach on the part of one of the users.

18.2 To the extent permitted by law, all terms, conditions and warranties or representations, or representation whether express, implied, statutory, common law or otherwise relating to the Services or anything in these terms and conditions, are excluded unless expressly included in this Agreement.

18.3 If any legislation or law implies in this Agreement any term or warranty and also prohibits provisions in a contract excluding the application of or exercise of that term or warranty then, to the maximum extent permitted by law, our liability for a breach of such a term or warranty will be limited, at our option to any one or more of the following:

18.3.1 if the breach relates to goods:

18.3.1.1 the replacement of the goods or the supply of equivalent goods;

18.3.1.2 the repair of such goods;

18.3.1.3 the payment of the cost of replacing the goods or of acquiring equivalent goods; or

18.3.1.4 the payment of the cost of replacing the goods repaired; and

18.3.2 if the breach relates to services:

18.3.2.1 the supplying of the services again; or

18.3.2.2 the payment of the cost of having the services supplied again.

18.4 Notwithstanding anything else in this Agreement if an Indemnified Party is liable to you, whether in respect of negligence or other delict, breach of contract or warranty, breach of statute or statutory duty, equity or otherwise directly or indirectly in relation to the performance of or any delay or failure in the performance of its obligations under this Agreement, the maximum aggregate liability of an Indemnified Party, in respect of all claims made by you for every 12 month period commencing on the execution of this Agreement or the anniversary thereof shall be R100  </Text>
                  <Text style={styles.tcP}>19 Release and Indemnity </Text>
                  <Text style={styles.tcL}>{'\u2022'} 19.1 Notwithstanding, and in addition to any other provision in this Agreement, to the maximum extent permitted by law, you agree to release from, and indemnify, each Indemnified Party, against, any claims, losses, liabilities, suits, demands, proceedings, costs or expenses (including legal costs on a full indemnity basis) directly or indirectly related to, or, arising out of:

19.1.1 your use of the Services;

19.1.2 your listing/advertising/offering for sale and the sale of, any goods and services as a result of your registration on this site;

19.1.3 the reproduction, broadcast, transmission communication or making available of any information or material (including credit card details) by us or any users (other than you) made available by use of the Services offered on this site;

19.1.4 any one or more of the circumstances described in Clause 18.1;

19.1.5 any alleged breach of a person's rights (including, but not limited to, defamation or misleading or deceptive conduct) by a communication, broadcast or transmission made available by means of the Services; or

19.1.6 any claim by any person arising out of, or in connection with any cessation (temporary or permanent) of the supply of the Services in accordance with this Agreement.

19.2 The indemnity under Clause 19.1 does not extend to:

19.2.1 expenses incurred by us that are unreasonable; or

19.2.2 losses occasioned by us as a result of this Agreement proving not to be profitable to us. </Text>
                  <Text style={styles.tcP}>20 Disputes

</Text>
                  <Text style={styles.tcL}>{'\u2022'} 20.1 You and YOPA must follow the procedure for resolving any dispute in connection with or arising out of this Agreement, in accordance with this Clause 20 before starting any proceedings (except proceedings seeking urgent interlocutory relief).

20.2 The procedure for resolving a dispute is as follows:

20.2.1 first, either you or YOPA may give notice to the other about the nature of the dispute (" Notice ") and you and YOPA will seek to negotiate a settlement within 14 working days of receipt of the Notice;

20.2.2 second, to the extent those negotiations fail, you and YOPA will seek, within a further 2 days, to reach agreement on the appointment of a mediator for resolving the dispute, and failing any such agreement, the mediator shall be appointed by AFSA Secretariat and, the mediation shall be conducted in accordance with the AFSA Administered Mediation Rules; and

20.2.3 failing such a resolution, the dispute, if arbitrable in law, shall be finally resolved in accordance with the Rules of the Arbitration Foundation of Southern Africa by an arbitrator(s) appointed by the Foundation.

20.3 You shall be liable for all costs incurred by us in the enforcement of any rights which we have in terms of this Agreement or in the recovery of any monies due to us, including collection charges and costs on an attorney and own client scale and costs of counsel as on brief whether incurred prior to or during the institution of legal proceedings or if judgement has been granted in connection with the satisfaction or enforcement of such judgement against you. </Text>
                  <Text style={styles.tcP}>21 Entire Agreement </Text>
                  <Text style={styles.tcL}>{'\u2022'} 21.1 this Agreement constitutes the entire Agreement between you and YOPA.

21.2 If there is any conflict between this Agreement and any other ancillary Agreement or annexures, the provisions of this Agreement shall prevail.

21.3 Unless the context indicates otherwise, this Agreement incorporates all other Agreements between the parties.  Should there be any conflict between any other agreement and this Agreement, the provisions of this Agreement shall prevail. </Text>
                  <Text style={styles.tcP}>22 Remedies Cumulative </Text>
                  <Text style={styles.tcL}>{'\u2022'} All rights and remedies provided in this Agreement are cumulative and are not exclusive of any rights or remedies provided by law. A notice dealing with amendments or variations or updates of this Agreement will be posted on our website .It is your duty and responsibility to familiarize and understand the amendments or variations or updates.  By continuing to use our services, you are deemed to have accepted the amendment, variation or update as binding on you. </Text>
                  <Text style={styles.tcP}>23 Relationship Of Parties </Text>
                  <Text style={styles.tcL}>{'\u2022'} Nothing in this Agreement shall be deemed to constitute any party as the agent, partner or joint venturer of another party. </Text>
                  <Text style={styles.tcP}>24 Further Assurances  </Text>
                  <Text style={styles.tcL}>{'\u2022'} A party shall take all such steps, execute all such documents and do all such acts and things as may be reasonably required by another party to give effect to any of the transactions contemplated by this Agreement. </Text>
                  <Text style={styles.tcP}>25 Non-Waiver </Text>
                  <Text style={styles.tcL}>{'\u2022'} Other than as otherwise specified in this Agreement, neither the failure of a party to enforce at any time any of the provisions of this Agreement nor the granting of any time or other indulgence shall be construed as a waiver of that provision or of the right of that party thereafter to enforce that or any other provision.  </Text>
                  <Text style={styles.tcP}>26 Governing Law </Text>
                  <Text style={styles.tcL}>{'\u2022'} 26.1 This Agreement will be governed by the laws in force in the Republic of South Africa and each party unconditionally submits to the non-exclusive jurisdiction of the court of the Republic of South Africa in relation to any legal action, suit or proceedings arising out of or with respect to this Agreement.

26.2 With reference to clause 26.1, the parties submit to the jurisdiction of the High Court of South Africa, South Gauteng High Court and the parties submit to the jurisdiction of the Magistrate’s Court or the Regional Court irrespective of whether the amount claimed by us exceeds the applicable monetary limit allowed to institute a claim in the Magistrate’s Court or Regional Court. </Text>
                  <Text style={styles.tcP}>27 Notices </Text>
                  <Text style={styles.tcL}>{'\u2022'} You choose your domicilium citandi et executandi (“domicilium”) for the purposes of giving any notice serving any legal process and for any other purpose arising from this Agreement at your addresses, e-mail and telefax numbers as set out in your application for registration on this site. Any notice to be served by either party to the other must be in writing and will be sent by hand delivery, post or facsimile, or email to the relevant party to this agreement at its respective address as specified on the application for registration on this Site and, in the case of YOPA,[INSERT ADDRESS], South Africa and in the case of mail will be deemed to have been served three (3) business days after posting. In the case of a facsimile it will be deemed to have been served on receipt of a successful transmission notice and in the case of email it will be deemed to have been served if no return email stating that the email cannot be delivered is received. If a notice is served by hand and proof thereof is made available, the notice will then be deemed to be delivered on the actual date and time of delivery. </Text>
                
            </ScrollView>

            <TouchableOpacity disabled={ !this.state.accepted } onPress={ ()=>alert("Terms and conditions accepted") } style={ this.state.accepted ? styles.button : styles.buttonDisabled }><Text style={styles.buttonLabel}>Accept</Text></TouchableOpacity>
      </View>
    );
  }

}

const { width , height } = Dimensions.get('window');

const styles = {

  container:{
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10
  },
  title: {
      fontSize: 22,
      alignSelf: 'center'
  },
  tcP: {
      marginTop: 10,
      marginBottom: 10,
      fontSize: 12
  },
  tcP:{
      marginTop: 10,
      fontSize: 12
  },
  tcL:{
      marginLeft: 10,
      marginTop: 10,
      marginBottom: 10,
      fontSize: 12
  },
  tcContainer: {
      marginTop: 15,
      marginBottom: 15,
      height: height * .7
  },

  button:{
      backgroundColor: '#136AC7',
      borderRadius: 5,
      padding: 10
  },

  buttonDisabled:{
    backgroundColor: '#999',
    borderRadius: 5,
    padding: 10
 },

  buttonLabel:{
      fontSize: 14,
      color: '#FFF',
      alignSelf: 'center'
  }

}

export default TermsAndConditions;
