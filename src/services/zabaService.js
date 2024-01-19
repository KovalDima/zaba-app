const fetchData = async (endpoint, category, sortBy, searchValue) => {
  category = category === "all" ? "" : category;
  sortBy = sortBy || "";
  try {
    const response = await fetch(
      `https://655fd1aa83aba11d99cfe2aa.mockapi.io/zaba-api/${endpoint}?category=${category}&sortBy=${sortBy}&name=${searchValue}`
    );
    const data = await response.json();
    if (data === "Not found") {
      return [];
    }
    return data;
  } catch (error) {
    throw new Error("Something went wrong");
  }
};

export { fetchData };
