import express from 'express';
import cors  from 'cors';
import productosRoutes from './routes/productos-routes.js';
import marcasRoutes from './routes/marcas-routes.js';
import objetosRoutes from './routes/objetos-routes.js';
import provinciaRoutes from './routes/geolocalidad/provincia-routes.js';
import departamentoRoutes from './routes/geolocalidad/departamento-routes.js';
import distritoRoutes from './routes/geolocalidad/distrito-routes.js';
import ciudadRoutes from './routes/geolocalidad/ciudad-routes.js';
import paisRoutes from './routes/geolocalidad/pais-routes.js';
import usersRoutes from './routes/users-routes.js';

const app = express();
app.use(cors());
app.use(express.json());
app.use(productosRoutes,
        marcasRoutes, 
        objetosRoutes,
        provinciaRoutes,
        departamentoRoutes,
        distritoRoutes,
        ciudadRoutes,
        paisRoutes,
        usersRoutes
        );
export default app;
