# Bsale-ecommerce frontend

Para poder iniciar el proyecto
Version of Node

```
v16.15.1
```

![Home](/img/home.png "HomePage")
Para poder iniciar o hacer cambios en los estilos, se necesita iniciar tailwindcss.

```terminal
npx tailwindcss -i ./style.css -o ./dist/output.css --watch
```

Para iniciar el proyecto se debe levantar el servidor backend que se encuentra en el siguiente repositorio: https://github.com/fabio4520/bsale-ecommerce-backend
Luego, es recomendable instalar la extensión de Github Live server.

![Home](/img/backend_levantado.png "backend_levantado")

## División de carpetas

- La aplicación se ha separado por componentes, pages, services y utils.
- Los componentes son aquellos renders que se pueden reutilizar, como por ejemplo el formulario para poder editar y crear productos y el navbar.
- La carpeta pages contiene todas las páginas que se van a renderear en el body.
- La carpeta servicios contiene los servicios que hace el fetch de la api.
- La carpeta utils contiene los listeners para el navbar.

La lógica para poder manejar los productos y las categorías es almacenar estos productos en una variable llamada STORE.
Así solo hacer fetch cuando se da click a cualquiera de los botones del navbar.

### Formulario

El formulario llama a un STORE.currentProduct. Esta variable obtiene un valor cuando el usuario selecciona el botón de editar producto.
Esto es para poder tener un componente reutilizable. Si el STORE.currentProduct existe, es porque el usuario está editando un producto, si no existe es porque está editando un producto nuevo.

## Edit Product

![Home](/img/edit.png "Edit Product")

## Add product

![Home](/img/new.png "Add product")

## Categories

![Home](/img/categories.png "Categories")

## Products filtered by category

![Home](/img/categories_prods.png "Products filtered by category")

Las respuestas json que se espera son:

### GET products query

GET /v1/products

```json
[
  {
    "id": 1,
    "name": "bebida energetica"
  },
  {
    "id": 2,
    "name": "pisco"
  }
]
```

### POST products

POST /api/v1/products
Retorna un status 201 con el cuerpo del nuevo producto creado.

```json
{
  "id": 105,
  "name": "New product",
  "price": 20,
  "url_image": "https://loremflickr.com/640/480",
  "discount": 20,
  "category": 2
}
```

### PATCH products

PATCH /api/v1/products/10
Si el producto se encuentra, retorna un status 200 con el cuerpo del producto editado.

```json
{
  "id": 10,
  "name": "New product - edited",
  "url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/artesanos8818.jpg",
  "price": 3990,
  "discount": 0,
  "category": 2
}
```

PATCH /api/v1/products/1
Si no se encuentra el producto para realizar el update el mensaje que retorna es el siguiente:

```json
{
  "message": "Product not found"
}
```

### DELETE products

DELETE /api/v1/products/1
Si se encuentra el producto, retorna un status 200 y el cuerpo del mensaje es el id que se eliminó.

```json
{
  "id": "10"
}
```

Si no se encuentra el producto para realizar el update el mensaje que retorna es el siguiente:

```json
{
  "message": "Product not found"
}
```
