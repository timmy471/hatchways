export const getAverage = (numbers) =>
numbers.reduce((sum, value) => {
  return sum + Number(value);
}, 0) / numbers.length;

const makeLowerCase = (val) => val.toLowerCase().trim();

  //filter for name
  export const hasName = (student, name) =>
    `${makeLowerCase(student.firstName)} ${makeLowerCase(
      student.lastName
    )}`.includes(makeLowerCase(name));

  //filter for tag
  export const hasTag = (student, tag) => {
    let studentTags = student.tags || [""];
    if (studentTags) {
      let statusArray = studentTags.map((studentTag) =>
        studentTag.includes(tag)
      );
      if (statusArray.includes(true)) {
        return true;
      }
    }

    return false;

  };

  export const getResults = (students, name, tag) => {
    let newData = students;

    //filter for both values if available
    if (name.trim().length && tag.trim().length) {
      newData = students.filter(
        (student) => hasName(student, name) && hasTag(student, tag)
      );
    } else if (name.trim().length) {
      newData = students.filter((student) => hasName(student, name));
    } else if (tag.trim().length) {
      newData = students.filter((student) => hasTag(student, tag));
    }

    return newData;
  };