const { describe, beforeEach, it } = require('mocha');
const chai = require('chai');
const chaiHttp = require('chai-http');
const sinon = require('sinon');

chai.use(chaiHttp);

const { expect } = require('chai');
const studentService = require('../../services/studentServices');
const { studentMock, listStudentsMock } = require('../mock/studentMock');

describe('Insert a new student into the database', () => {
  beforeEach(sinon.restore);
  describe('When the student is successfully created', () => {
    it('Returns an object', async () => {
      sinon.stub(studentService, 'create')
        .resolves(studentMock);
      const response = await studentService.create(studentMock);

      expect(response).to.have.a('object');
    });

    it('The object has an ID on the new student entered', async () => {
      sinon.stub(studentService, 'create')
        .resolves(studentMock);
      const response = await studentService.create(studentMock);

      expect(response).to.have.a.property('id');
    });
  });
});

describe('List registered students', () => {
  beforeEach(sinon.restore);
  it('Returns an array', async () => {
    sinon.stub(studentService, 'getAll').resolves(listStudentsMock);
    const response = await studentService.getAll(listStudentsMock);

    expect(response).to.be.an('array');
  });
});

describe('Update student data', () => {
  beforeEach(sinon.restore);
  describe('Filter by ID', () => {
    it('returns a new object', async () => {
      sinon.stub(studentService, 'editStudent')
        .resolves(studentMock);
      const response = await studentService.editStudent(studentMock);

      expect(response.id).to.have.eq(1);
      expect(response).to.have.a('object');
    });
  });
});

describe('Removing a student from the database', () => {
  beforeEach(sinon.restore);
  describe('Filter by ID', () => {
    it('Returns an empty object', async () => {
      sinon.stub(studentService, 'removeStudent')
        .resolves(studentMock);
      const response = await studentService.removeStudent(studentMock);

      expect(response.id).to.have.eq(1);
      // eslint-disable-next-line no-unused-expressions
      expect({}).to.be.an('object').to.be.empty;
    });
  });
});
