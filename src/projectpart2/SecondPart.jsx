"use client";

import React from "react";
import styles from "./secondpart.module.css";
import Section from "./Section";
import TwoColumnLayout from "./TwoColumnLayout";
import Divider from "./Divider";

function Desktop8() {
  return (
    <main className={styles.desktop8}>

      <section className={styles.div2}>
        {/* User Scenario Section */}
        <div className={styles.div3}>
          <TwoColumnLayout
            leftContent={
              <article className={styles.div5}>
                <h2 className={styles.userScenario}>User Scenario</h2>
                <p
                  className={
                    styles.belowisadetaileduserscenarioforatypicalcustomertryingtopurchasesneakersonthedropdateThescenariooutlinesnotonlythestepByStepexperienceofbuyingbutalsoincludesdesignideasintendedtosimplifytheprocessquestionsthattheusermightaskduringthetransactionandfeedbacktofurtherenhancetheappexperience
                  }
                >
                  Below is a detailed user scenario for a typical customer
                  trying to purchase sneakers on the drop date. The scenario
                  outlines not only the step-by-step experience of buying but
                  also includes design ideas intended to simplify the process,
                  questions that the user might ask during the transaction, and
                  feedback to further enhance the app experience.
                </p>
              </article>
            }
            rightContent={
              <figure className={styles.column2}>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/aff203f44d5acf50886251bccfb7f0e92a613feb?placeholderIfAbsent=true&apiKey=5099c9be96b742b8a19200c312540852"
                  alt="User scenario illustration"
                  className={styles.img}
                />
              </figure>
            }
            containerClassName={styles.div4}
            leftClassName={styles.column}
            rightClassName={styles.column2}
          />
        </div>

        <Divider className={styles.div6} />

        {/* Empathy Map Section */}
        <div className={styles.div7}>
          <TwoColumnLayout
            leftContent={<h2 className={styles.empathyMap}>Empathy Map</h2>}
            rightContent={
              <p
                className={
                  styles.forJaketheresellerheexpresseshisexcitementandcuriositybysayingthingslikeTheseshoesareprettyniceandquestioningDidtheseselloutAtthesametimehisinternalthoughtsrevealconcernsaboutthebuyingprocesshewondersIsthisappgoingtobeslowHowwillIbuytheseintimeandDotheyhavethelatestreleaseTheseinsightshighlighttheblendofenthusiasmandanxietyJakeexperiencesemphasizingtheneedforafastreliableandupToDatepurchasingplatform
                }
              >
                For Jake the reseller, he expresses his excitement and curiosity
                by saying things like "These shoes are pretty nice" and
                questioning, "Did these sell out?" At the same time, his
                internal thoughts reveal concerns about the buying process, he
                wonders, "Is this app going to be slow?", "How will I buy these
                in time?", and "Do they have the latest release?" These insights
                highlight the blend of enthusiasm and anxiety Jake experiences,
                emphasizing the need for a fast, reliable, and up-to-date
                purchasing platform.
              </p>
            }
            containerClassName={styles.div8}
            leftClassName={styles.column3}
            rightClassName={styles.column4}
          />
        </div>

        <figure>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/290f75925462c602602565cec2784cb8a305618d?placeholderIfAbsent=true&apiKey=5099c9be96b742b8a19200c312540852"
            alt="Empathy map visualization"
            className={styles.img2}
          />
        </figure>

        <Divider className={styles.div9} />

        {/* Customer Journey Map Section */}
        <div className={styles.div10}>
          <TwoColumnLayout
            leftContent={
              <article className={styles.div12}>
                <h2 className={styles.customerJourneyMap}>
                  Customer Journey Map
                </h2>
                <p
                  className={
                    styles.ioutlinethesneakerBuyingexperienceacrossfivekeyphasesPostDropDateDropDateShippingBillingPurchaseConfirmationandDayofArrivalInthePostDropDatephasecustomersbrowsesocialmediaandvisittheExclusiveKicksapptocheckupcomingsneakerreleasesTheysignupfornotificationstostayupdatedandprepareforthedropAtthisstageusersfeelexcitedandhopefulbutmayexperienceanxietyduetoslowcheckoutprocessesordifficultyfindingproductlistings
                  }
                >
                  I outline the sneaker-buying experience across five key
                  phases: Post Drop Date, Drop Date, Shipping & Billing,
                  Purchase Confirmation, and Day of Arrival.
                  <br />
                  In the Post Drop Date phase, customers browse social media and
                  visit the Exclusive Kicks app to check upcoming sneaker
                  releases. They sign up for notifications to stay updated and
                  prepare for the drop. At this stage, users feel excited and
                  hopeful but may experience anxiety due to slow checkout
                  processes or difficulty finding product listings.
                </p>
              </article>
            }
            rightContent={
              <figure className={styles.div13}>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/0271b1378dc4741265cb594fc8d5467edb1dd25d?placeholderIfAbsent=true&apiKey=5099c9be96b742b8a19200c312540852"
                  alt="Customer journey map"
                  className={styles.img3}
                />
              </figure>
            }
            containerClassName={styles.div11}
            leftClassName={styles.column5}
            rightClassName={styles.column6}
          />
        </div>

        <Divider className={styles.div14} />

        {/* Userflow Section */}
        <div className={styles.div15}>
          <TwoColumnLayout
            leftContent={
              <figure className={styles.div17}>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/5af86248ab68446440ee75c1f14c8d30661e5341?placeholderIfAbsent=true&apiKey=5099c9be96b742b8a19200c312540852"
                  alt="User flow diagram"
                  className={styles.img4}
                />
              </figure>
            }
            rightContent={
              <article className={styles.div18}>
                <h2 className={styles.userflow}>Userflow</h2>
                <p
                  className={
                    styles.thisUserflowillustratesthestepByStepjourneyausertakestobrowseselectandpurchaseasneakerTheprocessbeginsattheHomescreenwheretheuserdecideswhethertheywantaspecificsneakersuchastheAirJordan4FearoriftheyneedtosearchforitemsIftheyhaveasneakerinmindtheynavigatedirectlytotheproductpageotherwisetheyexploredifferentoptionsbeforemakingadecision
                  }
                >
                  This Userflow illustrates the step-by-step journey a user
                  takes to browse, select, and purchase a sneaker. The process
                  begins at the Home screen, where the user decides whether they
                  want a specific sneaker, such as the Air Jordan 4 Fear, or if
                  they need to search for items. If they have a sneaker in mind,
                  they navigate directly to the product page; otherwise, they
                  explore different options before making a decision.
                </p>
              </article>
            }
            containerClassName={styles.div16}
            leftClassName={styles.column7}
            rightClassName={styles.column8}
          />
        </div>

        <Divider className={styles.div19} />
      </section>
    </main>
  );
}

export default Desktop8;