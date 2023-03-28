/*either create or replace existing function*/
CREATE OR REPLACE FUNCTION auth.unanswered_questions(hasura_session json)
/*return set of questions*/
RETURNS SETOF auth.questions
/*use the sql language*/
LANGUAGE sql
/*use stable version to minimize bugs*/
STABLE  
/*as function body*/
AS $function$
/*select all questions*/
SELECT *
/*from questions table*/
FROM auth.questions
/*where id is not in the users_answers table*/
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