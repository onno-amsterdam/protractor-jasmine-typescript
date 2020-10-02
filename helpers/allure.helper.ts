import { browser } from 'protractor';

declare const allure: any;

export function AllureStepLogger(parts: TemplateStringsArray, ...paramsIndices: number[]) {
  return (target: any, key: string | symbol, descriptor: TypedPropertyDescriptor<any>) => {
    const originalFunction = descriptor.value;
    descriptor.value = async function(...args: any[]) {
      const originalContext = this;
      const message = parts
        .map((part, index) => {
          const paramIndex = paramsIndices[index];
          const arg = paramIndex !== undefined ? args[paramIndex] : '';

          return part + String(arg);
        })
        .join('');

      await browser.logger.info(`   ${message}`);

      // when running cucumber scenarios
      if (browser.params.ignoreAllure) {
        return originalFunction.apply(originalContext, args);
      }

      const wrappedAllureStep = allure.createStep(message, async () => {
        return originalFunction.apply(originalContext, args);
      });

      return wrappedAllureStep(...args);
    };

    return descriptor;
  };
}
