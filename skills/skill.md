---
name: adicionar-endpoint-api
description: Implementa endpoints de consulta en una API existente a partir de un diagrama entidad-relación (DER) y una descripción de la información requerida. Modifica el backend respetando su arquitectura, acceso por usuario y convenciones; no se limita a generar una guía de implementación.
---

# Adicionar un endpoint a un API exixtente

## Resultado esperado 
Implementa el endpoint solicitado mediante cambios concretos en el backend y verifica su comportamiento. Usa el DER para comprender los datos y el código existente para decidir cómo integrarlos. Entrega un resumen en el chat con la ruta, los parámetros, los archivos modificados y las verificaciones realizadas.
## Entradas 
- DER: imagen adjunta o ruta a una imagen, SQL de definición de tablas, DBML u otra representación legible del esquema.
- Información requerida: descripción en lenguaje natural de los datos que debe devolver el endpoint y sus filtros.
- Backend: ubicación del proyecto cuando no sea inequívoca a partir del contexto.
- Opcionalmente: ruta HTTP, campos de respuesta, orden, paginación y comportamiento ante recursos inexistentes.

Aprovecha los datos ya proporcionados en la conversación. Si falta el DER, no puede leerse una relación necesaria o hay varias copias del backend sin una selección clara, solicita únicamente la aclaración que impide continuar esa parte. Avanza mientras tanto en la inspección independiente. Resuelve decisiones rutinarias usando las convenciones verificadas del proyecto.
## 1. Identificar el Backend y sus convenciones
Lee las instrucciones aplicables del repositorio y verifica los cambios locales antes de editar. Trabaja en la copia del backend indicada; no mezcles archivos de proyectos con nombres similares.

Busca un endpoint de consulta comparable y sigue su recorrido completo: montaje del router, ruta, controlador, validación, servicio, acceso a datos y respuesta. Identifica también autenticación, contexto de usuario, manejo de errores y comandos de comprobación.

Cuando estén disponibles para el proyecto, prioriza las herramientas del grafo de código: `search_graph`, `trace_path`, `get_code_snippet`, `query_graph` y `get_architecture`. Si el proyecto no está indexado o los resultados son insuficientes, usa búsquedas locales enfocadas. No indexes ni modifiques la configuración del proyecto solo para realizar esta consulta.

Adapta la implementación a las capas existentes. No presupongas Express, MySQL, un ORM específico ni que siempre habrá cuatro archivos que modificar. Conserva los nombres reales de archivos, el sistema de módulos y las firmas que deban mantenerse compatibles.
## 2, Interpretar el DER y contrastarlo 

## 3. Definir el contrato de consulta 

## 4. Implementar el acceso a los datos 

## 5. Conectar el endpoint

## 6. Verificar y entregar 
