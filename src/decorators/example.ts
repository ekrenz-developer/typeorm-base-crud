export function YourMixin<T extends YourConstructor>({ Base }: MixinProps<T>) {
  class Mixin extends Base {
    // You can define other decorators here
    async method() {
      // your logic
    }
  }

  return Mixin;
}

// Define your constructor type.
export type Constructor<T, Arguments extends unknown[] = any[]> = new (
  ...arguments_: Arguments
) => T;
export type YourConstructor<T = {}> = Constructor<T>;

// Define your interface with the same name of your decorator to enable declaration merging.
export interface YourDecorator {
  method(): Promise<void>;
}

// Define your decorator
export function YourDecorator(options = {}) {
  return function <T extends YourConstructor>(Base: T) {
    // You can define other decorators here
    class YourClass extends YourMixin(Base) {}

    // Apply original class descriptors to the new class
    const ownPropertyDescriptors = Object.getOwnPropertyDescriptors(Base);

    const { prototype, ...descriptors } = ownPropertyDescriptors;

    Object.defineProperties(YourClass, descriptors);

    return YourClass as unknown as T;
  };
}

// Use your decorator and define your class interface that extends the decorator interface
// for declaration merging types.
// interface Service extends YourDecorator {}
// @YourDecorator({})
// class Service {}
