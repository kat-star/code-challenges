// Need to scrub data based on the following sensitive fields

// Sensitive fields:
// ['name', 'email', 'phone']

function scrub(jsonObj) {
  let scrubbedData = {};

  for (let key in jsonObj) {
    if (key === "name" || key === "phone") {
      scrubbedData[key] = jsonObj[key].toString().replace(/[a-zA-Z0-9]/g, "*");
    } else if (key === "email") {
      const scrubbedEmails = jsonObj[key].map((email) =>
        email.replace(/[a-zA-Z0-9]/g, "*")
      );
      scrubbedData[key] = scrubbedEmails;
    } else if (key === "us_citizen") {
      scrubbedData[key] = "-";
    } else {
      scrubbedData[key] = jsonObj[key];
    }
  }
  return scrubbedData;
}

console.log(scrub(personData));

// Input:
const personData = {
  name: "Kelly Doe",
  email: ["kdoe@example.com"],
  id: 12324,
  phone: "(315) - 256-2234",
};

// Output:
// {
//   "name": "***** ***",
//   "email": ["****@*******.***"],
//   "id": 12324,
//   "phone": "**********"
// }