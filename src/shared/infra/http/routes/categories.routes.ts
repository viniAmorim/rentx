import { Router } from "express";
import multer from "multer";

import { CreateCategoryController } from "@modules/cars/useCases/createCategory/CreateCategoryController";
import { ImportCategoryController } from "@modules/cars/useCases/importCategory/ImportCategoryController";
import { ListCategoriesController } from "@modules/cars/useCases/listCategories/ListCategoriesController";

import { ensureAdmin } from "../middleware/ensureAdmin";
import { ensureAuthenticated } from "../middleware/ensureAuthenticated";

const categoriesRoutes = Router();

const upload = multer({
  dest: "./tmp",
});

const createCategoryController = new CreateCategoryController();
const importCategoryController = new ImportCategoryController();
const listCategoriesController = new ListCategoriesController();

categoriesRoutes.post(
  "/",
  ensureAuthenticated,
  ensureAdmin,
  createCategoryController.handle.bind(createCategoryController)
);

categoriesRoutes.get("/", listCategoriesController.handle.bind(listCategoriesController));

categoriesRoutes.post(
  "/import",
  ensureAuthenticated,
  ensureAdmin,
  upload.single("file"),
  importCategoryController.handle.bind(importCategoryController)
);

export { categoriesRoutes };
