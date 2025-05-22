export interface QuestionProps {
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}

interface APIResponse {
  results: QuestionProps[];
  response_code: number;
}

let pendingRequest: Promise<QuestionProps[]> | null = null;

export const QuestionsAPI = async (): Promise<QuestionProps[]> => {
  if (pendingRequest) {
    return pendingRequest;
  }

  pendingRequest = fetch('https://opentdb.com/api.php?amount=20')
    .then((response) => {
      if (!response.ok) {
        throw new Error('Failed to fetch questions');
      }
      return response.json();
    })
    .then((data: APIResponse) => {
      return data.results;
    })
    .finally(() => {
      pendingRequest = null;
    });

  return pendingRequest;
};
