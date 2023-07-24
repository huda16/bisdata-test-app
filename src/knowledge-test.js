import axios from "axios";

// Tuliskan syntax javascript (React atau framework/library lain) untuk hit API menggunakan Axios yang membutuhkan credential token setelah melakukan Login
const getDataWithToken = async () => {
  try {
    const token = "token";

    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};

getDataWithToken();

// Tuliskan syntax javascript (React atau framework/library lain) untuk metode send API request dengan menyertakan request body
const postData = async () => {
  try {
    const body = {
      title: "lorem ipsum",
      body: "quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto",
      userId: 1,
    };

    const response = await axios.post(
      "https://jsonplaceholder.typicode.com/posts",
      body
    );
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};

postData();

// Tuliskan syntax javascript (React atau framework/library lain) untuk metode send API request dengan menyertakan parameter
const getDataWithParameter = async (userId) => {
  try {
    const params = {
      userId: userId,
    };

    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts",
      {
        params,
      }
    );

    console.log(response.data);
  } catch (error) {
    console.error("Error:", error);
  }
};

getDataWithParameter(2);
