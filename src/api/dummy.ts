/*
 * @Author: mkamadeus
 * @Date: 2020-11-13 11:54:21
 * @Last Modified by: mkamadeus
 * @Last Modified time: 2020-11-16 01:25:04
 */
export const generateDummyPromise = async <T>(
  data: T,
  delay: number = Math.random() * 5000
) => {
  return await new Promise<T>((resolve) =>
    setTimeout(() => resolve(data), delay)
  ).then((result) => {
    return result;
  });
};
