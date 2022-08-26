const { describe, beforeEach, it } = require('mocha');
const chai = require('chai');
const chaiHttp = require('chai-http');
const sinon = require('sinon');

chai.use(chaiHttp);
const { expect } = chai;

const studentController = require('../../controllers/studentController');
const studentService = require('../../services/studentServices');

beforeEach(sinon.restore);
describe('ROUTE POST /student', () => {
  const response = {};
  const request = {};

  it('When student is successfully created, it returns status 201', async () => {
    request.body = {};
    response.status = sinon.stub().returns(response);
    response.json = sinon.stub().returns(response);

    sinon.stub(studentService, 'create').resolves({});
    await studentController.create(request, response);

    expect(response.status.calledWith(201)).to.be.equal(true);
    expect(response.json.calledWith({ message: 'Student successfully registered!' })).to.be.equal(true);
  });
});

describe('ROUTE GET /students', () => {
  const response = {};
  const request = {};

  it('List all students, returns status 200', async () => {
    request.body = {};
    response.status = sinon.stub().returns(response);
    response.json = sinon.stub().returns(response);

    sinon.stub(studentService, 'getAll').resolves([]);
    await studentController.getAll(request, response);

    expect(response.status.calledWith(200)).to.be.equal(true);
    expect(response.json.calledWith([])).to.be.equal(true);
  });
});

describe('ROUTE PATCH /student/:id', () => {
  const response = {};
  const request = {};

  it('Update student data with 200 status and success message', async () => {
    request.body = {};
    request.params = { id: 'abcd' };
    response.status = sinon.stub().returns(response);
    response.json = sinon.stub().returns(response);

    sinon.stub(studentService, 'editStudent').resolves({});
    await studentController.editStudent(request, response);
    expect(response.status.calledWith(200)).to.be.equal(true);
    expect(response.json.calledWith({
      message: 'Data updated successfully',
    })).to.be.equal(true);
  });
});

describe('ROUTE DELETE /student/:id', () => {
  const response = {};
  const request = {};

  it('Deletes a student and returns status 204', async () => {
    request.params = { id: 'abcd' };
    response.status = sinon.stub().returns(response);
    response.json = sinon.stub().returns(response);
    response.end = sinon.stub().returns(response);

    sinon.stub(studentService, 'removeStudent').resolves({});
    await studentController.removeStudent(request, response);
    expect(response.status.calledWith(204)).to.be.equal(true);
  });
});
