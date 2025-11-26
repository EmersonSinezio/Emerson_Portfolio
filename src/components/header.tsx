import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/theme-provider";
import { Link } from "wouter";

export function Header() {
  const { theme, toggleTheme } = useTheme();

  const navItems = [
    { name: "Início", path: "/" },
    { name: "Sobre", path: "#about" },
    { name: "Projetos", path: "#projects" },
    { name: "Experiência", path: "#timeline" },
    { name: "Contato", path: "#contact" },
  ];

  const scrollToSection = (id: string) => {
    if (id.startsWith("#")) {
      const element = document.querySelector(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-[100] bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/">
            <button
              className="text-xl font-bold font-mono text-primary hover-elevate active-elevate-2 px-3 py-2 rounded-md transition-all"
              data-testid="link-home"
            >
              {"<EM />"}
            </button>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.path)}
                className="px-4 py-2 text-sm font-medium text-foreground hover-elevate active-elevate-2 rounded-md transition-all"
                data-testid={`link-${item.name.toLowerCase()}`}
              >
                {item.name}
              </button>
            ))}
          </nav>

          <Button
            size="icon"
            variant="ghost"
            onClick={toggleTheme}
            data-testid="button-theme-toggle"
            aria-label="Toggle theme"
          >
            {theme === "light" ? (
              <Moon className="w-5 h-5" />
            ) : (
              <Sun className="w-5 h-5" />
            )}
          </Button>
        </div>
      </div>
    </header>
  );
}
