import { instanceToInstance } from "class-transformer";

import { IUserResponseDTO } from "../dtos/IUserResponseDTO";
import { User } from "../infra/typeorm/entities/User";

class UserMap {
  static toDTO(user: User): IUserResponseDTO {
    return instanceToInstance(user);
  }
}

export { UserMap };

// import { classToClass } from "class-transformer";

// import { IUserResponseDTO } from "../dtos/IUserResponseDTO";
// import { User } from "../infra/typeorm/entities/User";

// class UserMap {
//   static toDTO({
//     email,
//     name,
//     id,
//     avatar,
//     driver_license,
//     avatar_url,
//   }: User): IUserResponseDTO {
//     const user = classToClass({
//       email,
//       name,
//       id,
//       avatar,
//       driver_license,
//       avatar_url,
//     });
//     return user;
//   }
// }

// // UserMap.toDTO({}:user) => return user filtered info

// export { UserMap };
