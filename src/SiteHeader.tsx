const navItems = [
  { href: "#about", label: "about" },
  { href: "#experience", label: "experience" },
  { href: "#projects", label: "projects" },
  { href: "#skills", label: "skills" },
  { href: "#hobbies", label: "fun" },
]

export default function SiteHeader() {
  return (
    <header className="home-header">
      <a href="#top" className="home-name" aria-label="Samantha Oh, home">SO</a>
      <nav className="home-nav" aria-label="Main navigation">
        {navItems.map(item => (
          <a key={item.href} href={item.href}>{item.label}</a>
        ))}
      </nav>
    </header>
  )
}
