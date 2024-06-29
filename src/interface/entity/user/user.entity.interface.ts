import { BaseEntityInterface } from "src/interface/abstract/entity/base.entity.interface";

export interface UserEntityInterface extends BaseEntityInterface {
    email: string;
    password: string;
    mobile: string;
}