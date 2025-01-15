import { Router } from "express";
import { scrapeDoctors } from '../controllers/doctor-controllers.js';


const docRoutes = Router();

docRoutes.post('/scrape', scrapeDoctors)

export default docRoutes;
