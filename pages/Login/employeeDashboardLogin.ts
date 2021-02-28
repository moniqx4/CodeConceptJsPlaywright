let I;

export default {

  _init() {
    I = actor();
  },

  fields: {
    companyId: 'CompanyAlias',
    email: 'Username',
    password: 'Password'
  },
  loginButton: 'Login',

  sendForm(companyId,email, password) {
    I.fillField(this.fields.email, 'tester@testapp.com');
    I.fillField(this.fields.password, 'test');
    I.click(this.loginButton)
  }
}