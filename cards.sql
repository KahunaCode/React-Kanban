INSERT INTO "Cards" VALUES
(default, 'DB make Styles', 'medium', 'queue', 'james', 'notJames', NOW(), NOW()),
(default, 'DB second Styles', 'medium', 'progress', 'DBjames', 'AlsoJames', NOW(), NOW()),
(default, 'DB Other Styles', 'medium', 'done', 'etc james', 'notJames', NOW(), NOW());



-- this is Cards.findAll()
-- DEBUG HERE [{"id":1,"title":"DB make Styles","priority":"medium","status":"queue","createdBy":"james","assignedTo":"notJames","createdAt":"2017-09-10T05:43:45.395Z","updatedAt":"2017-09-10T05:43:45.395Z"},{"id":2,"title":"DB second Styles","priority":"medium","status":"progress","createdBy":"DBjames","assignedTo":"AlsoJames","createdAt":"2017-09-10T05:43:45.395Z","updatedAt":"2017-09-10T05:43:45.395Z"},{"id":3,"title":"DB Other Styles","priority":"medium","status":"done","createdBy":"etc james","assignedTo":"notJames","createdAt":"2017-09-10T05:43:45.395Z","updatedAt":"2017-09-10T05:43:45.395Z"}]


-- this is DBcard
-- DEBUG HERE {"cards":[{"id":1,"title":"Server Make Better styles","priority":"medium","status":"queue","createdBy":"james","assignedTo":"notJames"},{"id":2,"title":"Make More styles","priority":"low","status":"done","createdBy":"otherJames","assignedTo":"james"},{"id":3,"title":"Make Great styles","priority":"high","status":"progress","createdBy":"otherJames","assignedTo":"james"}]}
