/** @jsx jsx */
import { jsx } from "@emotion/core"
import "twin.macro"

import { GrTwitter, GrFacebook, GrInstagram, GrMail } from "react-icons/gr"

const socialLinkData = [
  {
    icon: <GrTwitter />,
    url: "https://twitter.com/home",
    ariaLabel: "go to twitter",
  },
  {
    icon: <GrFacebook />,
    url: "https://www.facebook.com/",
    ariaLabel: "go to facebook",
  },
  {
    icon: <GrInstagram />,
    url: "https://www.instagram.com/",
    ariaLabel: "go to instagram",
  },
  {
    icon: <GrMail />,
    url: "mailto:hogepiyo@example.com",
    ariaLabel: "mail to hogepiyo@example.com",
  },
]

function Footer() {
  return (
    <footer tw="flex flex-col items-center justify-center pt-16 pb-8 text-gray-500 bg-black">
      <ul tw="flex items-center justify-center mb-8">
        {socialLinkData.map((link, index) => {
          return (
            <li key={index}>
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.ariaLabel}
              >
                <div tw="m-2 text-3xl hover:text-white">{link.icon}</div>
              </a>
            </li>
          )
        })}
      </ul>
      <div tw="text-xs">© Untitled. All rights reserved.</div>
    </footer>
  )
}

export default Footer
