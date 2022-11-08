/**
 *
 * @param {*} postData
 * @param {*} path
 * @returns
 */

export const getPostOne = (postData, path) => {
  const pathArr = path.split("/").filter(Boolean);

  const data = pathArr.reduce((sum, current, index) => {
    const lastPath = pathArr.length - 1 === index;
    const target = sum.find(
      (one) =>
        one.title === current && one.type === (lastPath ? "post" : "directory")
    );

    return lastPath ? target : target?.children;
  }, postData);
  return data;
};
