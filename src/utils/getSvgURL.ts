import { supabase } from "@configs";

export const getSvgURL = async (dirName: string, fileName: string) => {
  let url: string;

  try {
    const { data, error } = await supabase.storage
      .from("illustrations")
      .getPublicUrl(`${dirName}/${fileName}.svg`);

    if (data) {
      url = data.publicURL;
    }

    if (error) {
      throw new Error("Supabase error when fetch illustrations", error);
    }
  } catch ({ message }) {
    throw new Error("getSvgUrl error:", message);
  }

  return url;
};
