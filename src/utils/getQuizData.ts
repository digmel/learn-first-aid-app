import { supabase } from "../api";

let randomNumbers = [];

while (randomNumbers.length < 10) {
  var r = Math.floor(Math.random() * 49) + 1;
  if (randomNumbers.indexOf(r) === -1) randomNumbers.push(r);
}

export const getQuizData = async () => {
  let data = [];
  try {
    const { data: quiz_data, error } = await supabase
      .from("quiz_data")
      .select(`*`);

    if (quiz_data) {
      data = quiz_data;
    }

    if (error) {
      throw new Error(error.message);
    }
  } catch ({ message }) {
    throw new Error("fetchQuizData error", message);
  }
  return data.map((item, index) => data[randomNumbers[index]]);
};
