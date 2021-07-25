import { container } from "tsyringe";
import { IDateProvider } from "./DateProvider/IDateProvider";
import { DayjsDateProvider } from "./DateProvider/implementations/DatejsDateProvider";







container.registerSingleton<IDateProvider>(
    "DayjsDateProvider",
    DayjsDateProvider
)

