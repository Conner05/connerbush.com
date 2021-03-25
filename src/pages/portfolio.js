import React from 'react'
import { graphql } from 'gatsby'
import { css } from '@emotion/core'
import styled from '@emotion/styled'
import Layout from 'components/Layout'
import Link from 'components/Link'
import { useTheme } from 'components/Theming'
import Container from 'components/Container'

const Description = styled.p`
  margin-bottom: 10px;
  display: inline-block;
`

export default function Index({ data: { site, allMdx } }) {
  const theme = useTheme()
  console.log(allMdx.edges)
  return (
    <Layout site={site}>
      <Container
        css={css`
          padding-bottom: 0;
          display: flex;
          flex-direction: column;
        `}
      >
        <h1>💼 Portfolio of Work</h1>
        <Link to="https://connerbush.com" aria-label="Visit my personal blog">
          My Personal Blog
        </Link>
        <Description>This is my personal blog.</Description>
        <Link
          to="https://www.youtube.com/watch?v=EtBDSB6P4lY"
          aria-label="Watch NashJS - Testing in React with Conner Bush"
        >
          NashJS - Testing in React with Conner Bush
        </Link>
        <Description>
          This is a recording of a talk I presented to the NashJS user group on
          Testing in React.
        </Description>
        <Link
          to="https://str.com/data-solutions/industry-trend-report"
          aria-label="Visit STR Trend Report Registration Process"
        >
          STR Trend Report Registration Process
        </Link>
        <Description>
          I added online registration to the Trent Report ordering process with
          real-time integration into Salesforce.{' '}
          <small>Please do not register.</small>
        </Description>
        <Link
          to="https://smartway.tn.gov/traffic"
          aria-label="Visit SmartWay Traffic"
        >
          SmartWay Traffic
        </Link>
        <Description>
          I was a member of the team that added support for Rest Areas, city
          traffic data, marker clustering, and page bookmarking to SmartWay.
        </Description>
        <Link
          to="https://apps.apple.com/us/app/christmas-4-kids/id1491062275"
          aria-label="Visit Christmas 4 Kids iOS app"
        >
          Christmas 4 Kids iOS app (currently decommissioned until Nov 2021)
        </Link>
        <Description>
          This is a mobile application to check in and manage users using a
          drivers license scanner that verifies against a database that is
          synced with a Mailchimp member list for the annual Christmas 4 Kids
          event in Sumner County.
        </Description>
        <Link
          to="https://homeful-d9f3c.firebaseapp.com/camps"
          aria-label="Visit Homeful"
        >
          Homeful
        </Link>
        <Description>
          Homeful is a mobile application to manage campsites for the unhoused
          and routes for organizations that deliver food/clothing/shelter,
          especially when multiple vehicles are involved.
        </Description>
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
