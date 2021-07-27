const UsersService = {
  getCountires(db) {
    return db.select("name").from("universities");
  },
  getSearchData(db, gpa, greScore, country, course) {
    let query = `SELECT universities.name as university,courses.name as course FROM universities JOIN courses ON universities.id =courses.university_id WHERE minimum_gpa<=${gpa} and minimum_gre <= ${greScore} and country='${country}' `;
    if (course) {
      query += ` and courses.name LIKE '%${course}%'`;
    }
    return db.raw(query);
    //   .select("id",db.ref('name').as('university_name'))
    //   .from("universities")
    //   .where("country", country)
    //   .andWhere("minimum_gpa", ">=", gpa)
    //   .andWhere("minimum_gre", ">=", greScore);
    // return db.select("name").from("courses").whereIn("university_id", subQuery);
  },
};

module.exports = UsersService;
