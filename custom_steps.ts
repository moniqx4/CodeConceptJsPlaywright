export default function() {
    return actor({

        login: function(companyAlias,email, password) {
          this.fillField('CompanyId', companyAlias);
          this.fillField('Email', email);
          this.fillField('Password', password);
          this.click('Login');
        }
      });
}