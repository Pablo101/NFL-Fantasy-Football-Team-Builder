CREATE TABLE IF NOT EXISTS users(
	id serial PRIMARY KEY,
	name VARCHAR(30),
	password VARCHAR
);

CREATE TABLE IF NOT EXISTS player(
	id serial PRIMARY KEY,
	name VARCHAR(30),
	position_id TEXT,
	team_id TEXT,
	stats_page TEXT
);

CREATE TABLE IF NOT EXISTS position(
	id serial PRIMARY KEY,
	name VARCHAR(30)
);

CREATE TABLE IF NOT EXISTS team(
	id serial PRIMARY KEY,
	name VARCHAR(30)
);


ALTER TABLE team ADD user_id int;
ALTER TABLE team ADD players text;





-- CREATE TABLE IF NOT EXISTS logo(
-- 	id serial PRIMARY KEY,
-- 	image_tag TEXT
-- );

-- CREATE TABLE IF NOT EXISTS tweets(
-- 	id serial PRIMARY KEY,
-- 	user_id INTEGER,
-- 	tweet_id INTEGER
-- 	-- content TEXT
-- );
