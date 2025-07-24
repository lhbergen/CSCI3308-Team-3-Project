/*
  @file user.test.js
  @description: Tests for the user model, ensuring it can create users and handle basic operations
*/

const { expect } = require('chai');
const { createUser } = require('../src/models/userModel.js');
const db = require('../src/db.js');

describe('User Model', function () {

  this.timeout(10000); // Allow time for DB operations

  let testUser;

  it('should create a user with username, email, and hashed password', async () => {
    testUser = await createUser({
      username: 'unit_user',
      email: 'unit_user@example.com',
      password_hash: 'hashed_password_123'
    });

    expect(testUser).to.have.property('user_id');
    expect(testUser.username).to.equal('unit_user');
    expect(testUser.email).to.equal('unit_user@example.com');
    expect(testUser.privilege).to.be.a('string'); // or whatever type you expect
    expect(new Date(testUser.created_at)).to.be.a('date');

  });

});
