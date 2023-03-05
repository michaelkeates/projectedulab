CREATE OR REPLACE FUNCTION auth.unanswered_questions(hasura_session json)
RETURNS SETOF auth.questions
LANGUAGE sql
STABLE  
AS $function$
SELECT *
FROM auth.questions
WHERE id NOT IN (SELECT question_id FROM auth.users_answers WHERE user_id =(hasura_session ->> 'x-hasura-user-id') :: uuid)
$function$



CREATE
OR REPLACE FUNCTION auth.unanswered_questions(hasura_session json) RETURNS SETOF auth.questions LANGUAGE sql STABLE AS $ function $
SELECT
  *
FROM
  auth.questions
WHERE
  id NOT IN (
    SELECT
      question_id
    FROM
      auth.users_answers
    WHERE
      user_id =(hasura_session ->> 'x-hasura-user-id') :: uuid
  ) $ function $

  CREATE
OR REPLACE FUNCTION auth.unanswered_questions(hasura_session json) RETURNS SETOF auth.questions LANGUAGE sql STABLE AS $ function $
SELECT
  *
FROM
  auth.questions
WHERE
  id NOT IN (
    SELECT
      question_id
    FROM
      auth.users_answers
    WHERE
      user_id =(hasura_session ->> 'x-hasura-user-id') :: uuid
  ) $ function $