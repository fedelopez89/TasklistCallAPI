const axios = require("axios");
const { v4: uuidv4 } = require("uuid");

async function getTask(numberTask) {
  const config = {
    method: "get",
    url: `http://lorem-faker.vercel.app/api?quantity=${numberTask}`,
    headers: {},
  };

  const response = await axios(config);
  return response.data.map((task) => {
    return { id: uuidv4(), task };
  });
}

module.exports = {
  getTask,
};
