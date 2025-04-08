import fs from "fs";
import { resolve } from "path";

import upload from "@config/upload";

import { IStorageProvider } from "../IStorageProvider";

class LocalStorageProvider implements IStorageProvider {
  // async save(file: string, folder: string): Promise<string> {
  //   await fs.promises.rename(
  //     resolve(upload.tmpFolder, file),
  //     resolve(`${upload.tmpFolder}/${folder}`, file)
  //   );

  //   return file;
  // }

  async save(file: string, folder: string): Promise<string> {
    const folderPath = resolve(upload.tmpFolder, folder);

    // ✅ Garante que a pasta exista
    await fs.promises.mkdir(folderPath, { recursive: true });

    await fs.promises.rename(
      resolve(upload.tmpFolder, file),
      resolve(folderPath, file)
    );

    return file;
  }

  async delete(file: string, folder: string): Promise<void> {
    const filename = resolve(`${upload.tmpFolder}/${folder}`, file);

    try {
      await fs.promises.stat(filename);
    } catch {
      return;
    }

    await fs.promises.unlink(filename);
  }
}

export { LocalStorageProvider };
