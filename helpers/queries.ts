import { gql, } from '@apollo/client'

export const BOOKS_QUERY = gql`
  query BookQuery {
    books {
      id
      title
    }
  }
`
;

export const GET_UNANSWERED_QUESTIONS = gql`
query unanswered_questions($hasura_session: json = "") {
  auth_unanswered_questions(args: {hasura_session: $hasura_session}) {
    id
    question
    question_answers {
      id
      answer
      is_correct
    }
  }
}
`
;

export const CREATE_NEW_QUESTION = gql`
mutation create_new_question(
  $question: String!
  $question_answers: auth_question_answers_arr_rel_insert_input!
) {
  insert_auth_questions_one(
    object: { question: $question, question_answers: $question_answers }
  ) {
    id
    question
    created_at
    question_answers {
      answer
    }
  }
}
`
;

export const SUBMIT_ANSWER = gql`
mutation submit_question($answer_id: uuid, $question_id: uuid) {
  insert_auth_users_answers_one(
    object: { answer_id: $answer_id, question_id: $question_id }
  ) {
    id
  }
}
`
;

export const RESTART_QUIZ = gql`
mutation restartQuiz {
  delete_auth_users_answers(where: {}) {
    affected_rows
  }
}
`
;