import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { SiteConfig } from "../../types"

const SocialIcons = () => {
  const data = useStaticQuery(graphql`
    query SiteConfigQuery {
      siteConfig: siteConfig {
        ...SiteConfig
      }
    }
  `)

  const siteConfig: SiteConfig = data?.siteConfig
  if (!siteConfig) {
    return null
  }

  return (
    <nav className="social-icons">
      <ul className="social-icons__list">
        {siteConfig.data.facebook_username && (
          <li className="social-icons__list-facebook">
            <a
              href={siteConfig.data.facebook_username}
              target="_blank"
              rel="noopener"
            >
              <span>Facebook</span>
            </a>
          </li>
        )}
        {siteConfig.data.instagram_username && (
          <li className="social-icons__list-instagram">
            <a
              href={siteConfig.data.instagram_username}
              target="_blank"
              rel="noopener"
            >
              <span>Instagram</span>
            </a>
          </li>
        )}
        {siteConfig.data.twitter_username && (
          <li className="social-icons__list-twitter">
            <a
              href={siteConfig.data.twitter_username}
              target="_blank"
              rel="noopener"
            >
              <span>Twitter</span>
            </a>
          </li>
        )}
        {siteConfig.data.linkedin_username && (
          <li className="social-icons__list-linkedin">
            <a
              href={siteConfig.data.linkedin_username}
              target="_blank"
              rel="noopener"
            >
              <span>LinkedIn</span>
            </a>
          </li>
        )}
        {siteConfig.data.tiktok_username && (
          <li className="social-icons__list-tiktok">
            <a
              href={siteConfig.data.tiktok_username}
              target="_blank"
              rel="noopener"
            >
              <span>TikTok</span>
            </a>
          </li>
        )}
        {siteConfig.data.dribbble_username && (
          <li className="social-icons__list-dribbble">
            <a
              href={siteConfig.data.dribbble_username}
              target="_blank"
              rel="noopener"
            >
              <span>Dribbble</span>
            </a>
          </li>
        )}
        {siteConfig.data.youtube_username && (
          <li className="social-icons__list-youtube">
            <a
              href={siteConfig.data.youtube_username}
              target="_blank"
              rel="noopener"
            >
              <span>YouTube</span>
            </a>
          </li>
        )}
        {siteConfig.data.vimeo_username && (
          <li className="social-icons__list-vimeo">
            <a
              href={siteConfig.data.vimeo_username}
              target="_blank"
              rel="noopener"
            >
              <span>Vimeo</span>
            </a>
          </li>
        )}
        {siteConfig.data.discord_username && (
          <li className="social-icons__list-discord">
            <a
              href={siteConfig.data.discord_username}
              target="_blank"
              rel="noopener"
            >
              <span>Discord</span>
            </a>
          </li>
        )}
        {siteConfig.data.reddit_username && (
          <li className="social-icons__list-reddit">
            <a
              href={siteConfig.data.reddit_username}
              target="_blank"
              rel="noopener"
            >
              <span>Reddit</span>
            </a>
          </li>
        )}
        {siteConfig.data.behance_username && (
          <li className="social-icons__list-behance">
            <a
              href={siteConfig.data.behance_username}
              target="_blank"
              rel="noopener"
            >
              <span>Behance</span>
            </a>
          </li>
        )}
        {siteConfig.data.spotify_username && (
          <li className="social-icons__list-spotify">
            <a
              href={siteConfig.data.spotify_username}
              target="_blank"
              rel="noopener"
            >
              <span>Spotify</span>
            </a>
          </li>
        )}
      </ul>
    </nav>
  )
}

export default SocialIcons
