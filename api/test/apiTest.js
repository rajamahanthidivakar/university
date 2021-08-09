"use strict";

const chai = require("chai");
const server = require("../index");
const expect = chai.expect;
const chaiHttp = require("chai-http");
chai.use(chaiHttp);

describe("/GET parameter validation checker", () => {
  it("returns university list from the api", (done) => {
    chai
      .request(server)
      .get("/getSearchList?gpa=3.15&gre_score=308&country=Canada")
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res.statusCode).to.be.equal(200);
        expect(res.body).to.be.an("array");
        for (let data of res.body) {
          expect(data).to.have.property("university");
          expect(data).to.have.property("course");
          expect(data.university).to.be.equal("University of Toronto");
          expect(data.course).to.be.equal("computer science");
        }

        done();
      });
  });

  it("returns computer science course based on search keyword", (done) => {
    chai
      .request(server)
      .get("/getSearchList?gpa=3.15&gre_score=308&country=Canada&course=com")
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res.statusCode).to.be.equal(200);
        expect(res.body).to.be.an("array");
        for (let data of res.body) {
          expect(data).to.have.property("university");
          expect(data).to.have.property("course");
          expect(data.university).to.be.equal("University of Toronto");
          expect(data.course).to.be.equal("computer science");
        }

        done();
      });
  });
});
