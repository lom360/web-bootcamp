import { LikeComponents } from "./like.component";

let component = new LikeComponents(10, true);
component.onClick();
console.log(`likesCount:  ${component.likesCount}, isSelected: ${component.isSelected}`);