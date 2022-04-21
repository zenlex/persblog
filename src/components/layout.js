import * as React from "react"
import { Link } from "gatsby"
import { ThemeToggler } from "gatsby-plugin-dark-mode"

const Layout = ({ location, title, children }) => {
  const [isDarkMode, setIsDarkMode] = React.useState(true)

  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <Link to="/">{title}</Link>
      </h1>
    )
  } else {
    header = (
      <Link className="header-link-home" to="/">
        {title}
      </Link>
    )
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <ThemeToggler>
        {({ theme, toggleTheme }) => (
          <label>
            <input
              type="checkbox"
              onChange={e => {
                setIsDarkMode(!isDarkMode)
                toggleTheme(isDarkMode ? "light" : "dark")
              }}
              checked={theme === "dark"}
            />{" "}
            Dark mode
          </label>
        )}
      </ThemeToggler>
      <header className="global-header">{header}</header>
      <main>{children}</main>
      <footer>
        <div style={{ marginBottom: 20, fontSize: "1.3em" }}>
          <a href="https://www.zenlex.dev">
            <b>Check out my Portfolio</b>
          </a>
        </div>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </div>
  )
}

export default Layout
