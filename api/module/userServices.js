//All api's at oneplace
const UsersService = {
  getCountires(db) {
    return db.select("name").from("universities");
  },
  //function is responsible to get the searched results.
  getSearchData(db, gpa, greScore, country, course) {
    let query = `SELECT universities.name as university,courses.name as course FROM universities JOIN courses ON universities.id =courses.university_id WHERE minimum_gpa<=${gpa} and minimum_gre <= ${greScore} and country='${country}' `;
    //We are adding if we have a search string
    if (course) {
      query += ` and courses.name LIKE '%${course}%'`;
    }
    return db.raw(query);
  },
};

module.exports = UsersService;
