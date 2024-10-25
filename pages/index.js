import React from 'react'
import Head from 'next/head'

const Desktop = (props) => {
  return (
    <>
      <div className="desktop-container1">
        <Head>
          <title>exported project</title>
        </Head>
        <div className="desktop-container2">
          <div className="desktop-container3">
            <img
              alt="image"
              src="/external/tiny%20blue%20rocket.svg"
              className="desktop-image1"
            />
          </div>
        </div>
        <div className="desktop-container4">
          <h1 className="desktop-text1">We have closed!</h1>
          <span className="desktop-text2">
            <span>Tiny Blue Rocket as a web agency has closed.</span>
            <br></br>
            <span>
              We are no longer about to help you get your perfect website.
            </span>
          </span>
        </div>
        <div className="desktop-container5">
          <img
            alt="image"
            src="/external/peopleworkingtogetherwebsite12001-lxf8-1200w.png"
            className="desktop-image2"
          />
        </div>
      </div>
      <style jsx>
        {`
          .desktop-container1 {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .desktop-container2 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            max-width: 1200px;
            align-items: flex-start;
            padding-top: 24px;
            justify-content: flex-start;
          }
          .desktop-container3 {
            flex: 0 0 auto;
            width: 222px;
            height: 52px;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .desktop-image1 {
            width: 200px;
            object-fit: cover;
          }
          .desktop-container4 {
            gap: 16;
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            max-width: 1200px;
            align-self: center;
            align-items: center;
            padding-top: 64px;
            flex-direction: column;
            padding-bottom: 16px;
          }
          .desktop-text1 {
            color: #0e0c38;
            font-size: 46px;
            text-align: center;
            font-family: 'Plus Jakarta Sans';
          }
          .desktop-text2 {
            color: #666666;
            text-align: center;
            font-family: 'Plus Jakarta Sans';
            line-height: 1.8;
            padding-top: 16px;
          }
          .desktop-container5 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            max-width: 1200px;
            align-items: center;
            padding-top: 16px;
            flex-direction: column;
            justify-content: center;
          }
          .desktop-image2 {
            width: 100%;
            object-fit: cover;
            padding-top: 16px;
            border-radius: var(--dl-radius-radius-radius8);
            padding-bottom: 48px;
          }
          @media (max-width: 991px) {
            .desktop-container1 {
              padding: var(--dl-space-space-unit);
            }
            .desktop-container2 {
              padding-top: var(--dl-space-space-unit);
            }
            .desktop-text1 {
              font-size: 40px;
            }
            .desktop-image2 {
              padding-bottom: var(--dl-space-space-oneandhalfunits);
            }
          }
          @media (max-width: 479px) {
            .desktop-text1 {
              font-size: 30px;
            }
          }
        `}
      </style>
    </>
  )
}

export default Desktop
