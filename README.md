# AngularLogin

Aplicación para probar sistema de login.

Estructura del sitio: 
.- Un página de inicio.
.- Un página protegida mediante guard.
.- La página de login

Hay que crear las rutas y el menú.
Añadimos el componente <app-router> en el html del módulo.

En principio, a la página protegida se accede sin problemas.
Debemos añadir el guard.
.- En el guard seleccionamos "canActivate" para especificar en qué condiciones se da permiso para activar la ruta.
.- Ahora, en el routing-module, debemos especificar, en la ruta a la página restringida, que queremos asignar el guard, mediante canActivate.

En el Guard especificamos las condiciones y las páginas de redirección.
.- Para poder hacer uso de la navegación, debemos importar Router.
