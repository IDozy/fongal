
## 🐄 CONCURSOS GANADEROS
**CONCURSOS GANADEROS** es una plataforma web diseñada para el registro de participantes, puntuación, ordenamiento y cálculo de ganadores en tiempo real en concursos ganaderos. Nuestro objetivo es ofrecer una base de datos pública accesible para todos los asistentes a los concursos, con información actualizada en tiempo real y la capacidad de consultar estos datos posteriormente.

## 📌 Misión y Visión
**Misión**
Brindar una plataforma para el registro y gestión en tiempo real de concursos ganaderos, permitiendo a los organizadores y asistentes acceder a datos actualizados y realizar consultas posteriores, optimizando la experiencia en eventos ganaderos.

**Visión**
Convertirnos en un SaaS líder en la gestión de concursos ganaderos en Perú y a nivel internacional, con una base de datos robusta que incluya perfiles detallados de animales participantes y sus logros. Planeamos integrar las bases de datos de instituciones reconocidas como la ANCPCPP y el KENNEL CLUB.

## 🌟 Características del Sitio Web
**Base de Datos:** Gestión completa (CRUD) para ganado, incluyendo un catálogo paginado con atributos detallados de cada animal.
**Actualización en Tiempo Real:** Los datos de los concursos se actualizan en tiempo real para que los asistentes puedan seguir el progreso y los resultados desde cualquier dispositivo.
**Acceso Público:** Información accesible para todos los usuarios, permitiendo consultas tanto durante como después del evento.
**Gestión de Concursos:** Registro de participantes, cálculo de campeones, orden de mérito, y más.

## 🎯 Objetivos del Sitio Web
1. Facilitar la gestión de concursos ganaderos.
2. Registrar y organizar participantes y resultados de concursos.
3. Calcular campeones y orden de mérito de manera automatizada y precisa.

## 🚀 Secciones Principales del Sitio
**Nosotros:** Información sobre la plataforma y su equipo.
**Concursos:**
1. /concursos/2024/Fongal
2. /concursos/2024/Macro-Regional-Norte-ANCPCPP
**Participantes:** Registro y consulta de participantes.
**Ganadores:** Listado de campeones y resultados de concursos.

## 🛠️ Tecnologías Utilizadas
**Frontend:** Next.js, Tailwind CSS
**Backend:** Node.js con API REST
**Base de Datos:** Prisma y MongoDB
**Despliegue:** Vercel
**Librerías Adicionales:**
**Autenticación:** NextAuth (pendiente de revisión)
**Base de datos:** Prisma (conexión a MongoDB)

## 🌐 Servicios Externos y APIs
Actualmente, estamos en la fase de evaluación para integrar servicios externos. Puedes revisar los endpoints disponibles en el directorio /api.

## 🚧 Estado del Proyecto
El proyecto se encuentra en la Versión 2.0, con la primera versión ya probada en producción. Actualmente estamos en la fase de desarrollo inicial de la versión actual, enfocándonos en mejorar la accesibilidad y la optimización del sitio.

## Plan de Mejora
SEO: Implementar buenas prácticas de SEO para mejorar la visibilidad en motores de búsqueda.
Accesibilidad: Asegurar que el sitio sea accesible para todos los usuarios.
Integración de Google Analytics: Para medir el tráfico y mejorar la experiencia del usuario.
Velocidad de Carga: Optimización de recursos y código para mejorar el rendimiento.

## 👤 Créditos y Contribuciones
Desarrollado por el equipo **QUIPU**
1. Alex Yoel Huatay Casas
2. Jhon Jairo Raúl Vargas Malaver
3. Gerson Silva Calla
4. Josemartin Cabrera Vidal
**Cómo Contribuir**
Puedes contribuir abriendo issues en GitHub y enviando pull requests con tus propuestas de mejora.

## 📂 Estructura del Proyecto

```
/
├── .next/
├── app/
│   ├── actions/
│   ├── api/
│   ├── components/
│   ├── management/
│   ├── nosotros/
│   ├── participantes/
│   └── providers/
├── pages/
│   ├── api/
│   └── _document.js
├── prisma/
├── public/
├── styles/
├── hooks/
├── libs/
├── types/
├── .gitignore
├── LICENSE
├── README.md
├── next-env.d.ts
├── next.config.mjs
├── package.json
├── package-lock.json
├── postcss.config.mjs
├── tailwind.config.ts
├── tsconfig.json
└── vercel.json
```

## 📄 Licencia
Este proyecto está protegido bajo la MIT License.

