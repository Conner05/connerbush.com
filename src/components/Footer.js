import React from 'react'
import { css } from '@emotion/core'
import { bpMaxSM } from '../lib/breakpoints'
import { useTheme } from './Theming'
import SubscribeForm from './Forms/Subscribe'
import { Twitter, GitHub } from './Social'
import Container from './Container'

const Footer = ({ author, noSubscribeForm }) => {
  const theme = useTheme()
  return (
    <footer
      css={css`
        background: ${theme.colors.headerBg};
      `}
    >
      <Container
        css={css`
          padding-top: 0;
          ${bpMaxSM} {
            padding-top: 0;
          }
        `}
      >
        {!noSubscribeForm && (
          <div>
            <SubscribeForm />
            <br />
            <br />
          </div>
        )}
        <div
          css={css`
            display: flex;
            align-items: center;
            justify-content: space-between;
            color: ${theme.colors.footerText};
          `}
        >
          <div
            css={css`
              font-size: 90%;
              opacity: 0.7;
              width: 80%;
            `}
          >
            <span
              css={css`
                font-weight: bold;
              `}
            >
              Disclaimer:
            </span>{' '}
            Views and opinions expressed on this blog are my own and are in no
            way representative of my employer.
          </div>
          <div>
            <Twitter />
            <GitHub />
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
