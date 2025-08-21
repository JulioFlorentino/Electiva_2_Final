# Hola Mundo React 🚀

Aplicación web **Hola Mundo** desarrollada con **React y Vite**, con despliegue en **Docker** y **GitHub Pages**, incluyendo **pruebas unitarias** y **CI/CD con GitHub Actions**.

---

**Pagina en vivo**  
[GitHub](https://julioflorentino.github.io/Electiva_2_Final/)

## 📌 Características

- Proyecto con **React + Vite** moderno y ligero.
- Pruebas unitarias con **Vitest + Testing Library**.
- Dockerizado para producción con **Nginx**.
- Despliegue automático en **GitHub Pages**.
- CI/CD configurado con **GitHub Actions**:
  - Ejecuta tests automáticamente.
  - Build de la aplicación.
  - Publica imagen Docker en Docker Hub.
  - Publica la app en GitHub Pages.

---

## 🚀 Requisitos

- Node.js ≥ 20
- npm ≥ 9
- Docker (opcional, para despliegue en contenedor)
- GitHub account

---

## 🛠️ Instalación

Crea un repositorio en Github con el nombre que quieras luego clona tu repositorio remoto:

```bash
git clone https://github.com/TU_USUARIO/hola-mundo-react.git
cd hola-mundo-react
```

Instala dependencias:

```bash
npm install
```

Levanta la aplicación en desarrollo:

```bash
npm run dev
```

Abre tu navegador en `http://localhost:5173`.

---

## ✅ Pruebas Unitarias

Para ejecutar los tests:

```bash
npm test
```

---

## 🐳 Docker

### Construir imagen:

```bash
docker build -t hola-mundo-react .
```

### Ejecutar contenedor:

```bash
docker run -p 8080:80 hola-mundo-react
```

Abre `http://localhost:8080` para ver la app corriendo en Nginx.

---

## 📦 GitHub Pages

### Configuración en `package.json`

```json
"homepage": "https://TU_USUARIO.github.io/REPO",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

### Desplegar manualmente

```bash
npm run deploy
```

La app estará disponible en:

```
https://TU_USUARIO.github.io/REPO
```

---

## ⚙️ GitHub Actions (CI/CD)

### 1️⃣ Docker workflow (`ci-docker.yml`)

- Ejecuta pruebas.
- Build de la app.
- Publica imagen Docker en Docker Hub.

### 2️⃣ GitHub Pages workflow (`deploy-gh-pages.yml`)

- Ejecuta pruebas.
- Build de la app.
- Publica la carpeta `dist/` en GitHub Pages.

Ambos workflows pueden coexistir sin conflictos.

---

## 📚 Tecnologías usadas

- React 18
- Vite 7
- Vitest + Testing Library
- Docker + Nginx
- GitHub Actions
- GitHub Pages

---

## 👨‍💻 Autor

**Julio Florentino**  
[GitHub](https://github.com/JulioFlorentino)
