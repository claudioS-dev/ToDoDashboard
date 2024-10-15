# TODO Dashboard APP

<div align="center">

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

📅 **[Ver Demo en Vivo](https://todo-dashboard.deno.dev/)** 📅

_Gestiona tus tareas y eventos con facilidad_

</div>

---

## Descripción del Proyecto

Esta aplicación de React permite a los usuarios gestionar tarjetas de tareas o eventos. Los usuarios pueden ver, añadir, editar y eliminar tarjetas, cada una con un título, descripción, fecha de inicio y progreso. La aplicación también incluye un calendario para seleccionar fechas fácilmente.

## Características Principales

- 📝 Creación y edición de tarjetas de tareas
- 🗑️ Eliminación de tarjetas
- 📅 Calendario integrado para selección de fechas
- 📊 Seguimiento del progreso de las tareas
- 🖼️ Interfaz de usuario intuitiva y responsiva

## Estructura del Proyecto

El proyecto está compuesto por los siguientes componentes principales:

1. `Home.jsx`: Componente principal que orquesta la aplicación.
2. `Card.jsx`: Componente para mostrar una tarjeta individual.
3. `AddCard.jsx`: Componente para añadir una nueva tarjeta.
4. `AddCardModal.jsx`: Modal para crear una nueva tarjeta.
5. `EditCardModal.jsx`: Modal para editar una tarjeta existente.
6. `Calendar.jsx`: Componente de calendario para seleccionar fechas.

## Componentes en Detalle

### Home.jsx

Este es el componente principal que maneja el estado global de la aplicación y coordina las interacciones entre los demás componentes.

#### Funcionalidades principales:

- `fetchCards()`: Obtiene las tarjetas del servidor.
- `handleDeleteCard(id)`: Elimina una tarjeta.
- `handleEditCard(id)`: Abre el modal de edición para una tarjeta.
- `handleSaveEdit(editedCard)`: Guarda los cambios de una tarjeta editada.
- `handleAddCard(newCard)`: Añade una nueva tarjeta.
- `handleDateSelect(date)`: Maneja la selección de fecha en el calendario.

### Card.jsx

Este componente representa una tarjeta individual en la interfaz.

#### Propiedades:

- `id`: Identificador único de la tarjeta.
- `image`: URL de la imagen (opcional).
- `title`: Título de la tarjeta.
- `description`: Descripción de la tarjeta.
- `date`: Fecha de inicio.
- `progress`: Progreso de la tarea (0-10).
- `onDelete`: Función para eliminar la tarjeta.
- `onEdit`: Función para editar la tarjeta.

### AddCard.jsx

Un componente simple que muestra un botón para añadir una nueva tarjeta.

#### Propiedades:

- `onAdd`: Función que se ejecuta al hacer clic para añadir una nueva tarjeta.

### AddCardModal.jsx

Modal que se muestra para añadir una nueva tarjeta.

#### Funcionalidades principales:

- Maneja el estado del formulario para una nueva tarjeta.
- `handleChange(e)`: Actualiza el estado del formulario.
- `handleSubmit(e)`: Envía la nueva tarjeta para ser añadida.

### EditCardModal.jsx

Modal que se muestra para editar una tarjeta existente.

#### Funcionalidades principales:

- Maneja el estado del formulario para editar una tarjeta.
- `handleChange(e)`: Actualiza el estado del formulario.
- `handleSubmit(e)`: Envía la tarjeta editada para ser actualizada.

### Calendar.jsx

Componente de calendario que utiliza la biblioteca MUI (Material-UI) para mostrar y seleccionar fechas.

#### Funcionalidades principales:

- `handleDateChange(newDate)`: Maneja la selección de una nueva fecha y la pasa al componente padre.

## Flujo de Datos

1. `Home.jsx` obtiene las tarjetas del servidor y las almacena en su estado.
2. Las tarjetas se pasan como props a los componentes `Card.jsx` para su visualización.
3. Cuando se hace clic en "Añadir Tarjeta", se abre `AddCardModal.jsx`.
4. Al guardar una nueva tarjeta, `AddCardModal.jsx` llama a `handleAddCard` en `Home.jsx`.
5. Para editar, se abre `EditCardModal.jsx` con los datos de la tarjeta seleccionada.
6. Al guardar los cambios, `EditCardModal.jsx` llama a `handleSaveEdit` en `Home.jsx`.
