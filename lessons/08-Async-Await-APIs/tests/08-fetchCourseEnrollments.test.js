import request from "supertest";
import { expect } from "chai";
import { unit8Server } from "../server.js";
import { courses, students } from "../data/08-fetchCourseEnrollments.data";
