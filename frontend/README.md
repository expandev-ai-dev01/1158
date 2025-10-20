# Cadastro de Bancos

Sistema para cadastrar os bancos do sistema financeiro brasileiro com dados básicos (código do banco e nome do banco).

## Tecnologias

- React 19.2.0
- TypeScript 5.9.3
- Vite 5.4.11
- TailwindCSS 4.1.14
- React Router DOM 7.9.3
- TanStack Query 5.90.2
- React Hook Form 7.63.0
- Zod 4.1.11

## Estrutura do Projeto

```
src/
├── app/                    # Configuração da aplicação
│   ├── App.tsx            # Componente raiz
│   ├── main.tsx           # Ponto de entrada
│   ├── providers.tsx      # Provedores globais
│   └── router.tsx         # Configuração de rotas
├── core/                  # Componentes e utilitários compartilhados
│   ├── components/        # Componentes UI reutilizáveis
│   ├── lib/              # Configurações de bibliotecas
│   ├── types/            # Tipos TypeScript globais
│   └── utils/            # Funções utilitárias
├── domain/               # Domínios de negócio (a serem implementados)
├── pages/                # Páginas da aplicação
│   ├── layouts/          # Layouts compartilhados
│   ├── Home/             # Página inicial
│   └── NotFound/         # Página 404
└── assets/               # Recursos estáticos
    └── styles/           # Estilos globais
```

## Instalação

```bash
# Instalar dependências
npm install

# Copiar arquivo de ambiente
cp .env.example .env

# Iniciar servidor de desenvolvimento
npm run dev
```

## Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Compila o projeto para produção
- `npm run preview` - Visualiza a build de produção
- `npm run lint` - Executa o linter

## Funcionalidades

- ✅ Cadastro de novos bancos
- ✅ Consulta de bancos cadastrados
- ✅ Edição de bancos
- ✅ Exclusão de bancos
- ✅ Validação de dados
- ✅ Listagem de bancos

## Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto:

```env
VITE_API_URL=http://localhost:3001
VITE_API_VERSION=v1
VITE_API_TIMEOUT=30000
```

## Arquitetura

O projeto segue uma arquitetura modular baseada em domínios:

- **app/**: Configuração e inicialização da aplicação
- **core/**: Componentes e lógica compartilhada
- **domain/**: Módulos de negócio isolados
- **pages/**: Componentes de página e layouts

## Padrões de Código

- TypeScript para type safety
- React Hooks para gerenciamento de estado
- TanStack Query para cache e sincronização de dados
- React Hook Form + Zod para validação de formulários
- TailwindCSS para estilização
- Componentes funcionais com composição

## Próximos Passos

Esta é a estrutura base do projeto. Os próximos passos incluem:

1. Implementar o domínio de bancos
2. Criar páginas de listagem e formulários
3. Integrar com a API backend
4. Adicionar testes
5. Implementar autenticação (se necessário)

## Licença

Privado