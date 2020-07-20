/** @jsx jsx */
import { jsx } from "@emotion/core"
import "twin.macro"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faTwitter,
  faInstagram,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-regular-svg-icons"

const socialLinkData = [
  {
    icon: faTwitter,
    url: "https://twitter.com/home",
    ariaLabel: "go to twitter",
  },
  {
    icon: faFacebook,
    url: "https://www.facebook.com/",
    ariaLabel: "go to facebook",
  },
  {
    icon: faInstagram,
    url: "https://www.instagram.com/",
    ariaLabel: "go to instagram",
  },
  {
    icon: faEnvelope,
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
                <FontAwesomeIcon
                  icon={link.icon}
                  tw="m-2 text-3xl hover:text-white"
                />
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
