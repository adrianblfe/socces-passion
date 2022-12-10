# soccer-passion
## Configuración del proyecto
Primero instala la s dependencias del proyecto:
```
npm install
```
Ahora necesitas obtener el auth-token de [FutDB](https://futdb.app/) para poder hacer las peticiones a la API.

Una vez lo hayas obtenido, debes crear un fichero de variables de entorno, para eso hay un ejemplo en la raíz del proyecto llamando **.env.example**, puedes renombrar el mismo a **.env.local** o crear una copia con dicho nombre.

Y finalmente, copia el auth-token de FutDB y pegalo como valor en la variable de entorno ya creada, se muestra un ejemplo de como debería quedar:
```
VUE_APP_FUTDB_TOKEN=fsd890sd-8989-087d-bg89-54528e56bg23
```

## Compila y arranca el proyecto
Y por último, solamente arranca el proyecto con el siguiente comando.
```
npm run serve
```