// eslint-disable-next-line @typescript-eslint/ban-types
export type ContollerConstructor<T = {}> = Constructor<T>;

export function ControllerMixin<T extends ContollerConstructor>(Base: T) {
  class Controller extends Base {
    // You can define other decorators here
    // async create(): Promise<TResponse> {
    //   // your logic
    // }

    async create(payload: any): Promise<any> {
      try {
        // const response = await this.schedulerOperationService.create(payload);
        return true;
      } catch (e) {
        throw e;
      }
    }
    // @ApiOperation({ summary: 'create' })
    // @Version('2')
    // @UseGuards(JwtAuthGuard)
    // @Post()
    // async create(
    //   @Body(IsTaskIdValidationBodyPipe, IsTypeIdValidationBodyPipe)
    //   payload: SchedulerBodyDto,
    // ): Promise<SchedulerResponseDto> {
    //   try {
    //     this.loggerService.log(`${this.className}.create`);
    //     const response = await this.schedulerOperationService.create(payload);
    //     return response;
    //   } catch (e) {
    //     this.loggerService.error(
    //       `${this.className}.create error: ${JSON.stringify(e)}`,
    //     );
    //     throw e;
    //   }
    // }
  }

  return Controller;
}

// Define your constructor type.
export type Constructor<T, Arguments extends unknown[] = any[]> = new (
  ...arguments_: Arguments
) => T;
// export type YourConstructor<T = {}> = Constructor<T>;

// Define your interface with the same name of your decorator to enable declaration merging.
export interface YourDecorator {
  method(): Promise<void>;
}

export interface BaseCrudControllerOptionsInterface<TOperationService = any> {
  operationService?: TOperationService;
}

export class BaseCrudControllerOptionsDto<TOperationService = any>
  implements BaseCrudControllerOptionsInterface
{
  operationService?: TOperationService;

  constructor(arguments_: BaseCrudControllerOptionsDto) {
    Object.assign(this, arguments_);
  }
}

// Define your decorator
export function BaseCrudController(
  options: BaseCrudControllerOptionsDto = new BaseCrudControllerOptionsDto({
    operationService: {},
  })
) {
  return function <T extends ContollerConstructor>(Base: T) {
    // You can define other decorators here
    class Controller extends ControllerMixin(Base) {}

    // Apply original class descriptors to the new class
    const ownPropertyDescriptors = Object.getOwnPropertyDescriptors(Base);

    const { prototype, ...descriptors } = ownPropertyDescriptors;

    Object.defineProperties(Controller, descriptors);

    return Controller as T;
  };
}

// Use your decorator and define your class interface that extends the decorator interface
// for declaration merging types.
// interface Service extends YourDecorator {}
// @YourDecorator({})
// class Service {}
