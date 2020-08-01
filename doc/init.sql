-- schéma initial de la DB m8s

-- table activity

DROP TABLE IF EXISTS "activity" CASCADE;

CREATE TABLE "activity" (
    "id" SERIAL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "description" VARCHAR(255) NOT NULL,
    "free_place" INT NOT NULL,
    "location" TEXT NOT NULL,
    "date" DATE NOT NULL,
    "hour" TIME NOT NULL,
    "user_id" INT NOT NULL REFERENCES "user"("id"),
    "created_at" TIMESTAMP NOT NULL DEFAULT now(),
    "updated_at" TIMESTAMP
);

-- table user

DROP TABLE IF EXISTS "user" CASCADE;

CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" TEXT UNIQUE NOT NULL,
    "firstname" TEXT NOT NULL,
    "lastname" TEXT NOT NULL,
    "avatar_url" VARCHAR,
    "email" TEXT UNIQUE NOT NULL,
    "password" TEXT NOT NULL,
    "isVerified" BOOLEAN DEFAULT FALSE,
    "resetPasswordToken" TEXT NULL,
    "resetPasswordExpires" TIMESTAMP NULL,
    "sendVerifyToken" TEXT NULL,
    "expiredVerifyToken" TIMESTAMP NULL,
    "created_at" TIMESTAMP NOT NULL DEFAULT now(),
    "updated_at" TIMESTAMP
);

-- table tag

DROP TABLE IF EXISTS "tag" CASCADE;

CREATE TABLE "tag" (
    "id" SERIAL PRIMARY KEY,
    "name" TEXT UNIQUE NOT NULL,
    "created_at" TIMESTAMP NOT NULL DEFAULT now(),
    "updated_at" TIMESTAMP
);

-- table de liaison activity <> tag

DROP TABLE IF EXISTS "activities_have_tags" CASCADE;

CREATE TABLE "activities_have_tags" (
    "id" SERIAL PRIMARY KEY,
    "tag_id" INT NOT NULL REFERENCES "tag"("id") ON DELETE CASCADE,
    "activity_id" INT NOT NULL REFERENCES "activity"("id") ON DELETE CASCADE,
    "created_at" TIMESTAMP NOT NULL DEFAULT now(),
    "updated_at" TIMESTAMP
);

-- table de liaison user <> tag

DROP TABLE IF EXISTS "users_have_tags" CASCADE;

CREATE TABLE "users_have_tags" (
    "id" SERIAL PRIMARY KEY,
    "tag_id" INT NOT NULL REFERENCES "tag"("id") ON DELETE CASCADE,
    "user_id" INT NOT NULL REFERENCES "user"("id") ON DELETE CASCADE,
    "created_at" TIMESTAMP NOT NULL DEFAULT now(),
    "updated_at" TIMESTAMP
);

-- table de liaison activity <> user

DROP TABLE IF EXISTS "activities_have_users" CASCADE;

CREATE TABLE "activities_have_users" (
    "id" SERIAL PRIMARY KEY,
    "activity_id" INT NOT NULL REFERENCES "activity"("id") ON DELETE CASCADE,
    "user_id" INT NOT NULL REFERENCES "user"("id") ON DELETE CASCADE,
    "created_at" TIMESTAMP NOT NULL DEFAULT now(),
    "updated_at" TIMESTAMP
);


-- ----- SEEDING -----

-- 3 activités

INSERT INTO "activity"("title", "description", "free_place", "location", "date", "hour", "user_id") VALUES ('Futsal tonight', 'Je cherche du monde pour organiser un futsal', 10, 'Bayonne', '2020-09-30', '21:00:00', 4), ('Tennis niveau débutant', 'Cherche un joueur débutant pour un tennis', 2, 'Marseille', '2020-09-30', '14:00:00', 4),
('Paintball de la mort qui tue', 'Cherche du monde pour un paintball 5vs5', 10, 'Toulouse', '2020-09-30', '16:00:00', 4);

-- 4 utilisateurs

INSERT INTO "user"("username", "firstname", "lastname", "avatar_url", "email", "password", "isVerified", "resetPasswordToken", "resetPasswordExpires", "sendVerifyToken", "expiredVerifyToken") VALUES
    ('Boyz', 'John', 'Doe', '', 'doe@gmail.com', '$2a$10$RhKlCOGaLI3maUMZm.tRYe5IWlVwW8t6X7EEBdMIbBrsq3sBXQexq', false, null, null, null, null),
    ('Lakiura', 'Mike', 'Dendele', '', 'mike@gmail.com', '$2a$10$RhKlCOGaLI3maUMZm.tRYe5IWlVwW8t6X7EEBdMIbBrsq3sBXQexq', false, null, null, null, null),
    ('Kiks', 'Franck', 'Dourny', '', 'franck@gmail.com', '$2a$10$RhKlCOGaLI3maUMZm.tRYe5IWlVwW8t6X7EEBdMIbBrsq3sBXQexq', false, null, null, null, null),
    ('Vins', 'Vincent', 'Herve', '', 'vincent.herve2012@laposte.net', '$2a$10$RhKlCOGaLI3maUMZm.tRYe5IWlVwW8t6X7EEBdMIbBrsq3sBXQexq', false, null, null, null, null);

-- 4 tags

INSERT INTO "tag"("name") VALUES (''), ('adrénaline'), ('accrobranche'), ('aérobic'), ('aquagym'), ('athlétisme'), ('babyfoot'), ('badminton'),
('baseball'), ('basket-ball'), ('billard'), ('bmx'), ('bodyboard'), ('bowling'), ('boxe'), ('canoë'), ('canyoning'), ('capoeira'), ('cirque'),
('course à pied'), (E'course d\'orientation'), ('crossfit'), ('cyclisme'), ('danse'), ('endurance'), ('équitation'), ('escalade'), ('escrime'), ('esport'),
('floorball'), ('football'), ('football américain'), ('footing'), ('futsal'), ('glisse'), ('golf'), ('gymnastique'), ('hanball'), ('handisport'), ('hockey'), ('kayak'), ('kitesurfing'),
('karting'), ('luge'), ('lutte'), ('moto balade'), ('moto cross'), ('musculation'), ('marathon'), ('natation'), ('paddle'), ('padel'), ('paintball'), ('pala'), ('parachutisme'),
('parapente'), ('parkour'), ('patinage'), ('pêche'), ('pelote basque'), ('pétanque'), ('pilates'), ('ping-pong'), ('planche à voile'), ('plongée'), ('polo'), ('quad'), ('rafting'),
('rallye'), ('roller'), ('rugby'), ('skateboard'), ('ski'), ('sport de combat'), ('squash'), ('step'), ('surf'), ('tennis'), ('tir'), (E'tir à l\'arc'), ('trotinette'),
('ulm'), ('vélo'), ('volley'), ('vtt'), ('wakeboard'), ('water-polo'), ('yoga'), ('zumba');

-- relation activité <> user

INSERT INTO "activities_have_users"("activity_id", "user_id") VALUES
    (1, 4),
    (2, 4),
    (3, 4);

-- relation activité <> tag

INSERT INTO "activities_have_tags"("activity_id", "tag_id") VALUES
    (1, 34),
    (2, 77),
    (3, 52);


-- relation user <> tag 

INSERT INTO "users_have_tags"("user_id", "tag_id") VALUES
    (1, 3);