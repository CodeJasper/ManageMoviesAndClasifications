const routesMovies = {
  name: "/peliculas",
  subRoutes: {
    list: "/lista",
    update: "/actualizar",
    register: "/registrar",
    delete: "/borrar",
  },
};

const routesClasifications = {
  name: "/clasificaciones",
  subRoutes: {
    list: "/lista",
    update: "/actualizar",
    register: "/registrar",
    delete: "/borrar",
  },
};

module.exports = {
  routesMovies,
  routesClasifications,
};
