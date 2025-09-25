import { Model, Optional } from 'sequelize';
import { ISight } from "../types/types";
interface SightCreationAttributes extends Optional<ISight, "sight_id"> {
}
export interface SightInstance extends Model<ISight, SightCreationAttributes>, ISight {
}
declare const Sight: import("sequelize").ModelCtor<SightInstance>;
export { Sight };
//# sourceMappingURL=index.d.ts.map