export const getRequest = async (ext) => {
  const url = "https://darkroomdb.nw.r.appspot.com/" + ext;
  const response = await fetch(url);
  const responseCleaned = await response.json();
  return responseCleaned;
};

export const postRequest = async (ext, data) => {
  const url = "https://darkroomdb.nw.r.appspot.com/" + ext;
  fetch(url, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(data),
  });
};
