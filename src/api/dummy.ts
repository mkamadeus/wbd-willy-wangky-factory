/*
 * @Author: mkamadeus
 * @Date: 2020-11-13 11:54:21
 * @Last Modified by: mkamadeus
 * @Last Modified time: 2020-11-13 11:54:52
 */
export const generateDummyPromise = async <T>(
  data: T,
  delay: number = 1000
) => {
  return await new Promise<T>((resolve) =>
    setTimeout(() => resolve(data), delay)
  ).then((result) => {
    return result;
  });
};
