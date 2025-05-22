export type ExecuteResult<T> = { success: true; data: T } | { success: false; error: string };

export const executeAction = async <T>(action: () => Promise<T>): Promise<ExecuteResult<T>> => {
  try {
    const data = await action();
    return { success: true, data };
  } catch (error) {
    let message = "Something wrong happened";
    if (error instanceof Error) message = error.message;
    return { success: false, error: message };
  }
};
