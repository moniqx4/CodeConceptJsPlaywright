/// <reference types='codeceptjs' />
type steps_file = typeof import('./steps_file.js');
type CustomHelper = import('./CustomHelper');
type loginPage = typeof import('./loginPage');

declare namespace CodeceptJS {
  interface SupportObject { I: I, current: any, loginPage: loginPage }
  interface CustomLocators {
    'data-automation-id': { 'data-automation-id': string }
  }
  interface Methods extends Playwright, CustomHelper {}
  interface I extends ReturnType<steps_file> {}
  namespace Translation {
    interface Actions {}
  }
}
