import React from 'react'
import { graphql } from 'gatsby'
import { css } from '@emotion/core'
import styled from '@emotion/styled'
import Layout from 'components/Layout'
import Link from 'components/Link'
import { useTheme } from 'components/Theming'
import Container from 'components/Container'
import { rhythm } from '../lib/typography'
import config from '../../config/website'
import { bpMaxSM } from '../lib/breakpoints'

const Hero = () => {
  const theme = useTheme()
  return (
    <section
      css={css`
        color: ${theme.colors.white};
        width: 100%;
        background: ${theme.colors.primary};
        padding: 20px 0 30px 0;
        display: flex;
      `}
    >
      <Container
        css={css`
          display: flex;
          flex-direction: column;
        `}
      >
        <div
          css={css`
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            ${bpMaxSM} {
              flex-direction: column-reverse;
              align-items: center;
            }
          `}
        >
          <div
            css={css`
              ${bpMaxSM} {
                display: flex;
                margin-top: -200px;
                margin-bottom: -50px;
              }
            `}
          >
            <h1
              css={css`
                color: ${theme.colors.white};
                position: relative;
                z-index: 5;
                line-height: 1.5;
                margin: 0;
                max-width: ${rhythm(15)};
              `}
            >
              <span role="img" aria-label="Waving hand emoji">
                👋
              </span>{' '}
              Hi, I'm Conner.
            </h1>
          </div>
          {/* </Container>
      <Container
        css={css`
          display: flex;
          flex-direction: column;
        `}
      > */}
          <div
            css={css`
              width: 20rem;
              height: 20rem;
              margin-bottom: -70px;
              margin-top: -100px;
              margin-right: -80px;
              ${bpMaxSM} {
                display: flex;
                margin-top: -60px;
                margin-bottom: 0px;
                margin-right: 0px;
              }
            `}
          >
            <img
              css={css`
                ${bpMaxSM} {
                  width: 8rem;
                  height: 8rem;
                  border-radius: 50%;
                  overflow: hidden;
                  background-color: mediumpurple;
                  margin: 0 auto;
                }
              `}
              alt="Conner self portrait"
              aria-label="Conner self portrait"
              src={config.selfPortrait}
            />
          </div>
        </div>
      </Container>
      <div
        css={css`
          height: 150px;
          overflow: hidden;
        `}
      />
    </section>
  )
}

const Description = styled.p`
  margin-bottom: 10px;
  display: inline-block;
`

export default function Index({ data: { site, allMdx } }) {
  const theme = useTheme()
  console.log(allMdx.edges)
  return (
    <Layout site={site}>
      <Hero />
      <Container
        css={css`
          padding-bottom: 0;
        `}
      >
        {allMdx.edges
          .filter(({ node: post }) => new Date(post.fields.date) <= new Date())
          .map(({ node: post }) => (
            <div
              key={post.id}
              css={css`
                margin-bottom: 40px;
              `}
            >
              <h2
                css={css({
                  marginBottom: rhythm(0.3),
                  transition: 'all 150ms ease',
                  ':hover': {
                    color: theme.colors.primary,
                  },
                })}
              >
                <Link
                  to={post.frontmatter.slug}
                  aria-label={`View ${post.frontmatter.title}`}
                >
                  {post.frontmatter.title}
                </Link>
              </h2>
              <Description>
                {post.excerpt}{' '}
                <Link
                  to={post.frontmatter.slug}
                  aria-label={`View ${post.frontmatter.title}`}
                >
                  Read Article →
                </Link>
              </Description>
            </div>
          ))}
        <Link to="/blog" aria-label="Visit blog page">
          View all articles
        </Link>
        <hr />
      </Container>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    site {
      ...site
      siteMetadata {
        title
      }
    }
    allMdx(
      limit: 5
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { published: { ne: false } } }
    ) {
      edges {
        node {
          excerpt(pruneLength: 190)
          id
          fields {
            title
            slug
            date
          }
          parent {
            ... on File {
              sourceInstanceName
            }
          }
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            description
            banner {
              childImageSharp {
                sizes(maxWidth: 720) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
            slug
            keywords
          }
        }
      }
    }
  }
`
