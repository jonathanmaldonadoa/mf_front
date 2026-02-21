# Proyecto Frontend - Monorepo Nx con Module Federation

## 📋 Evaluación del Proyecto

Este es un proyecto **monorepo moderno** gestionado por **Nx** que implementa **Module Federation** para crear una arquitectura de micro front-ends. El proyecto está dividido en múltiples workspaces independientes:

- **mf_host**: Aplicación shell/host que actúa como contenedor principal
- **mf_login**: Micro front-end remoto de autenticación

### Características Principales:
✅ Arquitectura de micro front-ends con Module Federation  
✅ Monorepo escalable con Nx v22  
✅ Angular 21.1 de última generación  
✅ TypeScript 5.9 con tipado estricto  
✅ Testing con Jest + Cypress  
✅ Linting con ESLint + Prettier  
✅ Webpack 5 optimizado  

---

## 🔧 Stack Tecnológico

| Tecnología | Versión | Descripción |
|:-----------|:----------|:-----------|
| **Angular** | 21.1.0 | Framework principal para UI |
| **Nx** | 22.5.2 | Gestor de monorepo |
| **TypeScript** | 5.9.2 | Lenguaje tipado |
| **Webpack** | 5.x | Empaquetador de módulos |
| **Module Federation** | 0.21.2 | Arquitectura de micro front-ends |
| **Jest** | 30.0.2 | Testing unitario |
| **Cypress** | 15.8.0 | Testing E2E |
| **RxJS** | 7.8.0 | Programación reactiva |
| **ESLint** | 9.8.0 | Linting de código |
| **Prettier** | 3.6.2 | Formateador de código |

---

## 📦 Requisitos Previos

Antes de comenzar, asegúrate de tener instalado:

- **Node.js** >= 18.0.0 (LTS recomendado)
- **npm** >= 9.0.0 o **pnpm** >= 8.0.0
- **Git** para gestión de versiones

Verifica las versiones:
```bash
node --version
npm --version
```

---

## 🚀 Instalación

### 1. Clonar el repositorio
```bash
git clone <repository-url>
cd Proyect/front
```

### 2. Instalar dependencias
```bash
# Con npm
npm install

# O con pnpm (más rápido)
pnpm install
```

Este comando instalará todas las dependencias para ambos workspaces (mf_host y mf_login).

### 3. Verificar la instalación
```bash
npx nx --version
npx nx list
```

---

## ▶️ Cómo Iniciar el Proyecto

### Opción 1: Iniciar la aplicación shell (Host)
```bash
npx nx serve shell
```
La aplicación estará disponible en `http://localhost:4200`

### Opción 2: Iniciar la aplicación de login (Remote)
```bash
npx nx serve login
```
La aplicación estará disponible en `http://localhost:4201` (o puerto configurado)

### Opción 3: Iniciar ambas aplicaciones simultáneamente
```bash
# Termina ambas cuando termines con Ctrl+C
npx nx run-many --targets=serve --projects=shell,login
```

### Opción 4: Construcción para producción
```bash
# Build del shell
npx nx build shell

# Build del login
npx nx build login

# Build de ambos
npx nx run-many --targets=build --projects=shell,login
```

---

## ⚙️ Configuración

### Estructura del Proyecto

```
front/
├── mf_host/                    # Workspace del host/shell
│   ├── apps/
│   │   ├── shell/              # Aplicación shell principal
│   │   │   ├── src/
│   │   │   ├── module-federation.config.ts
│   │   │   ├── webpack.config.ts
│   │   │   └── project.json
│   │   └── shell-e2e/          # Tests E2E del shell
│   ├── nx.json                 # Configuración Nx del workspace
│   ├── tsconfig.base.json      # Configuración TypeScript base
│   └── package.json
│
└── mf_login/                   # Workspace del micro front-end de login
    ├── apps/
    │   ├── login/              # Aplicación remota de login
    │   │   ├── src/
    │   │   ├── module-federation.config.ts
    │   │   ├── webpack.config.ts
    │   │   └── project.json
    │   └── login-e2e/          # Tests E2E del login
    ├── nx.json                 # Configuración Nx del workspace
    ├── tsconfig.base.json      # Configuración TypeScript base
    └── package.json
```

### Archivos Clave de Configuración

#### Module Federation (`module-federation.config.ts`)
```typescript
// Configura cómo se comparten los módulos entre aplicaciones
// - Shell: Expone la shell como host
// - Login: Configura las rutas remotas para compartir
```

#### Webpack (`webpack.config.ts`)
```typescript
// Configuración personalizada del empaquetador
// Incluye Module Federation, alias de rutas, loaders
```

#### Tsconfig (`tsconfig.base.json`)
```json
{
  "compileOptions": {
    "paths": {
      "@shell/*": ["apps/shell/src/*"],
      "@login/*": ["apps/login/src/*"]
    }
  }
}
```

---

## 🧪 Testing

### Tests Unitarios (Jest)
```bash
# Ejecutar tests de la aplicación shell
npx nx test shell

# Ejecutar tests de la aplicación login
npx nx test login

# Ejecutar tests con cobertura
npx nx test shell --coverage

# Ejecutar tests en watch mode
npx nx test shell --watch
```

### Tests E2E (Cypress)
```bash
# Ejecutar tests E2E del shell
npx nx e2e shell-e2e

# Ejecutar tests E2E del login
npx nx e2e login-e2e

# Ejecutar tests E2E en modo interactivo
npx nx e2e shell-e2e --watch

# Headless mode (sin interfaz gráfica)
npx nx e2e shell-e2e --headed=false
```

---

## 🔍 Linting y Formateado

### Linting (ESLint)
```bash
# Lintear la aplicación shell
npx nx lint shell

# Lintear la aplicación login
npx nx lint login

# Lintear y fijar automáticamente los errores
npx nx lint shell --fix
```

### Formateado (Prettier)
```bash
# Formatear todos los archivos
npx prettier --write .

# O usar Nx para formatear
npx nx format:write
```

---

## 📊 Comandos Útiles de Nx

### Visualizar Dependencias
```bash
# Gráfico de dependencias del proyecto
npx nx graph

# Gráfico solo de las aplicaciones
npx nx graph --only-visible
```

### Ejecutar Múltiples Tareas
```bash
# Ejecutar tests de varios proyectos
npx nx run-many --targets=test --projects=shell,login

# Ejecutar build de varios proyectos
npx nx run-many --targets=build --projects=shell,login

# Ejecutar lint de todos los proyectos afectados
npx nx affected:lint
```

### Analizar el Proyecto
```bash
# Listar todos los proyectos disponibles
npx nx list

# Mostrar detalles de un proyecto
npx nx show project shell

# Ver tareas disponibles de un proyecto
npx nx show project shell --json | grep targets
```

### Caché de Nx
```bash
# Limpiar caché
npx nx reset

# Ver estadísticas del caché
npx nx nx cache status
```

---

## 🌐 Configuración de Puertos

Por defecto, el proyecto usa los siguientes puertos:

| Aplicación | Puerto Predeterminado |
|:-----------|:----------------------|
| Shell (Host) | 4200 |
| Login (Remote) | 4201 |

Para cambiar los puertos, modifica los archivos `project.json` de cada aplicación o ejecuta:
```bash
npx nx serve shell --port 3000
npx nx serve login --port 3001
```

---

## 🔐 Variables de Entorno

Crea archivos `.env` en las carpetas raíz de los workspaces según sea necesario:

```bash
# mf_host/.env
NX_API_URL=http://localhost:3000/api

# mf_login/.env
NX_LOGIN_API_URL=http://localhost:3000/api/auth
```

---

## 🐛 Troubleshooting

### Problema: "Command 'nx' not found"
```bash
# Instalar Nx globalmente
npm install -g nx

# O usar la versión local
npx nx --version
```

### Problema: Puerto ya está en uso
```bash
# Cambiar el puerto
npx nx serve shell --port 4300
```

### Problema: Caché corrupto
```bash
# Limpiar todo el caché
npx nx reset
npm install
```

### Problema: Módulos no se encuentran
```bash
# Reconstruir los nodos modulares
rm -rf node_modules
npm install
```

---

## 📚 Documentación Adicional

- [Documentación oficial de Nx](https://nx.dev)
- [Guía de Angular](https://angular.io/docs)
- [Module Federation en Nx](https://nx.dev/features/module-federation)
- [Jest Testing](https://jestjs.io/docs/getting-started)
- [Cypress E2E Testing](https://docs.cypress.io)

---

## 📝 Notas de Desarrollo

- El proyecto usa **WorkspaceLayout: "apps-libs"** típico de Nx
- Cada workspace (mf_host, mf_login) es independiente pero comparte herramientas
- La comunicación entre micro front-ends se realiza a través de Module Federation
- Los cachés de Nx aceleran significativamente los builds en monorepos

---

## 👥 Contribuciones

Para contribuir al proyecto:

1. Crear una rama feature: `git checkout -b feature/nombre-feature`
2. Hacer commit de cambios: `git commit -m 'Agregar feature'`
3. Hacer push a la rama: `git push origin feature/nombre-feature`
4. Abrir un Pull Request

---

## 📄 Licencia

Este proyecto está bajo la licencia **MIT**.

---

**Última actualización:** Febrero 2026  
**Versión del documento:** 1.0
