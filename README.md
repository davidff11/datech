# DaTech - TickEat Landing Page

Página web informativa profesional para contratar los servicios de DaTech y su aplicación TickEat.

## 📋 Descripción

Esta es una landing page moderna y profesional diseñada para presentar TickEat, una aplicación de gestión de comandas diseñada específicamente para bares y restaurantes. La página utiliza los colores del logo de DaTech (azul y naranja) y está completamente responsive.

## 🎨 Características

- **Diseño Moderno**: Interfaz limpia y profesional con gradientes azul-naranja
- **Totalmente Responsive**: Adaptable a todos los dispositivos (móvil, tablet, desktop)
- **Navegación Suave**: Scroll suave entre secciones
- **Formulario de Contacto**: Formulario funcional para solicitar información
- **Animaciones**: Efectos visuales al hacer scroll
- **Código Limpio**: Código bien comentado y fácil de modificar

## 📁 Estructura de Archivos

```
datech-landing/
├── index.html      # Estructura HTML de la página
├── styles.css      # Estilos CSS con variables y diseño responsive
├── script.js       # Funcionalidad JavaScript interactiva
└── README.md       # Este archivo
```

## 🚀 Cómo Usar

1. **Abrir la página**: Simplemente abre el archivo `index.html` en tu navegador
2. **Servidor local (recomendado)**: Para mejor rendimiento, usa un servidor local:
   ```bash
   # Con Python
   python -m http.server 8000
   
   # Con Node.js (http-server)
   npx http-server
   ```
3. **Acceder**: Abre `http://localhost:8000` en tu navegador

## 🎨 Personalización

### Colores

Los colores se pueden modificar fácilmente en `styles.css` en la sección de variables:

```css
:root {
    --color-blue-primary: #1E40AF;
    --color-orange-primary: #F97316;
    /* ... más colores ... */
}
```

### Contenido

- **Texto**: Edita directamente en `index.html`
- **Secciones**: Añade o elimina secciones en el HTML
- **Formulario**: El formulario está en la sección de contacto. Para conectarlo a un backend, modifica `script.js`

### Formulario de Contacto

Para conectar el formulario a un backend real, modifica la función de envío en `script.js` (líneas comentadas al final del archivo).

## 📱 Secciones de la Página

1. **Hero**: Sección principal con llamada a la acción
2. **Sobre TickEat**: Explicación de la aplicación
3. **Características**: Funcionalidades principales
4. **Ventajas**: Por qué elegir TickEat
5. **Contacto**: Formulario para solicitar información
6. **Footer**: Información de contacto y enlaces

## 🔧 Tecnologías Utilizadas

- HTML5
- CSS3 (con variables CSS, Grid, Flexbox)
- JavaScript (Vanilla JS, sin dependencias)
- Google Fonts (Inter)

## 📝 Notas

- El formulario actualmente muestra una alerta al enviar. Para producción, conecta con tu backend.
- Los datos de contacto (email, teléfono) son ejemplos. Actualízalos con los datos reales.
- El logo es una representación CSS del logo de DaTech. Puedes reemplazarlo con una imagen real.

## 📄 Licencia

Este proyecto es parte del TFG de gestión de comandas TickEat.

---

**DaTech** - La solución más puntera para la gestión de comandas en hostelería.
