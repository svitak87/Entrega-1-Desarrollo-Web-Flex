# Mi Portafolio

Proyecto desarrollado con **HTML**, **CSS**, **Bootstrap** y **Sass** que presenta mi portafolio personal, incluyendo información sobre mí, habilidades, proyectos y formas de contacto.

## 🚀 Tecnologías utilizadas

- HTML
- CSS
- Bootstrap
- Sass

## ⚙️ Instalación y ejecución

1. Clonar el repositorio:

```bash
git clone https://github.com/svitak87/Entrega-1-Desarrollo-Web-Flex.git
```

2. Ingresar al proyecto:

```bash
cd Entrega-1-Desarrollo-Web-Flex
```

3. Instalar las dependencias:

```bash
npm install
```

4. Iniciar el compilador de Sass en modo observación:

```bash
npm run sass
```

Este comando compilará automáticamente el archivo `scss/main.scss` hacia `styles/styles.css` cada vez que se guarden cambios.

5. Abrir el proyecto con **Live Preview** (Visual Studio Code):

- Abrir el proyecto en Visual Studio Code.
- Hacer clic derecho sobre `index.html`.
- Seleccionar **Show Preview** o **Open with Live Preview**.
- El navegador se actualizará automáticamente al guardar los cambios.

## 🌐 Demo

Puedes ver el proyecto en línea aquí:

**GitHub Pages:**  
https://svitak87.github.io/Entrega-1-Desarrollo-Web-Flex/index.html

## 📸 Vista previa

![Vista previa del proyecto](./assets/vista-previa.png)

## 📁 Estructura del proyecto

```text
Entrega-1-Desarrollo-Web-Flex/
│
├── assets/
│   ├── logo.png
│   ├── renné-renné-le-filmer.png
│   └── vista-previa-portafolio.png
│
├── pages/
│   ├── contacto.html
│   ├── proyectos.html
│   ├── servicios.html
│   └── sobreMi.html
│
├── script/
│   └── script.js   
│ 
├── scss/
│   ├── base/
│   │   ├── _base.scss
│   │   └── _typography.scss
│   │
│   ├── components/
│   │   └── _services.scss
│   │
│   ├── layout/
│   │   ├── _carousel.scss
│   │   ├── _contact.scss
│   │   ├── _footer.scss
│   │   ├── _header.scss
│   │   ├── _image.scss
│   │   └── _skills.scss
│   ├── mediaQ/
        ├── _mediaQ.scss
│   ├── utilities/
│   │   ├── _mixins.scss
│   │   └── _variables.scss
│   │
│   └── main.scss
│
├── styles/
│   ├── styles.css
│   └── styles.css.map
│
├── package.json
├── index.html
├── package-lock.json
├── .gitignore
└── README.md
```

## 📌 Características

- Diseño responsive.
- Estructura semántica con HTML.
- Estilos organizados con Sass mediante arquitectura de parciales.
- Bootstrap para componentes y sistema de grillas.
- Fácil de personalizar y ampliar.

## 👨‍💻 Autor

Hecho a mano con ❤️ por **Óscar**.