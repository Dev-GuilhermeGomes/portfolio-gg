# Portfolio GG 🎨

Bem-vindo ao Portfolio GG - Um site pessoal moderno e responsivo para apresentar o perfil profissional de Guilherme Gomes.

## 📋 O que é este site?

O site funciona como um portfolio profissional completo com:

- ✨ **Apresentação pessoal** - Hero section com informações principais
- 🎯 **3D Technology Sphere** - Visualização interativa das linguagens e tecnologias
- 💼 **Experiência & Competências** - Skills, experiência profissional e educação
- 🚀 **Projetos de Desenvolvimento** - Galeria de projetos de software com detalhes
- 📊 **Dashboard de Gestão** - Visão geral, Kanban Board e Timeline de projetos
- 📧 **Contacto Direto** - Formulário para enviar mensagens
- 🌓 **Dark Mode** - Toggle para alternar entre light e dark mode

## 🛠️ Tecnologias Usadas

- **Next.js 16** (App Router) - Framework React moderno
- **React 19** - Biblioteca UI
- **TypeScript** - Type safety
- **Tailwind CSS 4** - Styling responsivo
- **React Context** - Gerenciamento de tema

## 📱 Páginas Disponíveis

| Página | Descrição |
|--------|-----------|
| **Home** | Visão geral do perfil, 3D sphere com tecnologias e habilidades principais |
| **About** | Descrição pessoal, ícones de contacto e formulário interativo |
| **Resume** | Skills (soft & hard), experiência, educação, idiomas e interesses |
| **Portfolio** | Galeria de projetos de desenvolvimento |
| **Portfolio [slug]** | Página individual de cada projeto com detalhes e links |
| **Management** | Dashboard com Overview, Kanban Board e Timeline de projetos |

## 🎨 Features

### Dark Mode
- Toggle button na navbar para alternar entre light e dark mode
- Persistência da preferência no localStorage
- Suporte a preferências do sistema operacional
- Cores otimizadas para cada tema:
  - **Light Mode**: Vermelho (#DC2626) como cor principal, fundo branco
  - **Dark Mode**: Vermelho (#DC2626) como cor principal, fundo escuro

### 3D Technology Sphere
- Visualização interativa em 3D das linguagens e frameworks
- 8 tecnologias principais: JavaScript, TypeScript, React, Node.js, Python, SQL, HTML/CSS, Git
- Rotação contínua e efeito hover
- Design responsivo

### Design & UX
- Layout responsivo (mobile-first)
- Transições suaves entre temas
- Componentes bem organizados
- Tipografia clara e legível
- Acessibilidade melhorada (aria-labels, semantic HTML)

## 🚀 Como Aceder Localmente

### Pré-requisitos
- Node.js 18+
- npm ou yarn

### 1) Instalar Dependências

```bash
npm install
```

### 2) Iniciar Servidor de Desenvolvimento

```bash
npm run dev
```

Se estiveres no PowerShell com restrição de scripts:

```bash
npm.cmd run dev
```

O site estará disponível em [http://localhost:3000](http://localhost:3000)

### 3) Build para Produção

```bash
npm run build
npm run start
```

## 📁 Estrutura do Projeto

```
src/
├── app/                      # Páginas e layouts
│   ├── layout.tsx           # Root layout com ThemeProvider
│   ├── page.tsx             # HomePage
│   ├── about/
│   ├── portfolio/
│   ├── resume/
│   ├── management/
│   └── globals.css
├── components/              # Componentes reutilizáveis
│   ├── navbar.tsx
│   ├── footer.tsx
│   └── languages-sphere.tsx # 3D Technology Sphere
├── lib/
│   └── theme-context.tsx    # Context para Dark Mode
├── data/
│   └── site-data.ts         # Dados do portfolio
└── types/                   # Tipos TypeScript
```

## 🎯 Scripts Disponíveis

```bash
npm run dev      # Iniciar servidor de desenvolvimento
npm run build    # Build para produção
npm run start    # Iniciar servidor de produção
npm run lint     # Executar ESLint
```

## 🔧 Configuração

### Personalizar Dados

Edite `src/data/site-data.ts` para:
- Nome, função e descrição pessoal
- Skills e competências
- Experiência profissional
- Projetos de portfolio
- Informações de contacto
- Projetos de gestão

### Personalizar Cores

Edite `src/app/globals.css`:
```css
:root {
  --background: #eceef1;    /* Light mode background */
  --foreground: #0f172a;    /* Light mode text */
}

.dark {
  --background: #0f172a;    /* Dark mode background */
  --foreground: #eceef1;    /* Dark mode text */
}
```

## 📦 Dependências Principais

```json
{
  "next": "16.2.0",
  "react": "19.2.4",
  "react-dom": "19.2.4",
  "tailwindcss": "^4",
  "typescript": "^5"
}
```

## 💡 Melhorias Futuras

- [ ] Adicionar animações de scroll
- [ ] Sistema de comentários
- [ ] Blog integrado
- [ ] Multi-idioma (PT/EN)
- [ ] Analytics
- [ ] SEO otimizado

## 📝 Licença

Este projeto é pessoal e livre para usar como referência.

## 👨‍💻 Autor

**Guilherme Gomes** - Desenvolvedor de Software & Project Manager

- 📧 Email: [contacto@example.com]
- 💼 LinkedIn: [perfil]
- 🐙 GitHub: [repositório]

---

Feito com ❤️ usando Next.js e React

### 3) Abrir no navegador

Acede a:

http://localhost:3000

## Scripts uteis

```bash
npm run dev      # ambiente de desenvolvimento
npm run lint     # validacao de codigo
npm run build    # build de producao
npm run start    # correr build em producao
```

## Personalizacao rapida

Grande parte do conteudo do site esta centralizada em dados para ser facil de editar.

Edita os conteudos em:

- src/data/site-data.ts

La podes atualizar:

- Contactos
- Textos do About
- Skills e percentagens
- Experiencias
- Educacao
- Idiomas
- Projetos de portfolio
- Dados de kanban e timeline de management

## Contacto

- Email: guilherme.fggomes07@gmail.com
- GitHub: https://github.com/Dev-GuilhermeGomes
- LinkedIn: https://www.linkedin.com/in/guilherme-gomes-devviper

## Objetivo do projeto

Este portfolio foi pensado para comunicar de forma simples, moderna e profissional:

- Quem e o Guilherme
- O que sabe fazer
- Como trabalha em projetos tecnicos e de gestao
- Como entrar em contacto rapidamente
