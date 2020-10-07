import React from 'react'
import { graphql } from 'gatsby'
import { css } from '@emotion/core'
import Layout from 'components/Layout'
import Link from 'components/Link'
import { useTheme } from 'components/Theming'
import Container from 'components/Container'

export default function Index({ data: { site } }) {
  const theme = useTheme()
  return (
    <Layout site={site}>
      <Container>
        <h1>
          👋 <strong>Hi! I'm Conner!</strong>
        </h1>{' '}
        <p>
          I'm a React developer at STR in Nashville, TN. I blog about React,
          leadership, and team dynamics. My passion is helping others through
          meaningful software, coaching, and consulting.
        </p>
        <p>🌄 Born and raised in the hills of Appalachia in East Tennessee</p>
        <p>🎓 Learned to write software at Walters State Community College</p>
        <p>🏡 Live in Nashville, TN</p>
        <p>
          👨‍💻 Writing software professionally (getting paid for it) since 2013
        </p>
        <p>💼 Work for STR</p>
        <p>👪 Married to a stellar woman and have a beautiful daughter</p>
        <p>🙏 Follower of Jesus Christ</p>
      </Container>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    site {
      ...site
    }
  }
`
