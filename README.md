# Proyecto Frontend - Monorepo Nx con Module Federation

## 📋 Evaluación del Proyecto

Este es un proyecto **monorepo moderno** gestionado por **Nx** que implementa **Module Federation** para crear una arquitectura de micro front-ends escalable y profesional. El proyecto está dividido en múltiples workspaces independientes pero integrados:

### 🏗️ Workspaces Disponibles:

| Workspace | Descripción | Puerto | Tipo |
|:----------|:-----------|:-------|:-----|
| **mf_host** | Aplicación shell/host que actúa como contenedor principal | 4200 | Host/Shell |
| **mf_login** | Micro front-end remoto de autenticación | 4201 | Remoto |
| **mf_admin** | Micro front-end remoto de administración | 4202 | Remoto |

### Características Principales:
✅ Arquitectura de micro front-ends con Module Federation  
✅ Monorepo escalable con Nx v22  
✅ Angular 21.1 de última generación  
✅ TypeScript 5.9 con tipado estricto  
✅ Testing con Jest + Cypress  
✅ Linting con ESLint + Prettier  
✅ Webpack 5 optimizado  
✅ Tres módulos independientes integrados  

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

### 🚀 Inicio Rápido - Opción Recomendada

**Iniciar TODOS los repositorios simultáneamente (Host + Remotes):**

```bash
# Desde la raíz del proyecto (d:\Proyect\front)
npm install  # Si no lo has hecho aún

# Opción 1: Iniciar todos los servicios en paralelo
npx nx run-many --targets=serve --projects=shell,login,admin

# Opción 2: Terminal izquierda - Host
cd mf_host
npm install
npx nx serve shell

# Terminal derecha - Remotes
cd mf_login
npm install
npx nx serve login

# Otra terminal - Admin
cd mf_admin
npm install
npx nx serve admin
```

---

### 💻 Inicio por Workspace Individual

#### 1️⃣ **mf_host** (Shell/Host Principal - Puerto 4200)
```bash
cd mf_host
npm install
npx nx serve shell
```
✅ Disponible en: `http://localhost:4200`

#### 2️⃣ **mf_login** (Micro Front-end Login - Puerto 4201)
```bash
cd mf_login
npm install
npx nx serve login
```
✅ Disponible en: `http://localhost:4201`

#### 3️⃣ **mf_admin** (Micro Front-end Admin - Puerto 4202)
```bash
cd mf_admin
npm install
npx nx serve admin
```
✅ Disponible en: `http://localhost:4202`

---

### 🔄 Inicio Avanzado desde la Raíz

#### Servir Shell (Host) desde la raíz
```bash
npx nx serve shell --projects=mf_host
```

#### Servir todos los remotes desde la raíz
```bash
npx nx run-many --targets=serve --projects=shell,login,admin
```

#### Con cambios específicos en puerto
```bash
npx nx serve shell --port 3000
npx nx serve login --port 3001
npx nx serve admin --port 3002
```

---

### 📦 Construcción para Producción

#### Build individual
```bash
# Build del shell
npx nx build shell

# Build del login
npx nx build login

# Build del admin
npx nx build admin
```

#### Build de todos los proyectos
```bash
npx nx run-many --targets=build --projects=shell,login,admin
```

---

### 📋 Matriz de Comandos

| Acción | Comando | Resultado |
|:-------|:--------|:----------|
| **Host** | `cd mf_host && npm i && npx nx serve shell` | 🌐 http://localhost:4200 |
| **Login** | `cd mf_login && npm i && npx nx serve login` | 🔐 http://localhost:4201 |
| **Admin** | `cd mf_admin && npm i && npx nx serve admin` | ⚙️ http://localhost:4202 |
| **Todos** | `npx nx run-many --targets=serve --projects=shell,login,admin` | 🚀 Todos activos |

---

## ⚙️ Configuración

### Estructura del Proyecto

```
front/
├── mf_host/                    # Workspace del host/shell
│   ├── apps/
│   │   ├── shell/              # Aplicación shell principal (puerto 4200)
│   │   │   ├── src/
│   │   │   ├── module-federation.config.ts
│   │   │   ├── webpack.config.ts
│   │   │   └── project.json
│   │   └── shell-e2e/          # Tests E2E del shell
│   ├── nx.json                 # Configuración Nx del workspace
│   ├── tsconfig.base.json      # Configuración TypeScript base
│   └── package.json
│
├── mf_login/                   # Workspace del micro front-end de login
│   ├── apps/
│   │   ├── login/              # Aplicación remota de login (puerto 4201)
│   │   │   ├── src/
│   │   │   ├── module-federation.config.ts
│   │   │   ├── webpack.config.ts
│   │   │   └── project.json
│   │   └── login-e2e/          # Tests E2E del login
│   ├── nx.json                 # Configuración Nx del workspace
│   ├── tsconfig.base.json      # Configuración TypeScript base
│   └── package.json
│
└── mf_admin/                   # Workspace del micro front-end de administración
    ├── apps/
    │   ├── admin/              # Aplicación remota de admin (puerto 4202)
    │   │   ├── src/
    │   │   ├── module-federation.config.ts
    │   │   ├── webpack.config.ts
    │   │   └── project.json
    │   └── admin-e2e/          # Tests E2E del admin
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

### Puertos Predeterminados

| Aplicación | Workspace | Puerto | URL |
|:-----------|:----------|:-------|:----|
| **Shell (Host)** | mf_host | 4200 | http://localhost:4200 |
| **Login (Remote)** | mf_login | 4201 | http://localhost:4201 |
| **Admin (Remote)** | mf_admin | 4202 | http://localhost:4202 |

### Cambiar Puertos

Para cambiar los puertos, ejecuta:
```bash
# Cambiar puerto del shell
npx nx serve shell --port 3000

# Cambiar puerto del login
npx nx serve login --port 3001

# Cambiar puerto del admin
npx nx serve admin --port 3002
``` (Host/Shell)
NX_API_URL=http://localhost:3000/api
NX_ENVIRONMENT=development

# mf_login/.env (Módulo de Login)
NX_LOGIN_API_URL=http://localhost:3000/api/auth
NX_ENVIRONMENT=development

# mf_admin/.env (Módulo de Admin)
NX_ADMIN_API_URL=http://localhost:3000/api/admin
NX_ENVIRONMENT=development
```

### Variables Comunes

```env
# Desarrollo
NX_ENVIRONMENT=development
NX_API_URL=http://localhost:3000/api
NX_ENABLE_DEBUG=true

# Producción
NX_ENVIRONMENT=production
NX_A❌ Problema: "Command 'nx' not found"
```bash
# Opción 1: Instalar Nx globalmente
npm install -g nx

# Opción 2: Usar la versión local
npx nx --version

# Opción 3: Limpiar y reinstalar
rm -rf node_modules
npm install
npx nx --version
```

### ❌ Problema: Puerto ya está en uso
```bash
# Windows - Encontrar proceso que usa el puerto
netstat -ano | findstr :4200

# Matar el proceso (Windows)
taskkill /PID <PID> /F

# O simplemente cambiar el puerto
npx nx serve shell --port 4300
npx nx serve login --port 4301
npx nx serve admin --port 4302
```

### ❌ Problema: Caché corrupto de Nx
```bash
# Limpiar todo el caché
npx nx reset

# Reinstalar dependencias
rm -rf node_modules
npm install

# Reintentar
npx nx serve shell
```

### ❌ Problema: Module Federation no se carga
```bash
# Asegúrate de que todos los servidores estén corriendo
# Terminal 1
cd mf_host && npx nx serve shell

# Terminal 2
cd mf_login && npx nx serve login

# Terminal 3
cd mf_admin && npx nx serve admin

# Verifica los puertos en la configuración
cat mf_host/apps/shell/module-federation.config.ts
cat mf_login/apps/login/module-federation.config.ts
cat mf_admin/apps/admin/module-federation.config.ts
```

### ❌ Problema: Módulos no se encuentran
```bash
# Limpiar node_modules en todos los workspaces
rm -rf mf_host/node_modules
rm -rf mf_login/node_modules
rm -rf mf_admin/node_modules
rm -rf node_modules

---

## 🎯 Checklist de Inicio Rápido

- [ ] Clonar el repositorio
- [ ] Navegar a la raíz del proyecto (`d:\Proyect\front`)
- [ ] Instalar dependencias: `npm install`
- [ ] Abrir 3 terminales para los 3 servicios:
  - [ ] Terminal 1: `cd mf_host && npx nx serve shell` (4200)
  - [ ] Terminal 2: `cd mf_login && npx nx serve login` (4201)
  - [ ] Terminal 3: `cd mf_admin && npx nx serve admin` (4202)
- [ ] Verificar que todos se cargan en localhost sin errores
- [ ] Acceder a http://localhost:4200 en el navegador

---

**Última actualización:** Febrero 2026  
**Versión del documento:** 2

# O instalar en cada workspace
cd mf_host && npm install
cd ../mf_login && npm install
cd ../mf_admin && npm install
```

### ❌ Problema: Error de compilación TypeScript
```bash
# Limpiar tipos compilados
find . -type d -name ".angular" -exec rm -rf {} +
find . -type d -name "dist" -exec rm -rf {} +

# Reconstruir
npx nx reset
npm install
npx nx build shell
```

### 💡 Tips para Debugging

```bash
# Ver el estado de todos los proyectos
npx nx show projects

# Ver qué proyectos han sido afectados
npx nx affected:lint

# Ver el gráfico de dependencias
npx nx graph

# Ejecutar en modo verbose
NX_VERBOSE_LOGGING=true npx nx serve she y fijar automáticamente los errores
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
